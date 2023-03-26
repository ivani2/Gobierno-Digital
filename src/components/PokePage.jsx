import { useState, useEffect } from 'react';

import PokeInfo from './PokeInfo'

import { useFetch } from '../useFetch'

const PokePage = ( {pokemon} ) => {

    let desc = "";

    function getPokemonData(url){
        console.log( url );
        const { data } = useFetch( url );
        console.log( data?.species.url );
        desc = data?.species.url;
        // desc = descripcionPokemon( data?.species.url );
        // const desc = descripcionPokemon( data?.species.url );
        // console.log( "URL PARA OBTENER DESCRIPCION: ", desc );
        return data;
    }

    function descripcionPokemon( url ){
        // console.log( url );
        // let { data } = useFetch( url );
        // console.log( data?.species.url );
        // //  data = useFetch( data?.species.url );
        //  console.log( "descripcion url", data );
        //  return data.flavor_text_entries[26] ? data?.flavor_text_entries[26]?.flavor_text : undefined
    }
    // console.log( pokemon.results )
    return (
        <>

            {
                (!pokemon) && <img src="../assets/poke.gif" height="200px"width="200px"/>
            }
            {
                pokemon.results.map( ( poke ) => (
                    // console.log( getPokemonData(poke.url) )
                    <PokeInfo pokemon={ getPokemonData( poke.url ) } key={ poke.url } descripcionPokemon={ desc } />
                    // <Suspense>
                    //     <PokeInfo pokemon={  apiData.read() } key={ poke.url } />
                    // </Suspense>

                ) )
            }


        </>
    )
};

export default PokePage;
