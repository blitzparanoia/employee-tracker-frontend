import React from 'react'
import {connect} from 'react-redux'
import {deleteEmployee} from '../actions/deleteEmployee'


const Employees = (props) => {

  const handleDelete = (employee) => {
    props.deleteEmployee(employee.id, employee.company_id)
  }

  return(
    <div>
      {props.employees && props.employees.map(employee =>
        <div key={employee.id}>
          {employee.last_name}, {employee.first_name}|{employee.department}|{employee.position}|{employee.active}
          <button onClick={() => handleDelete(employee)}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default connect(null, {deleteEmployee})(Employees)
