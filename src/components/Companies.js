import React from 'react'

//functional component responsible for rendering companies, via props from Companies container
const Companies = (props) => {

    console.log(props)
    return(
        <div>
            Companies List
            {props.companies.map(company => 
                <li key={company.id}>
                    {company.name}
                    </li>)}
        </div>
    )

}

export default Companies