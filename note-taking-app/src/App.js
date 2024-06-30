import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function handleSave(note) {
    if (noteToEdit) {
      setNotes(notes.map(n => (n.id === note.id ? note : n)));
      setNoteToEdit(null);
    } else {
      setNotes([...notes, note]);
    }
  }

  function handleDelete(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  function handleEdit(id) {
    const note = notes.find(note => note.id === id);
    setNoteToEdit(note);
  }

  return (
    <div className="app">
      <h1>Note Taking App</h1>
      <NoteEditor onSave={handleSave} noteToEdit={noteToEdit} />
      <NoteList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
