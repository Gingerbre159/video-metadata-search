import React, { useState } from 'react';
import AddVideoForm from './components/AddVideoForm';
import SearchBar from './components/SearchBar';
import VideoTable from './components/VideoTable';
import axios from 'axios';

const App = () => {
  const [videos, setVideos] = useState([]);

  const handleSearch = (query) => {
    axios
      .get(`http://localhost:8080/api/videos?query=${query}`)
      .then((response) => {
        setVideos(response.data);
      })
      .catch((err) => {
        console.error(err);
        alert('Search failed.');
      });
  };

  return (
    <div>
      <h1>Video Metadata Search</h1>
      <AddVideoForm />
      <SearchBar onSearch={handleSearch} />
      <VideoTable videos={videos} />
    </div>
  );
};

export default App;
