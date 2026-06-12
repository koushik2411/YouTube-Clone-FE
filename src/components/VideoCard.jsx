import React from 'react'
import { FaCheckCircle, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function VideoCard({ video }) {
  return (
    <Link
      to={`/watch/${video.id}`}
      className=''
    >

      <div className=' border p-1 flex md:flex-col gap-5 md:gap-3 overflow-hidden hover:scale-[1.02] rounded-lg'>

        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className=' w-[40%] md:w-full rounded-lg'
        />

        <div className=' flex flex-col gap-1'>

          <h2 className=' font-semibold'>{video.title}</h2>

          <h3 className=' flex items-center gap-1.5 text-sm'>{video.channel?.classNamechannelName} <FaCheckCircle/> </h3>

          <p className=' flex items-center gap-1.5 text-sm'><FaEye/> {video.views} views</p>

        </div>
      </div>

    </Link>
  )
}

export default VideoCard