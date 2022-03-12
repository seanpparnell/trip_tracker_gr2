import { useState, useEffect } from 'react'
import axios from "axios";
import UserForm from './components/users/UserForm';
import UserList from './components/users/UserList';

const App = () => {
  const [users, setUsers] = useState([])

  useEffect( () => {
    axios.get('api/users')
      .then( res => {
        setUsers(res.data)
      })
      .catch( err => console.log(err) )
    }, [])

    const addUser = (user) => {
      axios.post('/api/users', { user })
      .then( res => {
        setUsers([...users, res.data ])
      })
      .catch( err => console.log(err) )
    }
    const updateUser = (id, user) => {
      axios.put(`/api/users/${id}`, { user })
      .then( res => {
        const newUpdatedUsers = users.map( u => {
          if (u.id === id) {
            return res.data
          }
          return u
        })
        setUsers(newUpdatedUsers)
      })
      .catch( err => console.log(err) )
    }

    const deleteUser = (id) => {
      axios.delete(`/api/users/${id}`)
      .then( res => {
        setUsers(users.filter( u => u.id !== id ))
        alert(res.data.message)
      })
      .catch( err =>console.log(err) )
    }

  return(
    <>
      <h1>Users</h1>
        <UserForm addUser={addUser} />
        <UserList
          users={users}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
    </>
  )
}
export default App;
