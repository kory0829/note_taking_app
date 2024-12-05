// // // frontend/src/components/NoteList.js
// // import React from 'react';
// // import NoteItem from './NoteItem';

// // const NoteList = ({ notes, onDelete, onEdit }) => {
// //     return (
// //         <div>
// //             {notes.map(note => (
// //                 <NoteItem 
// //                     key={note._id} 
// //                     note={note} 
// //                     onDelete={onDelete} 
// //                     onEdit={onEdit}  
// //                 />
// //             ))}
// //         </div>
// //     );
// // };

// // export default NoteList;


// import React, { useEffect, useState } from 'react';
// import { fetchNotes } from '../api/api';

// const NoteList = () => {
//     const [notes, setNotes] = useState([]); // Initialize as an empty array

//     useEffect(() => {
//         const getNotes = async () => {
//             try {
//                 const fetchedNotes = await fetchNotes();
//                 setNotes(fetchedNotes || []); // Ensure it is an array
//             } catch (error) {
//                 console.error("Error loading notes:", error);
//                 setNotes([]); // Fallback to an empty array on error
//             }
//         };

//         getNotes();
//     }, []);

//     {Array.isArray(notes) && notes.map((note) => (
//         <li key={note._id}>
//             <h3>{note.title}</h3>
//             <p>{note.content}</p>
//         </li>
//     ))}

//     return (
//         <div>
//             {notes.length === 0 ? (
//                 <p>No notes available.</p>
//             ) : (
//                 <ul>
//                     {notes.map((note) => (
//                         <li key={note._id}>
//                             <h3>{note.title}</h3>
//                             <p>{note.content}</p>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default NoteList;


// // NoteList.jsx
// import React, { useEffect, useState } from 'react';
// import { fetchNotes, deleteNote } from '../api/api';
// import NoteItem from './NoteItem';  // Assuming you have a separate NoteItem component

// const NoteList = () => {
//     const [notes, setNotes] = useState([]);

//     useEffect(() => {
//         const getNotes = async () => {
//             try {
//                 const fetchedNotes = await fetchNotes();
//                 setNotes(fetchedNotes);
//             } catch (error) {
//                 console.error('Error loading notes:', error);
//             }
//         };

//         getNotes();
//     }, []);

//     const handleDelete = (id) => {
//         deleteNote(id);
//         setNotes(notes.filter((note) => note._id !== id));  // Remove note from state
//     };

//     const handleEdit = (id, newTitle, newContent) => {
//         const updatedNotes = notes.map((note) =>
//             note._id === id ? { ...note, title: newTitle, content: newContent } : note
//         );
//         setNotes(updatedNotes);
//     };

//     return (
//         <div className="note-list">
//             {notes.map((note) => (
//                 <NoteItem
//                     key={note._id}
//                     note={note}
//                     onDelete={handleDelete}
//                     onEdit={handleEdit}
//                 />
//             ))}
//         </div>
//     );
// };

// export default NoteList;


// NoteList.jsx
import React, { useEffect, useState } from 'react';
import { fetchNotes, deleteNote } from '../api/api';
import NoteItem from './NoteItem';  // Assuming you have a separate NoteItem component

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

    const handleDelete = (id) => {
        deleteNote(id);
        setNotes(notes.filter((note) => note._id !== id));  // Remove note from state
    };

    const handleEdit = (id, newTitle, newContent) => {
        const updatedNotes = notes.map((note) =>
            note._id === id ? { ...note, title: newTitle, content: newContent } : note
        );
        setNotes(updatedNotes);
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
