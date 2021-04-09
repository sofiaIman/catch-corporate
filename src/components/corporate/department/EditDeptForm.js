import React, { useState, useEffect } from 'react'

const EditDeptForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>No Employees</label>
      <input type="number" name="nodepart" value={user.nodepart} onChange={handleInputChange} />
      <label>Department Admin</label>
      <input type="text" name="departAdmin" value={user.departAdmin} onChange={handleInputChange} />
      <label>
          Vehicle Type
          <select type="text" name="vehicleType" value={user.vehicleType} onChange={handleInputChange} >            
            <option value="easy">Easy</option>
            <option value="xl">XL</option>
          </select>
        </label>
      <button>Update Department</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditDeptForm