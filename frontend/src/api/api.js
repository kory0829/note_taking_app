import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

// Function to create a new note
const createNote = async (noteData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/notes`, noteData);
    return response.data;
  } catch (error) {
    console.error('Error creating note:', error.response?.data || error.message);
    throw error;
  }
};

// Function to fetch all notes
const fetchNotes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/notes`);
    console.log('Fetched notes:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching notes:', error.response?.data || error.message);
    throw error;
  }
};

// Function to delete a note by ID
const deleteNote = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/notes/${id}`);
    console.log(`Note with ID ${id} deleted successfully.`);
    return response.data;
  } catch (error) {
    console.error('Error deleting note:', error.response?.data || error.message);
    throw error;
  }
};

// Function to update an existing note
const updateNote = async (id, noteData) => {
  try {
    if (!id || !noteData || typeof noteData !== 'object') {
      throw new Error('Invalid ID or note data for updating');
    }
    const response = await axios.put(`${BASE_URL}/api/notes/${id}`, noteData);
    console.log(`Note with ID ${id} updated successfully:`, response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating note:', error.response?.data || error.message);
    throw error;
  }
};

// Function to fetch notes by category
const fetchNotesByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/api/notes?category=${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch notes');
    }
    const notes = await response.json();
    console.log('Search Results:', notes);
    return notes;
  } catch (error) {
    console.error('Error fetching notes by category:', error.message);
    throw error;
  }
};

export { createNote, fetchNotes, updateNote, deleteNote, fetchNotesByCategory };
