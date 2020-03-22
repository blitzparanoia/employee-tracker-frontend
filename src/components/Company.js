import React from 'react'

import EmployeeContainer from '../containers/EmployeeContainer'

const Company = (props) => {

let company = props.companies.filter(company => company.id == props.match.params.id)[0]

  return(
      <div>
        <h3>
          Company: {company ? company.name : null}
        </h3>
        
      <EmployeeContainer company={company}/>
      </div>

  )

}

export default Company
