import React, { useEffect, useState } from "react";
import api from "../services/api";

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
  };

  // Upload Form
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnailUrl: "",
    videoUrl: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Create Video
  const createVideo = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    await api.post("/videos/create", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchVideos();
  };

  // Delete video
  const deleteVideo = async (id) => {
    const token = localStorage.getItem("token");

    await api.delete(`/videos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchVideos();
  };

  // Edit video
  const editVideo = async (id) => {
    const title = prompt("New title");

    if (!title) return;

    const token = localStorage.getItem("token");

    await api.put(
      `/videos/${id}`,
      { title },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    fetchVideos();
  };

  return (
    <div>
      <h1>My Channel</h1>

      {videos.map((video) => (
        <div>
          <h2>{video.title}</h2>

          <button onClick={() => editVideo(video.id)}>Edit</button>

          <button onClick={() => deleteVideo(video.id)}>Delete</button>
        </div>
      ))}

      <form onSubmit={createVideo}>
        <input 
        name="title" 
        placeholder="Title" 
        onChange={handleChange} 
        />

        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <input
          name="thumbnailUrl"
          placeholder="Thumbnail URL"
          onChange={handleChange}
        />

        <input
          name="videoUrl"
          placeholder="Video URL"
          onChange={handleChange}
        />

        <input 
          name="category" 
          placeholder="Category" 
          onChange={handleChange} 
        />

        <button type="submit">Upload Video</button>
      </form>

    </div>
  );
}

export default Channel;
