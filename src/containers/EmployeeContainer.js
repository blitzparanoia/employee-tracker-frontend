import React from 'react'

import EmployeeForm from '../components/EmployeeForm'
import Employees from '../components/Employees'

class EmployeeContainer extends React.Component {

  state = {
    showAdd: false,
    sortCriteria: ''
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     this.setState({
  //       employees: [...this.props.company.employees]
  //     })
  //   }
  // }

  showAddEmployee = () => {
    this.setState({
      showAdd: !this.state.showAdd
    })
  }

  handleSortFeature = (e) => {
    let option = e.target.value
    this.setState({
      sortCriteria: option
    })
  }

  sortedEmployeesList = () => {
    let option = this.state.sortCriteria
    let employees = (this.props.company && this.props.company.employees) || []
    return [...employees].sort((a, b) => {
      if (a[option] > b[option]) {
        return 1;
      }
      if (a[option] < b[option]) {
        return -1;
      }
      return 0;
    })
  }



  render() {
    return(
      <div>
        <button onClick={this.showAddEmployee}>Add Employee</button>

        {this.state.showAdd && (<div><EmployeeForm company={this.props.company}/></div>)}

        <br/><br/>
      <Employees employees={this.sortedEmployeesList()} identifyOption={this.handleSortFeature} />


          </div>


    )
  }
}

export default EmployeeContainer
