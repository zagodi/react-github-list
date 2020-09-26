/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react'
import Axios from 'axios'

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
  // const { 
  //   id,
  //   login,
  //   node_id,
  //   avatar_url,
  //   html_url,
  //   followers_url,
  //   following_url
  // } = user

  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])

  // useEffect(() => {
  //   Axios.get(`https://api.github.com/users/${login}`)
  //     .then((res) => {
  //       setFollowers(res.data)
  //     }).catch(console.log)

  // }, [followers_url, login])

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