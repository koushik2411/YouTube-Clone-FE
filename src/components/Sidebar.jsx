import React from 'react'
import { FaHeadset, FaHistory, FaHome, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GrChannel } from "react-icons/gr";
import { IoIosLock, IoMdAddCircle } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoLanguage, IoLibrary, IoSettings } from "react-icons/io5";

function Sidebar({ sidebarOpen }) {
  return (
    <aside
      className={` min-h-screen p-3 flex flex-col gap-3 fixed md:static top-14 left-0 z-20 bg-slate-50 transition-all duration-300 ease-in-out ${sidebarOpen ? "w-60 translate-x-0" : "w-15 -translate-x-full md:translate-x-0"}`}
    >

      {/* Useful menu */}
      <div className=' pb-3 flex flex-col gap-1 border-b border-slate-400'>

        <Link to="/" className=' p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-200'>
          <FaHome/>
          {sidebarOpen && <span>Home</span>}
        </Link>

        <Link to="/channel" className=' p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-200'>
          <GrChannel />
          {sidebarOpen && <span>My Channel</span>}
        </Link>

        <Link to="create-channel" className=' p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-200'>
          <IoMdAddCircle />
          {sidebarOpen && <span>Create Channel</span>}
        </Link>

        <Link to="/profile" className=' p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-200'>
          <FaUserCircle />
          {sidebarOpen && <span>Profile</span>}
        </Link>

      </div>

      {/* Dummy menu options 1 */}
      <ul className=' pb-3 flex flex-col gap-1 border-b border-slate-400'>

        <li className=' p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-200'> <SiYoutubeshorts /> {sidebarOpen && <span>Shorts</span>}</li>

        <li className=' p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-200'> <MdSubscriptions/> {sidebarOpen && <span>Subscriptions</span>}</li>

        <li className=' p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-200'> <FaHistory/> {sidebarOpen && <span>History</span>}</li>

        <li className=' p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-200'> <IoLibrary/> {sidebarOpen && <span>Library</span>}</li>

      </ul>

      {/* Dummy menu options 1 */}
      <ul className=' pb-3 flex flex-col gap-1 border-b border-slate-400'>

        <li className=' p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-200'> <IoSettings/> {sidebarOpen && <span>Settings</span>}</li>

        <li className=' p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-200'> <FaHeadset/> {sidebarOpen && <span>Help & Support</span>}</li>

        <li className=' p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-200'> <IoIosLock/> {sidebarOpen && <span>Privacy</span>}</li>

        <li className=' p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-200'> <IoLanguage/> {sidebarOpen && <span>Languages</span>}</li>

      </ul>

    </aside>
  )
}

export default Sidebar