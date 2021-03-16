import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', email: '', phone: ''}
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.email || !user.department || !user.phone  ) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Email</label>
			<input type="text" name="email" value={user.email} onChange={handleInputChange} />
			<label>Department</label>
			<input type="text" name="department" value={user.department} onChange={handleInputChange} />
			<label>Phone</label>
			<input type="text" name="phone" value={user.phone} onChange={handleInputChange} />
			
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm
