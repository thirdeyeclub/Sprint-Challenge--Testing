const express = require('express');
const server = express();
const db = require("./database/dbConfig");

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json(res);
});

server.post("/games", (req, res) => {
    const { title, genre, releaseYear } = req.body;
    db("games")
        .insert({ title, genre, releaseYear })
        .then(x => {
        if (title && genre) {
            res.status(201).json({ message: `${title} added to library.` });
        }
        })
        .catch(error => {
        res.status(404).json(error);
        });
});

server.get("/games", (req, res) => {
    db("games")
        .get()
        .then(() => {
            res.status(200).json([]);
        });
});

module.exports = server;