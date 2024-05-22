const mongoose = require('mongoose');
const dbConnectionUri = "mongodb+srv://andrealukas24:yahSEKI00@cluster0.upjp0bk.mongodb.net/";
const dbName = "to-do list app";


const taskSchema = mongoose.Schema({
    "title":String, 
    "details":String, 
    "date": Date
});

const Task = mongoose.model('Task', taskSchema);

// Connects to database
async function connectToDB() {
    await mongoose.connect(dbConnectionUri, { dbName });
    console.log("Successfully connected to MongoDB");
}

// Exports connect function and the Task model to use in `server.js`
module.exports = { connectToDB, Task };