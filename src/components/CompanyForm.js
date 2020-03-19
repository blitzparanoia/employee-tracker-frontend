import React from 'react'
import {connect} from 'react-redux'
import {addCompany} from '../actions/addCompany'


//form is controlled, use class component to control the values using local state or store

class CompanyForm extends React.Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <br/>
                Company Form
                <form onSubmit={this.handleSubmit}>
                    Add Company 
                    <br/>
                    <br/>

                    <label>Name:</label>
                    <input type='text' placeholder='Company Name' value={this.state.name} onChange={this.handleChange} />

                    <br/>

                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addCompany }) (CompanyForm)