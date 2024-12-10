import React, { useState } from 'react';
import { fetchNotesByCategory } from '../api/api';

const SearchModal = ({ onSearch }) => {
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!category.trim()) {
      setError('Category cannot be empty.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const notes = await fetchNotesByCategory(category.trim());
      if (notes.length === 0) {
        setError('No notes found for this category.');
      }
      onSearch(notes);
    } catch (err) {
      setError('Failed to fetch notes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-modal">
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Search by category"
      />
      <button className ="searchButton" onClick={handleSearch} disabled={loading || !category.trim()}>search</button>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SearchModal;
