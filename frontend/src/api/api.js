import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

// Function to create a new note
const createNote = async (noteData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/notes`, noteData);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status code outside the 2xx range
      console.error('Error creating note:', error.response.status, error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Error creating note: No response received from server');
    } else {
      // Something happened in setting up the request
      console.error('Error creating note:', error.message);
    }
    throw new Error('Failed to create note');  // Throw a custom error
  }
};

// Function to fetch all notes
const fetchNotes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/notes`);
    return response.data || []; // Ensure it returns an empty array if undefined
  } catch (error) {
    if (error.response) {
      console.error('Error fetching notes:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Error fetching notes: No response received from server');
    } else {
      console.error('Error fetching notes:', error.message);
    }
    throw new Error('Failed to fetch notes');
  }
};

// Function to delete a note by ID
const deleteNote = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/api/notes/${id}`);
    console.log(`Note with ID ${id} deleted successfully.`);
  } catch (error) {
    if (error.response) {
      console.error('Error deleting note:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Error deleting note: No response received from server');
    } else {
      console.error('Error deleting note:', error.message);
    }
    throw new Error('Failed to delete note');
  }
};

// Function to update an existing note
const updateNote = async (id, noteData) => {
  try {
    const response = await axios.put(`${BASE_URL}/api/notes/${id}`, noteData);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error updating note:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Error updating note: No response received from server');
    } else {
      console.error('Error updating note:', error.message);
    }
    throw new Error('Failed to update note');
  }
};

// Function to fetch notes by category
const fetchNotesByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/notes`, { params: { category } });
    return response.data || [];
  } catch (error) {
    if (error.response) {
      console.error('Error fetching notes by category:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Error fetching notes by category: No response received from server');
    } else {
      console.error('Error fetching notes by category:', error.message);
    }
    throw new Error('Failed to fetch notes by category');
  }
};

export { createNote, fetchNotes, updateNote, deleteNote, fetchNotesByCategory };
