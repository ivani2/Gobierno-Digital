import { useState, useEffect } from 'react';

export function useFetch ( url ){

    const [ data, setData ] = useState( null );

    const [ loading, setLoading ] =  useState( true );

    const [ error, setError ] = useState( null );

    const [ controller, setController ] =  useState( null );

    useEffect( () => {
        //https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0
        //https://pokeapi.co/api/v2/pokemon/
        //https://pokeapi.co/api/v2/pokemon?limit=151
        // https://pokeapi.co/api/v2/pokemon/6/
        // console.log("solicitando");

        const abortController =  new AbortController();
        setController( abortController );
        setLoading(true);

        fetch(url, { signal: abortController.signal })
        .then( (response) => response.json() )
        .then( (data) => setData(data) )
        .catch( (error) => {
            if ( error.name === "AbortError" ){
                console.log( "Request canceled" );
            }
            else{
                setError(error);
            }
        } )
        .finally( () => setLoading(false) );

        return ( ) => abortController.abort;
    }, [] );


    const handleCancelRequest = () => {
        if ( controller ){
            controller.abort();
            setError( "Request cancelled" );
        }
    }

    return { data, loading, error, handleCancelRequest };
}