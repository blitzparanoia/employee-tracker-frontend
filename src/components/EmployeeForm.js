import React from 'react'
import {connect} from 'react-redux'
import {addEmployee} from '../actions/addEmployee'

class EmployeeForm extends React.Component {

  state = {
    first_name: '',
    last_name: '',
    department: '',
    position: '',
    active: true
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addEmployee(this.state, this.props.company.id)
    this.setState({
      first_name: '',
      last_name: '',
      department: '',
      position: '',
      active: true
    })
  }

  render() {
    return(
      <div>
      EmployeeForm
      <form onSubmit={this.handleSubmit}>
        <label>First Name:</label>
        <input type='text' name='first_name' placeholder='First Name' value={this.state.first_name} onChange={this.handleChange}/>

        <label>Last Name:</label>
        <input type='text' name='last_name' placeholder='Last Name' value={this.state.last_name} onChange={this.handleChange}/>

        <label>Department:</label>
        <input type='text' name='department' placeholder='Department' value={this.state.value} onChange={this.handleChange} />

        <label>Position:</label>
        <input type='text' name='position' placeholder='Position' value={this.state.position} onChange={this.handleChange}/>

        <input type='submit'/>

      </form>
      </div>
    )
  }
}

export default connect(null, {addEmployee})(EmployeeForm)
