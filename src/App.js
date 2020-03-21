import React from 'react';
import './App.css';
import CompaniesContainer from './containers/CompaniesContainer';
import NavBar from './components/NavBar';


class App extends React.Component {


  render() {
  return (
    <div className= "App">
      <NavBar/>
      <CompaniesContainer />
    </div>
  )
  }
}

export default App;
