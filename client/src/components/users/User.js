import { useState } from 'react';
import UserForm from './UserForm';

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
        </>
      }
    </>
  )
}
export default User;