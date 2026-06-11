import React from 'react'

function FilterBar({ selectedCategory, setSelectedCategory}) {

  const filters = ["All","Popular", "React", "Node", "Fun", "Casual"];
  
  return (
    <div className=' mx-2 p-1 px-1.5 flex gap-4 bg-gray-200 rounded-lg overflow-auto'>

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