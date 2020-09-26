import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import UserItem from './UserItem/UserItem'
import SearchUser from './SearchUser/SearchUser'
import TabItem from '../TabItem/TabItem'

import './UserList.scss'
import Pagination from '../Pagination/Pagination'

const localUsers = JSON.parse(localStorage.getItem('users'))

const UserList = () => {
  const [users, setUsers] = useState(localUsers)
  const [showDeleted, setShowDeleted] = useState(false)
  const [searchResults, setSearchResults] = useState()
  const [page, setPage] = useState(0)
  const perPage = 10

  useEffect(() => {
    // Axios.get('https://api.github.com/users/page=1&per_page=10')
    //   .then((res) => {
    //     setUsers(res.data)
    //     localStorage.setItem('users', JSON.stringify(res.data))
    //   }).catch(console.log)
  }, [])

  console.log(users)

  function toggleTab(type) {
    setSearchResults(null)
    type === 'Todos' ? setShowDeleted(false) : setShowDeleted(true)
  }

  const getDeletedUsers = () => users.filter((user) => user.deleted === true) || []
  const getActiveUsers = () => users.filter((user) => user.deleted !== true)

  const handleSearch = (value) => {
    const result = []
    const source = showDeleted ? getDeletedUsers() : getActiveUsers()
    source.forEach((user) => {
      const userID = parseFloat(user.id)
      const login = user.login.toString().toLowerCase()

      const searchedID = parseFloat(value)
      const searchedText = value.toString().toLowerCase()

      if (userID === searchedID) {
        return result.push(user)
      }

      if (login.includes(searchedText)) {
        return result.push(user)
      }
    })

    setSearchResults(result)
  }

  const handleUserStatus = (userID, isDeleting) => {
    const result = users.map((user) => {
      if (user.id === userID) {
        return ({ ...user, deleted: isDeleting })
      }
      return user
    })
    setUsers(result)
  }

  const paginate = (data) => {
    const skip = page * perPage
    const take = skip + perPage
    return data.slice(skip, take)
  }

  const getList = () => {
    let allItens = getActiveUsers()
    let paginated = paginate(allItens)
    
    if (searchResults) {
      allItens = searchResults
      paginated = paginate(searchResults)
    }

    if (showDeleted) {
      allItens = getDeletedUsers()
      paginated = paginate(allItens)
    }
    
    return ({ allItens, paginated })
  }

  return (
    <div className="user-list-container">
      <div className="list-header">
        <SearchUser onSearch={handleSearch} />
        <TabItem onClick={toggleTab} text="Todos" />
        <TabItem onClick={toggleTab} text="Excluídos" />
      </div>

      {
        getList().paginated.map((user) => (
          <UserItem 
            key={user.id} 
            userID={user.id}
            nodeID={user.node_id}
            avatar_url={user.avatar_url}
            html_url={user.html_url}
            login={user.login}
            onChangeStatus={handleUserStatus}
            deleted={user.deleted}
          />
        ))
      }

      <Pagination  
        total={getList().allItens.length}
        perpage={perPage}
        onClick={(num) => setPage(num)}
      />
    </ div>
  )
}

export default UserList