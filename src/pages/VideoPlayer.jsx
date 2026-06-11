import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

function VideoPlayer() {

  const {id} = useParams();

  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const res = await api.get(`/videos/${id}`);

    setVideo(res.data);
  };

  if (!video) return <h2>Loading Video...</h2>;

  return (
    <div>

      <iframe
        src={video.videoUrl}
        title={video.title}
      />

      <h2>{video.title}</h2>

      <p>{video.description}</p>

      <h4>{video.channel?.channelName}</h4>

      <CommentForm/>

      <CommentList/>

    </div>
  )
}

export default VideoPlayer