/*
const noteRouter = require('express').Router();
const fs = require('fs');
const path = require('path');

noteRouter.get('/', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  res.json(notes);
});

noteRouter.post('/', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  const newNote = req.body;
  notes.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));
  res.json(notes);
});

module.exports = noteRouter;
 //
 */