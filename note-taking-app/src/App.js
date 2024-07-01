import React, { useState } from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  const editNote = (noteToEdit) => {
    const updatedNotes = notes.map(note => 
      note === noteToEdit ? { ...note, isEditing: true } : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <h1>Note Taking App</h1>
      <NoteEditor onAddNote={addNote} />
      <NoteList notes={notes} onEditNote={editNote} onDeleteNote={deleteNote} />
    </div>
  );
};

export default App;
