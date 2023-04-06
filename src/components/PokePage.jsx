import { createContext } from 'react';

import LoadingComponent from './LoadingComponent';

import { useFetch } from '../useFetch'

import PokeInfo from './PokeInfo'

export const PokemonDescriptionContext = createContext();

const PokePage = ( {pokemon, pokedex} ) => {

    let desc = "";

    function getPokemonData(url){
        console.log( url );
        const { data } = useFetch( url );
        console.log( data?.species.url );
        desc = data?.species.url;
        return data;
    }

    function pokemonDescriptionUrl( pokemonUrlData ){
        console.log( pokemonUrlData );
        const { data } = useFetch( pokemonUrlData );
        return data?.species.url;
    }
    return (
        <>

            {
                (!pokemon) && <LoadingComponent />
            }
            {
                pokemon.results.map( ( poke ) => (
                    <PokemonDescriptionContext.Provider value= { pokemonDescriptionUrl( poke.url ) } >
                        <PokeInfo pokemon={ getPokemonData( poke.url ) } key={ poke.url } descripcionPokemon={ desc } pokedex={ pokedex } />
                    </PokemonDescriptionContext.Provider>
                ) )
            }


        </>
    )
};

export default PokePage;
