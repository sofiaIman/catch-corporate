import React from 'react'

const DeptTable = props => (
    
  <table className="usertable">
    <thead>
      <tr>
        <th>Name</th>
        <th>No Employees</th>
        <th>Department Admin</th>
        <th>Vehicle Type</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.nodepart}</td>
            <td>{user.departAdmin}</td>
            <td>{user.vehicleType}</td>
            
            <td>
              <button 
                onClick={() => {
                  props.editRow(user)
                }}
                className="btn btn-success" 
              >
                Edit
              </button>
              <> </>
              <button 
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger" 
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Department</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default DeptTable