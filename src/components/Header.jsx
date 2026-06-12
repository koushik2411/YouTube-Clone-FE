import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaUser } from "react-icons/fa";
import { AuthContext } from '../context/AuthContext';

function Header({ search, setSearch, toggleSidebar }) {

    const { user } = useContext(AuthContext);

  return (
    <header className=' p-3 flex items-center justify-between'>

        <div className='left flex items-center gap-5'>
            <FaBars/>

            <div className=' flex items-center gap-1.5'>
                <img
                  src='../public/Youtube_logo.png'
                  alt='logo'
                  className=' h-5'
                />

                <h1 className=' font-bold hidden md:flex text-lg'>YouTube</h1>
            </div>

        </div>

        {/* Search Bar */}
        <div className='middle'>

            <input 
                type='text'
                placeholder='🔎 Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className=' w-[40vw] py-0.5 px-2 rounded-2xl border-2 border-slate-400 outline-0'
            />

        </div>

        <div className='right'>

            {user ? (
                <h2>{user.username}</h2>
            ) : (
                <Link to="/login">
                    <button className=' border-2 border-blue-400 text-blue-500 p-1 rounded-[50%] md:rounded-2xl flex items-center gap-1 cursor-pointer'>
                        <FaUser/>
                        <span className=' hidden md:flex'>Sign In</span>
                    </button>
                </Link>
            )}
        </div>

    </header>
  )
}

export default Header