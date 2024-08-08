const express = require('express')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser')
const Notes = require('../models/Notes')
const { validationResult, body } = require('express-validator');

//Route 1: Get all notes using GET '/fetchallnotes'. Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

//Route 2: Add a new note using POST '/addnote'. Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a title').isLength({ min: 3 }),
    body('description', 'Minimum length to be 8').isLength({ min: 8 })
], async (req, res) => {
    try {
        const { title, description } = req.body;
        //If there are errors, return bad request(400) and the associated errors
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).send({ errors: result.array() });
        }
        const note = new Notes({
            title, description, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

//Route 3: Update a note using POST '/updatenote'. Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description } = req.body;
    //Create a newNote object
    const newNote = {}
    if(title) {newNote.title = title}
    if(description) {newNote.description = description}
    //Find the note to be updated and update it
    let note = await Notes.findById(req.params.id)
    //1. To check whether the note exists or not
    if(!note) {return res.status(404).send("Not Found")}
    //2. To check whether the user logged in is same as the one who created the note
    if(note.user.toString() !== req.user.id)
    {
        return res.status(401).send("Not Allowed")
    }
    note = await Notes.findByIdAndUpdate(req.params.id,{$set: newNote},{new: true})
    res.json({note})
})
module.exports = router;