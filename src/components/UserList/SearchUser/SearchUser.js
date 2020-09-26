import React, { useState } from 'react'

const SearchUser = ({ onSearch }) => {
  const [value, setValue] = useState()

  const handleSubmit = () => {
    if (value) {
      onSearch(value)
    }

    return null
  }

  return (
    <div>
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