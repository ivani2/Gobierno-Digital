import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { useFetch } from '../useFetch'

import { Suspense } from 'react';

const PokemonDescription = ( id ) => {

    const resData = useLoaderData();
    // https://pokeapi.co/api/v2/pokemon/6/

    return (
        <>
            <strong> { id } </strong>
        </>
     );
}

export default PokemonDescription;


export async function loader( {params} ){
    console.log( params );
    //https://pokeapi.co/api/v2/pokemon-species/20/
    const response =  await fetch( 'http://pokeapi.co/api/v2/pokemon/'+ params.pokemonNumber );
    const resData = await response.json();
    console.log( resData );
    return resData;
}
