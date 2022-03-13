import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';
import Trips from '../trips/Trips';

const User = ({ id, email, password, updateUser, deleteUser }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h1>{email}</h1>
      {
        editing ?
        <>
          <UserForm 
            id={id}
            email={email}
            password={password}
            updateUser={updateUser}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button 
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button 
            onClick={() => deleteUser(id)}
          >
            Delete
          </button>
          <Link 
            to={`/users/${id}/trips`}
              state={{ userId: id, userEmail: email, userPassword: password}}
            >
            Trips
          </Link>
        </>
      }
    </>
  )
}
export default User;