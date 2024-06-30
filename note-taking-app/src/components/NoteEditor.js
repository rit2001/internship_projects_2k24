import React, { useState, useEffect } from 'react';

function NoteEditor({ onSave, noteToEdit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [noteToEdit]);

  function handleSave() {
    if (title && content) {
      onSave({ title, content, id: noteToEdit ? noteToEdit.id : Date.now() });
      setTitle('');
      setContent('');
    }
  }

  return (
    <div className="note-editor">
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Content" 
        value={content} 
        onChange={e => setContent(e.target.value)} 
      ></textarea>
      <button onClick={handleSave}>
        {noteToEdit ? 'Update Note' : 'Add Note'}
      </button>
    </div>
  );
}

export default NoteEditor;
