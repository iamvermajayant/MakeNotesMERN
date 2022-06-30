const note = require('../Model/NoteModel');

const asyncHandler = require('express-async-handler');

const getNotes = asyncHandler(async(req,res) => {
    const notes = await Notes.find();
    res.json(notes);
});

module.exports = {getNotes};