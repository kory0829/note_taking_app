import React, { useState } from 'react';
import { fetchNotesByCategory } from '../api/api'; 

const SearchModal = ({ isOpen, onClose, onSearchResults }) => {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const results = await fetchNotesByCategory(category);
            onSearchResults(results);
            onClose(); 
        } catch (error) {
            console.error('Error searching notes:', error);
        }
        setLoading(false);
    };

    if (!isOpen) return null; 

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button onClick={onClose} className="close-button">X</button>
                <h2>Search Notes by Category</h2>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Enter category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <button type="submit" disabled={loading}>Search</button>
                </form>
                {loading && <p>Loading...</p>}
            </div>
        </div>
    );
};

export default SearchModal;
