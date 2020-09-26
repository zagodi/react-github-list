/* eslint-disable no-undef */
import React from 'react'

// import './Pagination.scss'

const Pagination = ({ total, perpage, onClick }) => {
  const pagesNum = Math.ceil(total / perpage)

  
  const renderButtons = () => {
    const buttons = []
    for (let i = 0; i < pagesNum; i++) {
      const num = i +1
      buttons.push(<button onClick={() => onClick(i)}>{num}</button>)
    }

    return buttons
  }

  return (
    <div className="tab-item-container">
      {renderButtons()}
    </div>
  )
}

export default Pagination