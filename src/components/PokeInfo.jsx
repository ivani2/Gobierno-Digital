import { useState, useEffect, Suspense } from 'react';

import { Link } from 'react-router-dom';

import { useFetch } from '../useFetch';

import './PokeInfo.css';



// const apiData =  fetchData( pokemon?.species.url );

const pokeInfo = ( {pokemon, descripcionPokemon} ) => {
    // console.log( pokemon )
    // const dataPokemonDescription = apiData.read();

    const componentStyles = {
        ".cardSeparator": {
            position: "relative",
            maxWidth: "25%",
            marginTop: "10%",
            marginLeft: "1%",
            marginRight: "1%",
            marginBottom: "2%",
            height: "20%"
        },
        ".imgContainer": {
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          maxWidth: "500px"
        },
        ".textInside": {
            fontSize: "1vw",
        },
        ".buttonSize":{
            width: "33%",
            fontSize: "1vw",
        },
        // "@media (max-width:961px)": { ".buttonSize": { width: "70%" } }
      };


    function descripcionPokemon_fetch( url ){
        console.log( "descripcionPokemon_fetch ",url )
        const { data } = useFetch( url );
        console.log( data ? data?.flavor_text_entries[26]?.flavor_text : null )
        // return data?.flavor_text_entries?.flavor_text
        return data ? data?.flavor_text_entries[26]?.flavor_text : null
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
                    <p className="card-text" style={ componentStyles['.textInside'] } >
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
                    <Link to={ `/${pokemon?.id}` } className="btn btn-primary buttonSize"  style={ componentStyles['.buttonSize'] }>Detalles...</Link>
                    </div>
                </div>
            }
        </>


    )

};

export default pokeInfo;
