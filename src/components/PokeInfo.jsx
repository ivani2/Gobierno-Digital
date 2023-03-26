import { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useFetch } from '../useFetch';
import { fetchData } from '../fetchData';

import './PokeInfo.css';
import { PokemonDescriptionContext } from './PokePage';

// const PokemonDescriptionContext = useContext( PokemonDescriptionContext );
// const apiData =  fetchData( PokemonDescriptionContext );

const pokeInfo = ( {pokemon, descripcionPokemon, pokedex} ) => {
     const descripcion = useContext( PokemonDescriptionContext );

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
      };

    const restEndpoint = descripcion;

    const callRestApi = async () => {
        console.log( "Esto debe decir especies; ", restEndpoint );
        const response = await fetch(restEndpoint);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return (jsonResponse.flavor_text_entries[26]?.flavor_text);
    };

    function RenderResult() {
      const [apiResponse, setApiResponse] = useState("Cargando descripcion");

      useEffect(() => {
          callRestApi().then(
              result => setApiResponse(result));
      },[]);

      return(
          <strong>
              {/* { apiResponse } */}
              { JSON.stringify(apiResponse) }
          </strong>
      );
    };
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
                        <RenderResult></RenderResult>
                    </p>
                    <Link to={ `/${pokemon?.id}` } className="btn btn-primary buttonSize"  style={ componentStyles['.buttonSize'] }>Detalles...</Link>
                    </div>
                </div>
            }
        </>


    )

};

export default pokeInfo;
