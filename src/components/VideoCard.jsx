import React from 'react'
import { FaCheckCircle, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function VideoCard({ video }) {
  return (
    <Link
      to={`/watch/${video._id}`}
      className=''
    >

      <div className=' border h-full p-1 flex md:flex-col gap-5 md:gap-3 overflow-hidden hover:scale-[1.02] rounded-lg border-slate-300'>

        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className=' w-[40%] md:w-full rounded-lg'
        />

        <div className=' p-3 flex flex-col gap-1'>

          <h2 className=' font-semibold'>{video.title}</h2>

          <h3 className=' flex items-center gap-1.5 text-sm'>{video.channel?.channelName} <FaCheckCircle/> </h3>

          <p className=' flex items-center gap-1.5 text-sm'><FaEye/> {video.views} views</p>

        </div>
      </div>

    </Link>
  )
}

export default VideoCard