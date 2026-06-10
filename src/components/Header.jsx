import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <header className=' p-3 flex items-center justify-between'>

        <div className='left flex items-center gap-3'>
            <FaBars/>

            <h1>
                YouTube
            </h1>
        </div>

        <div className='middle'>

            <input 
                type='text'
                placeholder='Search'
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