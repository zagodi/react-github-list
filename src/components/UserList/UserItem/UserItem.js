import React, { useState } from 'react'

import './UserItem.scss'

const UserItem = ({ 
  userID,
  login,
  nodeID,
  avatar_url,
  html_url,
  onChangeStatus,
  deleted
}) => {
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])

  return (
    <div className="user-container">
      <div>
        <img src={avatar_url} alt="user" />
      </div>

      <div className="infos-section">
        <div>
          <span>ID: {userID}</span>
          <span>NODE ID: {nodeID}</span>
        </div>

        <div>
          <span className="title">{login}</span>
        </div>

        <div>
          <span>{following.length} Following</span>
          <span>{followers.length} Followers</span>
        </div>
      </div>

      <div>
        <button 
          onClick={() => onChangeStatus(
            userID, 
            deleted ? false : true
          )}
        >
          {deleted ? "Recuperar" : "Excluir"}
        </button>
        <a href={html_url} target="_blank">Ver Perfil</a>
      </div>
    </div>
  )
}

export default UserItem