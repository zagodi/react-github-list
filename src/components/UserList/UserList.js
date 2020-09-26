import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import UserItem from './UserItem'

const UserList = ({ data }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    Axios.get('https://api.github.com/users')
      .then((res) => {
        setUsers(res.data)
      }).catch(console.log)

  }, [])
  console.log(users);

  return users.map((user) => <UserItem key={user.id} user={user} />)
}

export default UserList