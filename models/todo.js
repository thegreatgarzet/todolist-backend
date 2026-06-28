import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text: String,
    category: String,
    isComplete: Boolean,
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
},
{
    collection: 'todos'
});

export default mongoose.model('todoSchema', todoSchema);