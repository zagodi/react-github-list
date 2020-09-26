import React from 'react'

import './TabItem.scss'

const TabItem = ({ text, onClick }) => {
  return (
    <div onClick={() => onClick(text)} className="tab-item-container">
      <span>{text}</span>
    </div>
  )
}

export default TabItem