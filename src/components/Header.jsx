import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

function Header({ search, setSearch, toggleSidebar }) {

  return (
    <header className=' p-3 flex items-center justify-between'>

        <div className='left flex items-center gap-3'>
            <FaBars/>

            <h1>
                YouTube
            </h1>
        </div>

        {/* Search Bar */}
        <div className='middle'>

            <input 
                type='text'
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className=''
            />

        </div>

        <div className='right'>

            <Link to="/login">
                <button>
                    Sign In
                </button>
            </Link>
        </div>

    </header>
  )
}

export default Header