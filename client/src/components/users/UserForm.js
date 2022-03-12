import { useState, useEffect } from "react";

const UserForm = ({addUser}) => {
  const [user, setUser] = useState({ email: '', password: ''})

  useEffect( () => {
    if (id) {
      setUser({ email, password })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
      if (id) {
        updateUser(id, user)
        // setEdit(false)
      } else {
        addUser(user)
      }
        setUser({ email: '', password: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={user.email}
          onChange={ (e) => setBillboard({ ..., email: e.target.value })}
          placeholder="email"
          required
        />
        <input
          name="password"
          value={user.password}
          onChange={ (e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
          required
        />
        <button type="submit">Submit</button>

      </form>
    </>
  )
}

export default BillboardForm;