import mongoose from "mongoose";
mongoose.connect('mongodb+srv://isamara:admin@api-node.65ka0ar.mongodb.net/express-node');

let db = mongoose.connection;

export default db;