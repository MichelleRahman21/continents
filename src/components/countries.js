import React from 'react';


import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const Countries = () => (
  <Query query={gql`
    {
      countries{
        id
        name
        native
        language
        capital
        code
        currency
      }
    }
    `}>
{({loading, error, data}) => {
  if(loading) return <p>Loading...</p>
  if(error) return <p> Error </p>
}}

    </Query>


export default Countries;
