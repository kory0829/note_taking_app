import axios from 'axios';

const analyzeNoteWithAI = async (content) => {
  const API_KEY = process.env.VITE_OPENAI_API_KEY;

  if (!API_KEY) {
    console.error('Missing API key in environment variables.');
    return 'Error: Missing API key';
  }

  const endpoint = 'https://api.openai.com/v1/chat/completions';

  try {
    const response = await axios.post(
      endpoint,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant that categorizes notes.' },
          { role: 'user', content: `Categorize the following note content into a category: "${content}"` },
        ],
        max_tokens: 100,  
        temperature: 0.5,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );

    const category = response.data.choices[0].message.content.trim();
    return category || 'Uncategorized';
  } catch (error) {
    console.error('Error analyzing note with AI:', error);
    return 'Error';
  }
};

// Function to create a new note
const createNote = async (noteData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/notes`, noteData);
    return response.data;
  } catch (error) {
    console.error('Error creating note:', error);
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
    await axios.delete(`${BASE_URL}/api/notes/${id}`);
    console.log(`Note with ID ${id} deleted successfully.`);
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};

// Function to update an existing note
const updateNote = async (id, noteData) => {
  try {
    const response = await axios.put(`/api/notes/${id}`, noteData);
    return response.data; 
  } catch (error) {
    console.error('Error updating note:', error);
    throw error;  
  }
};



// Export the functions
export { analyzeNoteWithAI, createNote, fetchNotes, updateNote, deleteNote };



