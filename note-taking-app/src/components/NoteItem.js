import React from 'react';

function NoteItem({ note, onEdit, onDelete }) {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onEdit(note.id)}>Edit</button>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
}

export default NoteItem;
