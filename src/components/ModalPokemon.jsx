import { Suspense, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import ImagesCarousel from './ImagesCarousel';
import LoadingComponent from './LoadingComponent';

import { useFetch } from '../useFetch';


const ModalPokemon = ( {pokemon, descripcionPokemon} ) => {

    console.log( " desde modal pokemon NO regular " );
    const componentStyles = {
        ".pokemonModalContainer": {
            position: "relative",
            width: "90%",
            height: "90%",
            display: "flex",
        },
        ".imgContainer": {
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            maxWidth: "500px"
        },
    };

    const navigate = useNavigate();

    const restEndpoint = descripcionPokemon;

    const callRestApi = async () => {
        /* USANDO UN LLAMADO API NORMAL  */
        console.log( "Esto debe decir especies, por parte del componente modal; ", restEndpoint );
        const response = await fetch(restEndpoint);
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        return (jsonResponse.flavor_text_entries[26]?.flavor_text);
    };

    function RenderPokemonDescriptionForModal() {
    const [apiResponse, setApiResponse] = useState("Cargando...");

    /* useEffect normalito con el API NORMAL */
      useEffect(() => {
          callRestApi().then(
              result => setApiResponse(result));
      },[]);


    /* useEffect con USE FECTH */
    // useEffect(() => {
    //     // setApiResponse(descripcionPokemon_fetch(restEndpoint));
    //     descripcionPokemon_fetch(restEndpoint)
    // },[]);

      return(
        <>
        { ( apiResponse == "Cargando..." ) && ( <LoadingComponent /> ) }
          <strong>
              {/* { apiResponse } <= this is an object*/}
              { JSON.stringify(apiResponse, function (key, value) {
                                                return value = value.replace(/(?:\r\n|\r|\n)/g, ' ');
                                            }
                                )
              }
          </strong>
        </>
      );
    };

    // const descripcionPokemon_fetch = async ( url ) => {
    //     console.log( "descripcionPokemon_fetch ",url )
    //     console.log( "Esto debe decir especies DESDE USE FETCH EN ModalPokemon, por parte del componente modal; ", url );
    //     const { data } = useFetch( url );
    //     console.log("esto deberia ser la descripcion: ",data?.flavor_text_entries[26]?.flavor_text )
    //     // return data ? data?.flavor_text_entries[26]?.flavor_text : null
    //     setApiResponse(data?.flavor_text_entries[26]?.flavor_text);

    // }




    return (
        <>
        {
            (!pokemon) && <h1> "No hay pokemon" </h1>
        }
        {
            <div className='card text-white bg-dark mb-3' style={ componentStyles[".pokemonModalContainer"] }>
                {/* <img className= "card-img-top" style={ componentStyles[".imgContainer"] } src={pokemon?.sprites.front_default} alt={ pokemon?.name } /> */}
                <div className="card-body">
                <h5 className="card-title"> { pokemon?.name } </h5>
                <br></br>
                <ImagesCarousel  images= { [ pokemon?.sprites.front_default, pokemon?.sprites.front_shiny, pokemon?.sprites.back_default ] }  style={ componentStyles[".imgContainer"] }/>
                <br></br>
                <p className="card-text">
                    Número en la Pokedex Nacional: { pokemon?.id }
                <br></br>
                <Suspense fallback={ <div>Loading...</div> } >
                    {/* <strong> { descripcionPokemon_fetch(descripcionPokemon) } </strong> */}
                    <RenderPokemonDescriptionForModal key={ pokemon?.id } ></RenderPokemonDescriptionForModal>
                </Suspense>
                <br></br>
                </p>
                <span>Tipo de Pokemon: </span>
                <ul>
                    <li><span> {pokemon?.types[0]?.type?.name } </span> : <span> {pokemon?.types[0]?.type?.url } </span></li>
                    <li><span> {pokemon?.types[1]?.type?.name } </span> : <span> {pokemon?.types[1]?.type?.url } </span></li>
                </ul>
                <button className='btn btn-danger' onClick={ ()=> navigate('..') } >Cerrar</button>
                </div>
            </div>
        }
        </>

     )
};

export default ModalPokemon;
