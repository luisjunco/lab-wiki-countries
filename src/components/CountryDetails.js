import React from 'react'
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {

    function getCountryData(cca3){
        return props.countries.find(country => country.cca3 === cca3)
    }

    const currentCountryCca3 = props.match.params.cca3; // we're using react-rounter-dom URL params
    const currentCountryData = getCountryData(currentCountryCca3);
    const { name: {common: countryName}, capital, area, borders } = currentCountryData;

    const bordersList = borders.map( borderCca3 => {
        const borderCountry = getCountryData(borderCca3);
        return (
            <li key={borderCountry.cca3}>
                <Link to={`/${borderCountry.cca3}`}>
                    {borderCountry.name.common}
                </Link>
            </li>)                                        
    })

    return (
        <div className="col-7">
            <h1>{countryName}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {area} km<sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            {
                                borders.length ? <ul>{bordersList}</ul> : "This country has no borders" 
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
