// NoteList.jsx
import React, { useEffect, useState } from 'react';
import { fetchNotes, deleteNote } from '../api/api';
import NoteItem from './NoteItem'; 

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const getNotes = async () => {
            try {
                const fetchedNotes = await fetchNotes();
                setNotes(fetchedNotes);
            } catch (error) {
                console.error('Error loading notes:', error);
            }
        };

        getNotes();
    }, []);

    const handleDelete = (id) => {
        deleteNote(id);
        setNotes(notes.filter((note) => note._id !== id));  // Remove note from state
    };

    const handleEdit = (id, newTitle, newContent) => {
        const updatedNotes = notes.map((note) =>
            note._id === id ? { ...note, title: newTitle, content: newContent } : note
        );
        setNotes(updatedNotes);
    };

    return (
        <div className="note-list">
            {notes.map((note) => (
                <NoteItem
                    key={note._id}
                    note={note}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );
};

export default NoteList;
