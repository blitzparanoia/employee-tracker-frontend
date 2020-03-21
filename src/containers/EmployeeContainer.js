import React from 'react'
import EmployeeForm from '../components/EmployeeForm'

import Employees from '../components/Employees'

class EmployeeContainer extends React.Component {
  render() {
    return(
      <div>
      EmployeeContainer
      <EmployeeForm company={this.props.company}/>

      <Employees employees={this.props.company && this.props.company.employees}/>
      </div>
    )
  }
}

export default EmployeeContainer
