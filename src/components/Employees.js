import React from 'react'

const Employees = (props) => {
  return(
    <div>
      {props.employees && props.employees.map(employee =>
        <div key={employee.id}>
          {employee.last_name},{employee.first_name}|{employee.department}|{employee.position}|{employee.active}
        </div>
      )}
    </div>
  )
}

export default Employees
