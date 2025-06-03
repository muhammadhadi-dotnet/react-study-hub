import { useState, useEffect } from 'react';
import React from 'react';
import { ERROR_MESSAGES } from './Constants';

const useFetch = (url)=>{

    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);  


   useEffect(() => {
          fetch(url)
          .then(
            response =>{
                if (!response.ok) {
                    throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
                }
                return response.json();
            })
            .then(data => {
                setData(data.result);
                setLoading(false);
                setError(null);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });    
     },[url]);
     
  return { data, loading, error };
}
export default useFetch;
