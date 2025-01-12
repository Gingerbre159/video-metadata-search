import React from 'react';

const VideoTable = ({ videos }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video.id}>
              <td>{video.title}</td>
              <td>{video.description}</td>
              <td>{video.tags}</td>
              <td>{new Date(video.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideoTable;
