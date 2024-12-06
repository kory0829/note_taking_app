import React, { useState, useEffect } from 'react';
import { fetchNotes, updateNote, deleteNote } from '../api/api'; 
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

    const handleDelete = async (id) => {
        try {
            await deleteNote(id);
            setNotes(notes.filter((note) => note._id !== id));
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    const handleEdit = async (id, newTitle, newContent) => {
        try {
            const updatedNote = { _id: id, title: newTitle, content: newContent };
            await updateNote(id, updatedNote); 
            setNotes(notes.map((note) => (note._id === id ? updatedNote : note))); 
        } catch (error) {
            console.error('Error updating note:', error);
        }
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
