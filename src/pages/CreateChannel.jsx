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
      <div className=" h-[90vh] w-full flex justify-center items-center bg-red-50">

        <div className=" h-[50%] w-[85%] p-5 bg-slate-50 flex flex-col gap-10 rounded-lg shadow-lg">

        <h2 className=" text-xl font-semibold border-b-2 border-red-600">Create Channel</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="channelName"
              placeholder="Channel Name"
              onChange={handleChange}
              className="border border-slate-400 p-2 rounded-lg outline-0"
            />

            <textarea
              name="description"
              placeholder="Description"
              onChange={handleChange}
              className="border border-slate-400 p-2 rounded-lg outline-0"
            />

            <input
              type="text"
              name="channelBanner"
              placeholder="Banner URL"
              onChange={handleChange}
              className="border border-slate-400 p-2 rounded-lg outline-0"
            />

            <button
              type="submit"
              className="bg-linear-to-b from-red-500 to-red-600 text-white p-2 rounded-lg"
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
