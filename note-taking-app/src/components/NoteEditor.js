import React, { useState } from 'react';
import './NoteEditor.js';

const NoteEditor = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [bgColor, setBgColor] = useState('bg-white');

  const handleAddNote = () => {
    if (title && content) {
      onAddNote({
        title,
        content,
        bgColor
      });
      setTitle('');
      setContent('');
      setBgColor('bg-white');
    }
  };

  return (
    <div className="note-editor">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="background-picker">
        <button className="bg-white" onClick={() => setBgColor('bg-white')}></button>
        <button className="bg-light" onClick={() => setBgColor('bg-light')}></button>
        <button className="bg-light-blue" onClick={() => setBgColor('bg-light-blue')}></button>
        <button className="bg-light-green" onClick={() => setBgColor('bg-light-green')}></button>
        <button className="bg-primary" onClick={() => setBgColor('bg-primary')}></button>
        <button className="bg-secondary" onClick={() => setBgColor('bg-secondary')}></button>
        <button className="bg-success" onClick={() => setBgColor('bg-success')}></button>
        <button className="bg-danger" onClick={() => setBgColor('bg-danger')}></button>
        <button className="bg-warning" onClick={() => setBgColor('bg-warning')}></button>
        <button className="bg-info" onClick={() => setBgColor('bg-info')}></button>
      </div>
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default NoteEditor;
