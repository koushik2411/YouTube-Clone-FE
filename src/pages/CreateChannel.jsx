import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function CreateChannel() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    channelName: "",
    description: "",
    channelBanner: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post("/channel/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Channel Created Successfully");

      navigate("/channel");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create channel");
    }
  };

  return (
    <Layout>
      <div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="channelName"
              placeholder="Channel Name"
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <textarea
              name="description"
              placeholder="Description"
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              type="text"
              name="channelBanner"
              placeholder="Banner URL"
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Create Channel
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default CreateChannel;
