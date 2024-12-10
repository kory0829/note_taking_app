import React, { useState, useEffect } from 'react';
import { fetchNotes, deleteNote } from './api/api';
import NoteForm from './components/NoteForm';
import Firefly from './components/FireFly';
import NoteList from './components/NoteList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import MusicButton from './components/MusicButton';
import SearchModal from './components/SearchModal';


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
      <Navbar />
      <SearchModal/>
      <MusicButton/>
      <h1>Notefy-🧾</h1>
      <NoteForm onNoteCreated={(newNote) => setNotes([...notes, newNote])} />
      <NoteList notes={notes} onDelete={handleDelete} />
      <Firefly />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
