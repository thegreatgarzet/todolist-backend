import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todosRoutes from './routes/todosRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
 
app.use('/auth', authRoutes);
app.use('/todos', todosRoutes);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado");
    } catch (error) {
        console.log("Erro ao conectar no Banco: ", error);   
    }
    
}

connectDB().then(() => {
    app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
});
