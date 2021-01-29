import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import countries from './countries.json'

function App() {
  return (
    <div className="App">
      <Navbar />

      <div class="container">
        <div class="row">
          <CountriesList countries={countries} />
          <CountryDetails />
        </div>
      </div>

    </div>
  );
}

export default App;
