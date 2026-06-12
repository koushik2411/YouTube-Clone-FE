import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'

function VideoPlayer() {

  const {id} = useParams();

  // Video
  const [video, setVideo] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = ([]);

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
        `/videos/like/$id`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
        }
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
        }
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
    <div>

      <iframe
        src={video.videoUrl}
        title={video.title}
        className=' w-full'
      />

      <h2>{video.title}</h2>

      <p>{video.description}</p>

      <h4>{video.channel?.channelName}</h4>

      {/* REACTION BUTTONS */}
      <div>

        <button onClick={likeVideo}>
          Like {video.likes.length}
        </button>

        <button onClick={dislikeVideo}>
          Dislike {video.dislikes.length}
        </button>

        <button>
          Share
        </button>

        <button>
          Download
        </button>

        <button>
          Save
        </button>

      </div>

      {/* COMMENT FORM */}
      <div>

        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Write comment'
        />

        <button onClick={addComment}>Comment</button>

      </div>

      {/* COMMENTS */}
      <div>

        {comments.map((item) => (
          <div>
            <strong>{item.user.username}</strong>

            <p>{item.text}</p>
          </div>
        ))};
      </div>

    </div>
  )
}

export default VideoPlayer