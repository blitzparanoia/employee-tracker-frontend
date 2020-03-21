import React from 'react'
import {connect} from 'react-redux'

class EmployeeForm extends React.Component {

  state = {
    first_name: '',
    last_name: '',
    department: '',
    position: '',
    active: true
  }
  render() {
    return(
      <div>
      EmployeeForm
      <form>
        <label>First Name:</label>
        <input type='text' name='first_name' placeholder='First Name' value={this.state.first_name}/>

        <label>Last Name:</label>
        <input type='text' name='last_name' placeholder='Last Name' value={this.state.last_name}/>

        <label>Department:</label>
        <input type='text' name='department' placeholder='Department' value={this.state.value} />

        <label>Position:</label>
        <input type='text' name='position' placeholder='Position' value={this.state.position}/>






      </form>
      </div>
    )
  }
}

export default EmployeeForm
