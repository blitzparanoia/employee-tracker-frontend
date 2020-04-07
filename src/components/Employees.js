import React from 'react'
import {connect} from 'react-redux'
import {deleteEmployee} from '../actions/deleteEmployee'


const Employees = (props) => {

  const handleDelete = (employee) => {
    props.deleteEmployee(employee.id, employee.company_id)
  }

  return(
    <>
    <select onChange={props.identifyOption} >
      <option value="last_name">Name</option>
      <option value="department">Department</option>
      <option value="position">Position</option>
    </select>

    <table align="center" border="5">
      <tbody align="center">
        <tr>
          <th>Name(last, first)</th>
          <th>Department</th>
          <th>Position</th>
          <th>Delete</th>
        </tr>
      {props.employees && props.employees.map(employee =>
        <tr key={employee.id}>
          <td>{employee.last_name}, {employee.first_name}</td>
          <td>{employee.department}</td>
          <td>{employee.position}</td>
          <td><button onClick={() => handleDelete(employee)}>Delete</button></td>

        </tr>
      )}
    </tbody>
  </table>

  </>
  )
}

export default connect(null, {deleteEmployee})(Employees)
