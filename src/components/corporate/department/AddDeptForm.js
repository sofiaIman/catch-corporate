import React, { useState } from 'react'

const AddDeptForm = props => {
    const initialFormState = { id: null, name: '', nodepart: '' ,departAdmin:'',vehicleType:''}
    const [ user, setUser ] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target

        
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user.name || !user.nodepart ) return

                props.addUser(user)
                setUser(initialFormState)
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>No Employees</label>
            <input type="Number" name="nodepart" value={user.nodepart} onChange={handleInputChange} />
            <label>Department Admin</label>
            <input type="text" name="departAdmin" value={user.departAdmin} onChange={handleInputChange} />
            <label>
          Vehicle Type
          <select type="text" name="vehicleType" value={user.vehicleType} onChange={handleInputChange} >            
            <option value="easy">Easy</option>
            <option value="xl">XL</option>
          </select>
        </label>
            <button>Add new Department</button>
        </form>
    )
}

export default AddDeptForm