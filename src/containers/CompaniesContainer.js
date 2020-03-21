import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import { fetchCompanies } from '../actions/fetchCompanies'

import Companies from '../components/Companies'
import CompanyForm from '../components/CompanyForm'
import Company from '../components/Company'
import MainPage from '../components/MainPage'


class CompaniesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCompanies()
    }

    render() {
        return(
            <div>
              <Switch>
                <Route exact path="/" component={MainPage} />

                <Route path='/companies/new' component={CompanyForm} />

                <Route path='/companies/:id' render={(routerProps) => <Company {...routerProps} companies={this.props.companies} />} />

                <Route path='/companies' render={(routerProps) => <Companies {...routerProps} companies={this.props.companies}/>}/>


                </Switch>
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
