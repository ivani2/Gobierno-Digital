import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import ModalPokemon from "../components/ModalPokemon";

import ReactModal from "react-modal";

import classes from "./PokemonDetails.module.css";

const PokemonRouteModal = () => {

    const loaderData = useLoaderData();


    const restEndpoint = 'http://pokeapi.co/api/v2/pokemon/'+ loaderData;

    const [apiResponse, setApiResponse] = useState("Cargando...");


    const callRestApi = async () => {
        console.log( "Esto debe decir la info del pokemon: ", restEndpoint );
        const response = await fetch(restEndpoint);
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        return (jsonResponse);
    };


    useEffect(() => {
        callRestApi().then(
            result => setApiResponse(result));
    },[]);

    return (
    <>
    <h1> { JSON.stringify( apiResponse.url ) } </h1>
    {/* <ReactModal isOpen={true} className={ classes.modalStyles } >
      <ModalPokemon pokemon={apiResponse} key={apiResponse?.url} descripcionPokemon={ apiResponse?.species?.url } />
    </ReactModal> */}
    </>
    );
}

export default PokemonRouteModal;


export async function loader( {params} ){
    console.log( "loader sabe el pokemon id: " + params.pokemonNumber );
    console.log( params.pokemonNumber );
    return params.pokemonNumber;
}
