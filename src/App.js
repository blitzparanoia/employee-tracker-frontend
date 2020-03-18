import React from 'react';
import CompaniesContainer from './containers/CompaniesContainer'
class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/companies')
    .then(res => res.json())
    .then(data => console.log(data))
  }
  
  render() {
  return (
    <div className= "App">
      <CompaniesContainer />
    </div>
  )
  }
}

export default App;
