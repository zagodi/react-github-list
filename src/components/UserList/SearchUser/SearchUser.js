import React, { useState } from 'react'

import './SearchUser.scss'

const SearchUser = ({ onSearch }) => {
  const [value, setValue] = useState()

  const handleSubmit = () => {
    if (value) {
      onSearch(value)
    }

    return null
  }

  return (
    <div className="search-container">
      <input 
        type="text" 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="ID ou LOGIN"
      />
      <button onClick={handleSubmit}>Pesquisar</button>
    </div>
  )
}

export default SearchUser