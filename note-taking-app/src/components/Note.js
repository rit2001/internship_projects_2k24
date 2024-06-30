import React from 'react';

function Note({ note, onDelete, onEdit }) {
  return (
    <div className="note">
      <div className="note-content">
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
      <div className="note-actions">
        <button onClick={() => onEdit(note.id)}>Edit</button>
        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Note;
