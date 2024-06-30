import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [resume, setResume] = useState({
    name: '',
    email: '',
    education: '',
    experience: '',
    skills: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResume({
      ...resume,
      [name]: value
    });
  };

  const handleSave = () => {
    // Save the resume to backend or localStorage
    console.log('Resume saved:', resume);
  };

  return (
    <div>
      <h2>Resume Builder</h2>
      <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={resume.name} 
        onChange={handleChange} 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={resume.email} 
        onChange={handleChange} 
      />
      <textarea 
        name="education" 
        placeholder="Education" 
        value={resume.education} 
        onChange={handleChange} 
      ></textarea>
      <textarea 
        name="experience" 
        placeholder="Experience" 
        value={resume.experience} 
        onChange={handleChange} 
      ></textarea>
      <textarea 
        name="skills" 
        placeholder="Skills" 
        value={resume.skills} 
        onChange={handleChange} 
      ></textarea>
      <button onClick={handleSave}>Save Resume</button>
    </div>
  );
};

export default ResumeBuilder;
