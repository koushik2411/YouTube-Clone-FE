import React, { useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FilterBar from '../components/FilterBar';

function Home() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Header toggleSidebar ={() => setSidebarOpen(!sidebarOpen)}/>

      <div className=''>

        {sidebarOpen && <Sidebar/>}

        <div className=''>

          <FilterBar/>

        </div>

      </div>
    </>
  )
}

export default Home