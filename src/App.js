import React from 'react';
import { Switch, Route } from "react-router-dom";
import countries from './countries.json'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Switch>
            <Route
              path="/:cca3"
              render={(props) => <CountryDetails {...props} countries={countries} />}
            />
          </Switch>
        </div>
      </div>

    </div>
  );
}

export default App;
