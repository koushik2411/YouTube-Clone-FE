import React, { useEffect, useState } from 'react'
import api from "../services/api"

function Channel() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const token = localStorage.getItem("token");

    const response = await api.get("/videos/my-videos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setVideos(response.data);
  }

  return (
    <div>

      <h1>My Channel</h1>

      {videos.map((video) => (

        <div>

          <h2>{video.title}</h2>

          <button>Edit</button>

          <button>Delete</button>

        </div>
      ))}
    </div>
  )
}

export default Channel