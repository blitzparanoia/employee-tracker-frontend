import React from 'react'
import Company from './Company'

//functional component responsible for rendering companies, via props from Companies container
const Companies = (props) => {

    console.log(props)
    return(
        <div>
            Companies List
            {props.companies.map(company =>
                <div key={company.id}>
                  <Company company={company}/>
                  </div>)}
        </div>
    )

}

export default Companies
