import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import ModalRegularPokemon from "../components/ModalRegularPokemon";

import ReactModal from "react-modal";

import classes from "./PokemonDetails.module.css";

const PokemonRouteModal = () => {

    const loaderData = useLoaderData();


    const restEndpoint = 'https://pokeapi.co/api/v2/pokemon/'+ loaderData;

    const [apiResponse, setApiResponse] = useState("Cargando...");
    const [pokemonDescription, setPokemonDescription] = useState("Cargando...");



    const callRestApi = async (  ) => {
        console.log( "Esto debe decir la info del pokemon: ", restEndpoint );
        const response = await fetch(restEndpoint);
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        return jsonResponse;
    };

    const callRestApiAfter = async ( restEndpoint ) => {
        console.log( "Esto debe decir la info del pokemon: ", restEndpoint );
        const response = await fetch(restEndpoint);
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        const realDescription = jsonResponse.flavor_text_entries[26].flavor_text;

        return JSON.stringify(realDescription, function (key, value) {
            return value = value.replace(/(?:\r\n|\r|\n)/g, ' ');
        }
)
    };


    useEffect(() => {
        callRestApi( ).then(
            result => {
                setApiResponse(result)
                callRestApiAfter( result.species.url ).then(
                    pokemonDescription => setPokemonDescription( pokemonDescription )
                 )
             });
    },[]);

    return (
    <>
    {/* <h1> { ( JSON.stringify(apiResponse) ) } </h1> */}
    ( { apiResponse!="Cargando..." && pokemonDescription!="Cargando..." &&
        (<ReactModal isOpen={true} className={ classes.modalStyles } >
            <ModalRegularPokemon pokemon={apiResponse} descripcionPokemon={ pokemonDescription } />
        </ReactModal>)
    } )

    </>
    );
}

export default PokemonRouteModal;


export async function loader( {params} ){
    console.log( "loader sabe el pokemon id: " + params.pokemonNumber );
    console.log( params.pokemonNumber );
    return params.pokemonNumber;
}
