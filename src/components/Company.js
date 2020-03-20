import React from 'react'

const Company = (props) => {

let company = props.companies.filter(company => company.id == props.match.params.id)[0]

  return(
    <li>
      Company: {company ? company.name : null}
    </li>
  )

}

export default Company
