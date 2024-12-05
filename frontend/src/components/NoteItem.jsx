// NoteItem.jsx
import React, { useState } from 'react';

const NoteItem = ({ note, onDelete, onEdit }) => {
    const handleDelete = () => {
        onDelete(note._id);
    };

    const handleEdit = () => {
        const newTitle = prompt('Edit note title:', note.title);
        const newContent = prompt('Edit note content:', note.content);

        if (newTitle !== null && newContent !== null) {
            onEdit(note._id, newTitle, newContent);
        }
    };

    return (
        <div className="note-item">
            <div className="card">
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <small>Category: {note.category}</small>
                <div className="card-buttons">
                    <button onClick={handleEdit} className="edit-button">Edit</button>
                    <button onClick={handleDelete} className="delete-button">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
