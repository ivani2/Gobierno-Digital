import { Suspense } from 'react';

import ImagesCarousel from './ImagesCarousel';

import { useFetch } from '../useFetch';


const ModalPokemon = ( {pokemon, descripcionPokemon} ) => {


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


    function descripcionPokemon_fetch( url ){
        console.log( "descripcionPokemon_fetch ",url )
        const { data } = useFetch( url );
        console.log(" esto deberia ser la descripcion: ", data ? data?.flavor_text_entries[26]?.flavor_text : null )
        return data ? data?.flavor_text_entries[26]?.flavor_text : null
    }


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
                    <strong> { descripcionPokemon_fetch(descripcionPokemon) } </strong>
                </Suspense>
                </p>
                {/* <button className='btn btn-danger' onClick={ ()=> navigate(-1) } >Cerrar</button> */}
                {/* <button className='btn btn-danger' onClick={ ()=> isModalOpen = false } >Cerrar</button> */}
                </div>
            </div>
        }
        </>

     )
};

export default ModalPokemon;