import React, { useState } from 'react';
import { createNote, updateNote, deleteNote } from '../api/api';

const NoteForm = ({ onNoteCreated, noteToEdit, onNoteUpdated }) => {
    const [title, setTitle] = useState(noteToEdit?.title || '');
    const [content, setContent] = useState(noteToEdit?.content || '');
    const [category, setCategory] = useState(noteToEdit?.category || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting note:', { title, content });

        const newNote = { title, content, category: category || 'Uncategorized' };
        console.log('Note to send:', newNote);

        try {
            let savedNote;
            if (noteToEdit) {
                savedNote = await updateNote(noteToEdit._id, newNote);
                console.log('Note updated:', savedNote);
                onNoteUpdated(savedNote);
            } else {
                savedNote = await createNote(newNote);
                console.log('Note saved:', savedNote);
                onNoteCreated(savedNote);
            }
            setTitle('');
            setContent('');
            setCategory('');
        } catch (error) {
            console.error('Error saving note:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button type="submit">{noteToEdit ? 'Update Note' : 'Add Note'}</button>
            {noteToEdit && (
                <button
                    type="button"
                    onClick={() => deleteNoteHandler(noteToEdit._id)}
                >
                    Delete Note
                </button>
            )}
        </form>
    );
};

export default NoteForm;
