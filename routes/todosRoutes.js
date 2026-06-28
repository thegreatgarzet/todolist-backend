import express from "express";
import todo from "../models/todo.js";
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

//Todos
router.post("/", authMiddleware, async (req, res) =>{
    try {
        const newObj = {...req.body, userID: req.user.id};

        console.log(newObj);

        const newTodo = await todo.create({...req.body, userID: req.user.id});
        
        res.json(newTodo);
    } catch (error) {
        res.json(error);
    }
});

router.get("/", authMiddleware, async (req, res) => {
    try {
        const allTodos = await todo.find({userID: req.user.id});

        res.json(allTodos);
    } catch (error) {
        res.json(error);
    }
});

router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const updatedTodo = await todo.findByIdAndUpdate(req.params.id, req.body, {new: true});

        res.json(updatedTodo);
    } catch (error) {
        res.json(error);
    }
});

router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const deletedTodo = await todo.findByIdAndDelete(req.params.id);

        res.json(deletedTodo);
    } catch (error) {
        res.json(error);
    }
});
//End Todos

export default router;