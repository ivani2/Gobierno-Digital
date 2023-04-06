import { useLoaderData, useNavigate } from 'react-router-dom';

import ModalPokemon from '../components/ModalPokemon'

import ReactModal from 'react-modal';

import classes from './PokemonDetails.module.css'

const PokemonDetails = () => {

  const resData = useLoaderData();
  const navigate = useNavigate();

  return(
    <>
    <ReactModal isOpen={true} className={ classes.modalStyles } >
      <ModalPokemon pokemon={resData} key={resData.url} descripcionPokemon={ resData.species.url } />
      <button className='btn btn-danger' onClick={ ()=> navigate('..') } >Cerrar</button>
    </ReactModal>
    </>
  );

}

export default PokemonDetails;

export async function loader( {params} ){
    console.log( "loader sabe el pokemon id: " + params.pokemonNumber );
    const response =  await fetch( 'http://pokeapi.co/api/v2/pokemon/'+ params.pokemonNumber );
    const resData = await response.json();
    console.log( resData );
    return resData;
}
