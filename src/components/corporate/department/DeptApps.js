import React, { useState, Fragment } from 'react'
import AddDeptForm from './AddDeptForm'
import EditDeptForm from './EditDeptForm'
import DeptTable from './DeptTable'
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

const DeptApps = () => {
    // Data
    const usersData = [
        { id: 1, name: 'Finance', nodepart: 56 ,departAdmin:'Joseph Maina',vehicleType:"Easy"},
        { id: 2, name: 'IT', nodepart: 78 , departAdmin:'Joseph Maina',vehicleType:"Easy"},
        { id: 3, name: 'Customer Care', nodepart: 56,departAdmin:'Joseph Maina',vehicleType:"XL" },
    ]

    const initialFormState = { id: null, name: '', nodepart: '' , departAdmin:'',vehicleType:''}

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

        setCurrentUser({ id: user.id, name: user.name, nodepart: user.nodepart ,departAdmin:user.departAdmin,vehicleType:user.vehicleType})
    }

    return (
        <div className="container">
        
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <h2>Edit Department</h2>
                            <EditDeptForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <h5>Add Department</h5>
                            <AddDeptForm addUser={addUser} />
                        </Fragment>
                    )}
                </div>
                <div className="flex-large">
                    <h5>View Department</h5>
                    <DeptTable users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
    )
}

export default DeptApps