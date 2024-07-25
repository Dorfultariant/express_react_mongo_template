var express = require('express');
var router = express.Router();


const Book = require("../models/Book.js");

router.post("/", async (req, res, next) => {
    try {
        const { author, name, pages } = req.body;

        await Book.create({
            author,
            name,
            pages
        });

        res.status(200).json({ message: "Success" });

    } catch (err) {
        console.log("Error:", err);
        return res.status(500).json({ error: "Internal server error." });
    }
});

router.get("/:name", async (req, res, next) => {
    try {
        const book = await Book.findOne({ name: req.params.name });
        if (book) {
            return res.status(200).json(book);
        }
        res.status(404).json({ message: "Books not found." });

    } catch (err) {
        console.log("Error:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
