import React from 'react';

export const RandomCards= {country, name, continent} => (
  <div className="Card1">
    <h1>{country}</h1>

    <p>Native name:{name}</p>

    <p>Continent: {continent} </p>
  </div>
   
);
