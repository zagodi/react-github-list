import React from 'react'

import './TabItem.scss'

const TabItem = ({ text, onClick, selected }) => {
  return (
    <div 
      onClick={() => onClick(text)} 
      className={`tab-item-container ${selected && 'selected'}`}
    >
      <span>{text}</span>
    </div>
  )
}

export default TabItem