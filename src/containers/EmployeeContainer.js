import React from 'react'

import EmployeeForm from '../components/EmployeeForm'
import Employees from '../components/Employees'

class EmployeeContainer extends React.Component {

  state = {
    showAdd: false,
    sortedList: ''
  }


  showAddEmployee = () => {
    this.setState({
      showAdd: !this.state.showAdd
    })
  }
//parent handles sort feature and holds state
  handleSortFeature = (e) => {
    // console.log(this.props.company.employees)
    //company array of employees is showing,when state is changed
    let option = e.target.value
    let employeesSorted = [...this.props.company.employees].sort((a, b) => {
  if (a[option] > b[option]) {
    return 1;
  }
  if (a[option] < b[option]) {
    return -1;
  }
  return 0;
  })
    this.setState({
      sortedList: employeesSorted
    })
     console.log(this.props.company.employees)

  }

  render() {
    return(
      <div>
        <button onClick={this.showAddEmployee}>Add Employee</button>

        {this.state.showAdd && (<div><EmployeeForm company={this.props.company}/></div>)}

        <br/><br/>
      <Employees employees={this.props.company && this.props.company.employees} identifyOption={this.handleSortFeature} sortedList={this.state.sortedList}/>


          </div>


    )
  }
}

export default EmployeeContainer
