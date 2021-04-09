import React, { useState, Fragment } from 'react'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'
import UserTable from './UserTable'
import {
	Badge,
	Button,
	Card,
	Navbar,
	Nav,
	Table,
	Container,
	Row,
	Col,
	Dropdown,Link
  } from "react-bootstrap";
  import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";

const UserApps = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Tania', email: 'tan@gmail.com', department: 'IT', phone: '0712345678'  },
		{ id: 2, name: 'Carol', email: 'caroline@gmail.com', department: 'CC', phone: '0712345678'},
		{ id: 3, name: 'Ben', email: 'beny@gmail.com', department: 'Finance', phone: '0712345678' },
	]

	const initialFormState = { id: null, name: '', email: '', department: '', phone:''}

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, email: user.email, department: user.department, phone: user.phone })
	}

	return (
		<div className="container">

			<h6>Employees</h6>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h8>Add Employee</h8>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h6>View users</h6>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default UserApps