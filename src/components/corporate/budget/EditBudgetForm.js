import React, { useState, useEffect } from 'react'


const EditBudgetForm = props => {
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
      <label>Budget</label>
      <input type="text" name="budget" value={user.budget} onChange={handleInputChange} />
      <label>Payment Method</label>
      <input type="text" name="paymentmethod" value={user.paymentmethod} onChange={handleInputChange} />
      
      <button>Update Budget</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  
  )
}

export default EditBudgetForm