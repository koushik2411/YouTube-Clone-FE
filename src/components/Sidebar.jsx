import React from 'react'
import { FaHistory, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";

function Sidebar() {
  return (
    <aside>

      <ul>

        <li>
          <Link to="/" className=' p-2 flex items-center gap-2 cursor-pointer'>
            <FaHome/> Home
          </Link>
        </li>

        <li className=' p-2 flex items-center gap-2 cursor-pointer'> <SiYoutubeshorts /> Shorts</li>

        <li className=' p-2 flex items-center gap-2 cursor-pointer'> <MdSubscriptions/> Subscriptions</li>

        <li className=' p-2 flex items-center gap-2 cursor-pointer'> <FaHistory/> History</li>

        <li className=' p-2 flex items-center gap-2 cursor-pointer'> <IoLibrary/> Library</li>

      </ul>

    </aside>
  )
}

export default Sidebar