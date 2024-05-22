const express = require("express");
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDB, Task } = require("./database");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));


app.post("/new", asyncHandler(async (req, res) => {
    
    const newCard = new Task({
        "title" : req.body.title, 
        "details" : req.body.details, 
        "date": req.body.date

    });

    await newCard.save();
    
    res.status(201).json(newCard);
}));


// connects to the database and starts the server
async function start() {
    await connectToDB();

    return app.listen(3004, () => {
        console.log("Listening on port 3004");
    });
}

// fancy way of saying only run the start function if we run this script from the CLI with `node server.js`.
if (require.main === module) {
    start().catch((err) => console.error(err));
}