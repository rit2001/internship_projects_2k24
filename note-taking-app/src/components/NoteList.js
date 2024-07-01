import React from 'react';
import './NoteList.js';

const NoteList = ({ notes, onEditNote, onDeleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <div key={index} className={`note ${note.bgColor}`}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <div className="note-actions">
            <button className="edit" onClick={() => onEditNote(note)}>Edit</button>
            <button className="delete" onClick={() => onDeleteNote(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
