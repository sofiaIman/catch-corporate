import React, { useState, Fragment } from 'react'
import EditBudgetForm from './EditBudgetForm'
import BudgetTable from './BudgetTable'
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

const BudgetApps = () => {
    // Data
    const usersData = [
        { id: 1, name: 'Company Budget',  budget: '$10000', paymentmethod: 'visa card'},
        { id: 2, name: 'Department Budget',  budget: '$8000', paymentmethod: 'Mpesa'},
        { id: 3, name: 'Employee Budget',  budget: '$100', paymentmethod: 'Master card' },
    ]


    const initialFormState = { id: null, name: ''}

    // Setting state
    const [ users, setUsers ] = useState(usersData)
    const [ currentUser, setCurrentUser ] = useState(initialFormState)
    const [ editing, setEditing ] = useState(false)

    // CRUD operations
    const addUser = user => {
        user.id = users.length + 1
        setUsers([ ...users, user ])
    }

    

    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = user => {
        setEditing(true)

        setCurrentUser({ id: user.id, name: user.name})
    }

    return (
        <div className="container">
        
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <h2>Edit Budget</h2>
                            <EditBudgetForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            
                            
                        </Fragment>
                    )}
                </div>
                <div class="flex-large">
                    
                    <BudgetTable users={users} editRow={editRow} />
                </div>
                
            </div>
        </div>
    )
}

export default BudgetApps