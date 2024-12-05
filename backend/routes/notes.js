const express = require('express');
const router = express.Router();
const Note = require('../models/noteModel');

//  new note
router.post('/', async (req, res) => {
    try {
        const { title, content, category } = req.body;

        //  input validation
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        const newNote = new Note({ title, content, category });
        await newNote.save();
        res.status(201).json(newNote); 
    } catch (err) {
        console.error('Error creating note:', err);
        res.status(500).json({ message: 'Error creating note' });
    }
});

// Get all notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        console.log('Fetched notes:', notes); 
        res.json(notes || []); 
    } catch (err) {
        console.error('Error fetching notes:', err);
        res.status(500).json({ message: 'Error fetching notes' });
    }
});

// Get a specific note by ID
router.get('/:id', async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.json(note); 
    } catch (err) {
        console.error('Error fetching note:', err);
        res.status(500).json({ message: 'Error fetching note' });
    }
});

// Update a note by ID
router.put('/:id', async (req, res) => {
    try {
        const { title, content, category } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content, category },
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.json(updatedNote); 
    } catch (err) {
        console.error('Error updating note:', err);
        res.status(500).json({ message: 'Error updating note' });
    }
});

// Delete a note by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(204).end(); 
    } catch (err) {
        console.error('Error deleting note:', err);
        res.status(500).json({ message: 'Error deleting note' });
    }
});

module.exports = router;
