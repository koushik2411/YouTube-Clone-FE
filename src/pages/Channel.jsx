import React, { useEffect, useState } from "react";
import api from "../services/api";
import { FaEye } from "react-icons/fa";

function Channel() {
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    fetchChannel();
    fetchVideos();
  }, []);

  // Fetch channel
  const fetchChannel = async () => {
    const token = localStorage.getItem("token");

    const res = await api.get(
      "/channel/my-channel",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setChannel(res.data);
  };

  // Fetch videos
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

      {/* Channel Header */}
      {channel && (
        <div>

          <img
            src={channel.channelBanner}
            alt=""
            className=""
          />

          <h1>
            {channel.channelName}
          </h1>

          <p>
            {channel.description}
          </p>

        </div>
      )}

      {/* Videos */}
      <div>
        <h2>My Videos</h2>

        {
          videos.length === 0 && (
            <h2>No videos uploaded yet</h2>
          )
        }
        
        {videos.map((video) => (
          <div>

            <img
              src={video.thumbnailUrl}
              className=""
            />

            <div>
              <h2>{video.title}</h2>

              <h3>{video.category}</h3>

              <h3 className=" flex gap-2"> <FaEye/> {video.views} views</h3>

              <div className=" flex justify-between items-center gap-3">
                <button onClick={() => editVideo(video.id)}>Edit</button>

                <button onClick={() => deleteVideo(video.id)}>Delete</button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Upload Form */}
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
