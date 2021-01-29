import React from 'react'
import './CountriesList.css'

export default function CountriesList(props) {
    return (
        <div class="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div class="list-group">
                {
                    props.countries.map(country => {
                        return <a class="list-group-item list-group-item-action" href={`/${country.cca3}`}>
                            <img class="flag" src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`} alt={country.cca2} />
                            {country.name.common}
                            </a>
                    })
                }
            </div>
        </div>
    )
}
