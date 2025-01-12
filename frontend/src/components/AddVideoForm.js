import React, { useState } from 'react';
import axios from 'axios';

const AddVideoForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    timestamp: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/videos', formData)
      .then(() => {
        alert('Video metadata added successfully!');
        setFormData({ title: '', description: '', tags: '', timestamp: '' });
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to add video metadata.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Video Metadata</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="tags"
        placeholder="Tags (comma-separated)"
        value={formData.tags}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="datetime-local"
        name="timestamp"
        value={formData.timestamp}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Add Video</button>
    </form>
  );
};

export default AddVideoForm;
