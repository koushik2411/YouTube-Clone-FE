import React from 'react'

function FilterBar() {

  const filters = ["Newest", "Oldest", "Popular", "Most viewed"];
  
  return (
    <div>

      {filters.map((item) => (
        <button key={item}>
          {item}
        </button>
      ))}
      
    </div>
  )
}

export default FilterBar