import React, { useState, useEffect } from 'react';
import { fetchNotes, deleteNote } from './api/api';  
import NoteForm from './components/NoteForm';
import Firefly from './components/FireFly'; 
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    const loadNotes = async () => {
      try {
        const notesData = await fetchNotes();
        setNotes(notesData);
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    };
    loadNotes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="app">
      <h1>Notes</h1>
      <NoteForm onNoteCreated={(newNote) => setNotes([...notes, newNote])} />
      <NoteList notes={notes} onDelete={handleDelete} />
      <Firefly />
    </div>
  );
};

export default App;
