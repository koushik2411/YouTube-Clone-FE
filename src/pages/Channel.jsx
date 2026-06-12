import React, { useEffect, useState } from "react";
import api from "../services/api";
import { FaEye } from "react-icons/fa";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function Channel() {
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    fetchChannel();
    fetchVideos();
  }, []);

  // Fetch channel
  const fetchChannel = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/channel/my-channel", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setChannel(res.data);
    } catch (error) {
      setChannel(null);
    }
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
  const deleteVideo = async (_id) => {
    const token = localStorage.getItem("token");

    await api.delete(`/videos/${_id}`, {
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
    <Layout>
      <div className=" p-3 flex flex-col gap-5">
        {/* Channel Header */}
        {channel && (
          <div className=" flex flex-col gap-3">
            <img
              src={channel.channelBanner}
              alt={channel.channelName}
              className=" rounded-lg lg:w-full lg:h-100 lg:object-cover"
            />

            <div className=" flex flex-col">
              <h1 className=" text-xl font-semibold">{channel.channelName}</h1>

              <p>{channel.description}</p>
            </div>
          </div>
        )}

        {/* Upload Form */}
        <div className=" flex flex-col gap-3">
          <h2 className=" font-semibold border-b-2 border-red-600">
            Upload New Video
          </h2>

          <form
            onSubmit={createVideo}
            className=" w-[90%] max-w-180 flex flex-col gap-3 self-center"
          >
            <input
              name="title"
              placeholder="Title"
              onChange={handleChange}
              className=" py-0.5 px-2 rounded outline-0 border-2 border-slate-300"
            />

            <input
              name="description"
              placeholder="Description"
              onChange={handleChange}
              className=" py-0.5 px-2 rounded outline-0 border-2 border-slate-300"
            />

            <input
              name="thumbnailUrl"
              placeholder="Thumbnail URL"
              onChange={handleChange}
              className=" py-0.5 px-2 rounded outline-0 border-2 border-slate-300"
            />

            <input
              name="videoUrl"
              placeholder="Video URL"
              onChange={handleChange}
              className=" py-0.5 px-2 rounded outline-0 border-2 border-slate-300"
            />

            <input
              name="category"
              placeholder="Category"
              onChange={handleChange}
              className=" py-0.5 px-2 rounded outline-0 border-2 border-slate-300"
            />

            <button
              type="submit"
              className=" px-2 py-1 bg-linear-to-b from-red-500 to-red-600 text-white rounded-lg"
            >
              Upload Video
            </button>
          </form>
        </div>

        {/* Videos */}
        <div>
          <h2 className=" font-semibold border-b-2 border-red-600">
            My Videos
          </h2>

          <div className=" p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {videos.length === 0 && (
              <h2 className=" mt-20 text-center">No videos uploaded yet</h2>
            )}

            {videos.map((video) => (
              
                <div
                  key={video._id}
                  className=" w-full h-full p-1 flex md:flex-col gap-1 md:gap-3 overflow-hidden hover:scale-[1.02] rounded-lg border border-slate-300"
                >
                  <img src={video.thumbnailUrl} className=" w-[40%] md:w-full rounded-lg" />

                  <div className=" p-3 flex flex-col">
                    <Link to={`/watch/${video._id}`}>
                      <h2 className=" font-semibold">{video.title}</h2>
                    </Link> 

                    <h3 className=" font-semibold text-sm text-slate-700">{video.category}</h3>

                    <h3 className=" flex gap-2 items-center font-semibold text-sm text-slate-700">
                      {" "}
                      <FaEye /> {video.views} views
                    </h3>

                    <div className=" my-3 flex justify-end  items-center gap-3">
                      <button onClick={() => editVideo(video.id)} className=" py-0.5 px-2 border border-slate-300 rounded-lg hover:bg-amber-500 hover:text-white ">Edit</button>

                      <button onClick={() => deleteVideo(video._id)} className=" py-0.5 px-2 border border-slate-300 rounded-lg hover:bg-red-500 hover:text-white ">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Channel;
