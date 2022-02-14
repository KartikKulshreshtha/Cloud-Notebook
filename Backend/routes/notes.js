const express = require('express');
const fetchinguser = require('../middleware/fetchinguser');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Notes = require('../models/Note');

// This is ROUTE-1: Here we are fetching all the notes of the user using GET "/notes/fetchingallnotes" with Login Required
router.get('/fetchingallnotes', fetchinguser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("There is some error!!")
    }
})

// This is ROUTE-2: Here we are adding the notes using POST "/notes/addnotes" with Login Required
router.post('/addnotes', fetchinguser, [

    // Here we checking the parameters

    body("title", "Enter your note's title").isLength({ min: 3 }),
    body('description', "Description must be atleast 5 characteres").isLength({ min: 5 }),

], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // Here we making the validators for our application
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()

        res.json(savedNote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("There is some error!!")
    }
})


// This is ROUTE-3 : Here we are updating the existing note by PUT: /notes/updatenote/id with Login required
router.put('/updatenote/:id', fetchinguser, async (req, res)=>{
    const { title, description, tag } = req.body;

    // Here we are creating a newnote object
    const newNote = {};
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};

    // Find the note to be modified

    let note = await Notes.findById(req.params.id)
    if(!note){
        return res.status(404).send("Not found")
    }
    if(note.user.toString() !== req.user.id){
        return res.status(401).send('Not Allowed')
    }

    note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
    res.json(note)
})
module.exports = router