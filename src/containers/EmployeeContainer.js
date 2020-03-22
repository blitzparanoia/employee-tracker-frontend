import React from 'react'

import EmployeeForm from '../components/EmployeeForm'
import Employees from '../components/Employees'

class EmployeeContainer extends React.Component {

  state = {
    showAdd: false
  }

  showAddEmployee = () => {
    this.setState({
      showAdd: !this.state.showAdd
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.showAddEmployee}>Add Employee</button>

        {this.state.showAdd && (<div><EmployeeForm company={this.props.company}/></div>)}

        <br/><br/>

      <Employees employees={this.props.company && this.props.company.employees}/>
      </div>
    )
  }
}

export default EmployeeContainer
