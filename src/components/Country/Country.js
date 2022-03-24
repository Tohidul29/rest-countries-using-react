import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country-container'>
            <div>
                <img src={props.flags} alt="" />
            </div>
            <h2>Name: {props.name}</h2>
            <h4>Capital: {props.capital}</h4>
            <p>Population: {props.population}</p>
        </div>
    );
};

export default Country;