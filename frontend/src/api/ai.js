const analyzeNoteWithAI = async (content) => {
  const API_KEY = process.env.VITE_OPENAI_API_KEY; 
  if (!API_KEY) {
    console.error("Missing OpenAI API key in environment variables.");
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
        max_tokens: 50,
        temperature: 0.5,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const category = response?.data?.choices?.[0]?.message?.content?.trim();
    return category || 'Uncategorized';
  } catch (error) {
    console.error('Error analyzing note with AI:', error.response?.data || error.message);
    return 'Error';
  }
};

export default analyzeNoteWithAI;
