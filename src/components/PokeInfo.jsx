import { useContext, useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './PokeInfo.css';
import { PokemonDescriptionContext } from './PokePage';
import LoadingComponent from './LoadingComponent';

// const PokemonDescriptionContext = useContext( PokemonDescriptionContext );
// const apiData =  fetchData( PokemonDescriptionContext );

const pokeInfo = ( {pokemon, pokedex} ) => {
     const descripcion = useContext( PokemonDescriptionContext );

     const restEndpoint = descripcion;

    const callRestApi = async () => {
        console.log( "Esto debe decir especies; ", restEndpoint );
        const response = await fetch(restEndpoint);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return (jsonResponse.flavor_text_entries[26]?.flavor_text);
    };

    function RenderPokemonDescription() {
    const [apiResponse, setApiResponse] = useState("Cargando...");

      useEffect(() => {
          callRestApi().then(
              result => setApiResponse(result));
      },[]);
      return(
        <>
        { ( apiResponse =="Cargando..." ) && ( <LoadingComponent /> ) }
          <strong>
              {/* { apiResponse } <= this is an object*/}
              {/* { (JSON.stringify(apiResponse)).replace( /\r?\n|\r/, "" ) } */}
              { JSON.stringify(apiResponse, function (key, value) {
                                                return value = value.replace(/(?:\r\n|\r|\n)/g, ' ');
                                            }
                                )
              }
          </strong>
        </>
      );
    };

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

    return (
        <>
            {
                (!pokemon) && <h1> "Cargando pokemon" </h1>
            }
            {
                <div className= 'card' style={ componentStyles[".cardSeparator"] }>
                    <img className= " card-img-top" style={ componentStyles[".imgContainer"] } src={pokemon?.sprites.front_default} alt={ pokemon?.name } />
                    <div className="card-body">
                        {
                        //.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {return index === 0 ? word.toLowerCase() : word.toUpperCase();}).replace(/\s+/g, '')
                        }
                    <h5 className="card-title"> { pokemon?.name.toUpperCase() } </h5>
                    <p className="card-text" style={ componentStyles['.textInside'] } >
                        Número en la Pokedex Nacional: { pokemon?.id }
                        <br></br>
                        <RenderPokemonDescription></RenderPokemonDescription>
                    </p>
                    <Link to={ `/${pokedex}/${pokemon?.id}` } className="btn btn-primary buttonSize"  style={ componentStyles['.buttonSize'] }>Detalles...</Link>
                    </div>
                </div>
            }
        </>


    )

};

export default pokeInfo;
