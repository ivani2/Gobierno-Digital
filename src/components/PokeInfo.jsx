import { useState, useEffect, Suspense } from 'react';

import { Link } from 'react-router-dom';

import { useFetch } from '../useFetch';




// const apiData =  fetchData( pokemon?.species.url );

const pokeInfo = ( {pokemon, descripcionPokemon} ) => {
    // console.log( pokemon )
    // const dataPokemonDescription = apiData.read();

    const componentStyles = {
        ".cardSeparator": {
            position: "relative",
            maxWidth: "25%",
            margin: "2%"
        },
        ".imgContainer": {
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          maxWidth: "500px"
        },
      };


    function descripcionPokemon_fetch( url ){
        console.log( "descripcionPokemon_fetch ",url )
        const { data } = useFetch( url );
        console.log( data ? data?.flavor_text_entries[2]?.flavor_text : null )
        // return data?.flavor_text_entries?.flavor_text
        return data ? data?.flavor_text_entries[2]?.flavor_text : undefined
    }

    return (

        <>
            {
                (!pokemon) && <h1> "Cargando pokemon" </h1>
            }
            {
                <div className= 'card' style={ componentStyles[".cardSeparator"] }>
                    <img className= " card-img-top" style={ componentStyles[".imgContainer"] } src={pokemon?.sprites.front_default} alt={ pokemon?.name } />
                    <div className="card-body">
                    <h5 className="card-title"> { pokemon?.name } </h5>
                    <p className="card-text">
                        Número en la Pokedex Nacional: { pokemon?.id }
                        <br></br>
                        {/* <Suspense>
                            <strong> { descripcionPokemon_fetch( pokemon?.species.url ) } </strong>
                        </Suspense> */}
                        {/* <PokemonDescription url={ descripcionPokemon(pokemon?.species.url) } /> */}
                        {/* <strong> { descripcionPokemon( pokemon?.species.url ) } </strong> */}
                        {/* <strong> { descripcionPokemon_fetch(descripcionPokemon) } </strong> */}
                        <strong> { descripcionPokemon } </strong>



                    </p>
                    <Link to={ `/${pokemon?.id}` } className="btn btn-primary">Detalles...</Link>
                    </div>
                </div>
            }
        </>


    )

};

export default pokeInfo;
