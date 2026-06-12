import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Layout from "../components/Layout";
import { FaDownload, FaEye, FaSave, FaShare } from "react-icons/fa";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";

function VideoPlayer() {
  const { id } = useParams();

  // Video
  const [video, setVideo] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchVideo();
    fetchComments();
  }, [id]);

  // Fetch video
  const fetchVideo = async () => {
    try {
      const res = await api.get(`/videos/${id}`);

      setVideo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Like
  const likeVideo = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.put(
        `/videos/like/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      fetchVideo();
    } catch (error) {
      console.log(error);
    }
  };

  // Dislike
  const dislikeVideo = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.put(
        `/videos/dislike/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      fetchVideo();
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Comments
  const fetchComments = async () => {
    try {
      const res = await api.get(`/comments/${id}`);

      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Add comment
  const addComment = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      await api.post(
        `/comments/${id}`,
        {
          text: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setComment("");
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  // Check for video
  if (!video) return <h2>Loading Video...</h2>;

  return (
    <Layout>
      <div className=" p-3 flex flex-col gap-4">
        
        <div className=" flex-1 max-w-svw ">

          <video
            controls
            className=" w-full rounded-lg"
          >

            <source
              src={video.videoUrl}
              type="video/mp4"
            />

          </video>
        </div>

        <div className=" mt-3 flex flex-col gap-1">
          <h2 className=" text-lg font-bold">{video.title}</h2>

          <h3 className=" flex gap-2 items-center font-semibold text-sm text-slate-700"><FaEye/> {video.views} views</h3>

          <p className=" text-sm text-slate-700">{video.description}</p>
        </div>

        {/* REACTION BUTTONS */}
        <div className=" mt-5 flex justify-evenly gap-2 overflow-scroll">

          <button onClick={likeVideo} className=" py-1 px-3 flex items-center gap-2 border border-slate-300 rounded-2xl"> <AiFillLike/> {video.likes.length}</button>

          <button onClick={dislikeVideo} className=" py-1 px-3 flex items-center gap-2 border border-slate-300 rounded-2xl">
            <AiFillDislike/> {video.dislikes.length}
          </button>

          <button className=" py-1 px-3 flex items-center gap-2 border border-slate-300 rounded-2xl"><FaShare/> Share</button>

          <button className=" py-1 px-3 flex items-center gap-2 border border-slate-300 rounded-2xl"><FaDownload/> Download</button>

          <button className=" py-1 px-3 flex items-center gap-2 border border-slate-300 rounded-2xl"><FaSave/> Save</button>
        </div>

        {/* CHANNEL NAME AND SUBSCRIBE BUTTON */}
        <h4 className="  my-3 border-y-2 border-slate-300 py-3 font-semibold">{video.channel?.channelName}</h4>

        {/* COMMENT FORM */}
        <div className=" px-2 pb-7 flex items-center justify-evenly border-b-2 border-slate-300">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write comment"
            className=" w-[80vw] md:w-[70vw] p-2 px-4 border border-slate-800 rounded-4xl"
          />

          <button onClick={addComment} className=" py-2 px-4 flex items-center gap-2 rounded-2xl bg-red-500 text-white">
            <span className=" hidden md:flex">Comment</span>
            <IoIosSend className="text-xl"/>
          </button>
        </div>

        {/* COMMENTS */}
        <div className="">

          <h2 className=" mb-2 text-lg font-bold border-b-2 border-red-600">Comments</h2>

          {comments.length === 0 && (
            <p className=" mt-20 text-center">No comments yet. Be the first one!</p>
          )}

          {comments.map((item) => (
            <div key={item._id} className=" p-2 flex flex-col gap-2 border-b border-slate-300">
              
              <div className=" flex items-center gap-2">
                <h2 className=' h-6 w-6 bg-slate-500 text-center font-semibold text-white rounded-full'>{item.user?.username?.charAt(0)?.toUpperCase()}</h2>

                <strong>
                  {item.user.username}
                </strong>
              </div>

              <p className=" pl-8">{item.text}</p>
              
            </div>
          ))}
          
        </div>
      </div>
    </Layout>
  );
}

export default VideoPlayer;
