const express = require("express");
const cors = require('cors');
const router = require("./router"); 

const app = express();

app.use(cors());
app.use(express.json());

// http://localhost:3333/Event/events
app.use("/Event", router); 

app.listen(3333, () => {
    console.log("Server Listening on Port 3333");
});

//npm init -y
// npm install mysql2 cors express
//node server.js