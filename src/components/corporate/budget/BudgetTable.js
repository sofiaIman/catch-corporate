import React from 'react'

const BudgetTable = props => (
    
  <table className="usertable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Budget</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.budget}</td>
            
            <td>
              <button 
                onClick={() => {
                  props.editRow(user)
                }}
                className="btn btn-success" 
              >
                Edit
              </button>
              
              
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Budget</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default BudgetTable