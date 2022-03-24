import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div className='main-div'>
            {
                countries.map(country => <Country 
                name={country.name.common} 
                capital={country.capital} 
                flags={country.flags.png} 
                population={country.population}>
                    
                </Country>)
            }
        </div>
    );
};

export default Countries;