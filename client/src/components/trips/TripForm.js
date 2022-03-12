import { useState, useEffect } from 'react';

const TripForm = ({ addTrip, id, name, duration, updateTrip, setEdit }) => {
  const [trip, setTrip] = useState({ name: '', duration: '' })

  useEffect( () => {
    if (id) {
      setTrip({ name, duration })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTrip(id, trip)
      setEdit(false)
    } else {
      addTrip(trip)
    }
    setTrip({ name: '', duration: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
  
          name="name" 
          value={trip.name}
          onChange={(e) => setTrip({ ...trip, name: e.target.value })}
          required
          placeholder='name'
        />
        <label>duration:</label>
        <textarea
          name="duration"
          value={trip.duration}
          onChange={(e) => setTrip({ ...trip, duration: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TripForm;