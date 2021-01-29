import React from 'react'
import './CountriesList.css'
import { Link } from "react-router-dom";

export default function CountriesList(props) {
    return (
        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div className="list-group">
                {
                    props.countries.map(country => {
                        return (
                            <Link 
                                to={`/${country.cca3}`}
                                key={country.cca3}
                                className="list-group-item list-group-item-action" 
                            >
                                <img 
                                    className="flag" 
                                    src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`} 
                                    alt={country.cca2} 
                                />
                                {country.name.common}
                            </Link>);   
                    })
                }
            </div>
        </div>
    )
}
