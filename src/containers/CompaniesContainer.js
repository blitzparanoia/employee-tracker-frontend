import React from 'react'
import {connect} from 'react-redux'
import { fetchCompanies } from '../actions/fetchCompanies'

import Companies from '../components/Companies'
import CompanyForm from '../components/CompanyForm'


class CompaniesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCompanies()
    }

    render() {
        return(
            <div>
                CompanyContainer
                < CompanyForm />
                < Companies companies={this.props.companies} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        companies: state.companies
    }
}



export default connect(mapStateToProps, { fetchCompanies }) (CompaniesContainer)