import React from 'react'
import {Link} from 'react-router-dom'

const Companies = (props) => {

    return(
        <div>
          <h3>Companies</h3>
            {props.companies.map(company =>
                <div key={company.id}>
                  <Link to={`/companies/${company.id}`}>{company.name}</Link>
                  </div>)}
        </div>
    )

}

export default Companies
