import { useEffect, useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FilterBar from '../components/FilterBar';
import VideoCard from '../components/VideoCard';

import api from '../services/api';

function Home() {

  const [videos, setVideos] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch videos
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const res = await api.get("/videos");

    setVideos(res.data);
  };

  // Filtered videos as per search and category
  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = selectedCategory === "All" ? true : video.category === selectedCategory;

    return matchesSearch && matchesCategory;
  })

  // Sidebar toggle
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className=''>
    
      <Header 
        toggleSidebar ={toggleSidebar}
        search={search}
        setSearch={setSearch}
      />

      <div className=' flex'>

        <Sidebar sidebarOpen={sidebarOpen}/>

        <div className=' mt-2 flex-1 bg-red-slate-50'>

          <FilterBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className=' p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

            {filteredVideos.map((video) => (
              <VideoCard
                key={video._id}
                video={video}
              />
            ))}

          </div>

        </div>

      </div>
    </div>
  )
}

export default Home