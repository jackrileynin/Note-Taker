const noteRouter = require('express').Router();
const fs = require('fs');
const path = require('path'); // Import the 'path' module

noteRouter.get("/api/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8")); // Parse the content into an array
  res.json(notes);
});

noteRouter.post("/api/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  const newNote = req.body;
  notes.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});

module.exports = noteRouter;
