import { useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FilterBar from '../components/FilterBar';
import VideoCard from '../components/VideoCard';

import videos from '../data/videos';

function Home() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Header toggleSidebar ={() => setSidebarOpen(!sidebarOpen)}/>

      <div className=''>

        {sidebarOpen && <Sidebar/>}

        <div className=''>

          <FilterBar/>

          <div className=' p-3 grid grid-cols-1 md:grid-cols-3 gap-3'>

            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
              />
            ))}

          </div>

        </div>

      </div>
    </>
  )
}

export default Home