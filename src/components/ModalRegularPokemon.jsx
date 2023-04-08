import { Suspense, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import ImagesCarousel from './ImagesCarousel';


const ModalRegularPokemon = ( { pokemon, descripcionPokemon } ) => {

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
                <strong> { descripcionPokemon } </strong>
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
    );
}

export default ModalRegularPokemon;
