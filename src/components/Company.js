import React from 'react'

import EmployeeContainer from '../containers/EmployeeContainer'

const Company = (props) => {

let company = props.companies.filter(company => company.id == props.match.params.id)[0]

  return(
    <li>
      Company: {company ? company.name : null}

      <EmployeeContainer/>
    </li>
  )

}

export default Company
