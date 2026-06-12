import React from 'react'

function FilterBar({ selectedCategory, setSelectedCategory}) {

  const filters = ["All", "JavaScript", "MERN", "React", "Nodejs", "MongoDB", "Express", "Frontend"];
  
  return (
    <div className=' max-w-svw mx-2 p-1 px-1.5 flex gap-4 justify-evenly bg-gray-200 rounded-lg overflow-scroll '>

      {filters.map((filter) => (
        <button
          key={filter}
          onClick={()=> setSelectedCategory(filter)}
          className={selectedCategory === filter ? "active-filter" : ""}
        >
          {filter}
        </button>
      ))}
      
    </div>
  )
}

export default FilterBar