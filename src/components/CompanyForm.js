import React from 'react'
import {connect} from 'react-redux'
import {addCompany} from '../actions/addCompany'

class CompanyForm extends React.Component {

    state = {
        name: "",
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push(`/companies`)
        console.log('a')
        this.props.addCompany(this.state)
        for(let i = 0 ; i < 10000 ; i++) {
            console.log('f')
        }
        this.setState({
            name: "",
        })
    }


    render() {
        return (
            <div>
                <h3>Add Company</h3>
                <form onSubmit={this.handleSubmit}>

                    <label>Name:</label>
                    <input type='text' placeholder='Company Name' value={this.state.name} name="name" onChange={this.handleChange} />

                    <br/>

                    <input type="submit" />

                </form>
            </div>
        )
    }
}

export default connect(null, {addCompany})(CompanyForm)
