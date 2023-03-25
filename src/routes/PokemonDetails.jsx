import { useLoaderData, Link, useNavigate } from 'react-router-dom';

import ModalPokemon from '../components/ModalPokemon'

import ReactModal from 'react-modal';

import classes from './PokemonDetails.module.css'

const PokemonDetails = () => {

  const resData = useLoaderData();
  const navigate = useNavigate();
  // const isModalOpen = useContext(isModalOpen);
  // const setIsModalOpen =  useContext({setIsModalOpen});
  // console.log("URL PARA LA DESCRIPCION ", resData.species.url );
  return(
    <>
    <ReactModal isOpen={true} shouldCloseOnOverlayClick={true} shouldCloseOnEsc={true}  className={ classes.modalStyles } >
      <ModalPokemon pokemon={resData} key={resData.url} descripcionPokemon={ resData.species.url } />
      <button className='btn btn-danger' onClick={ ()=> navigate(-1) } >Cerrar</button>
      {/* <button className='btn btn-danger' onClick={ isModalOpen } >Cerrar</button> */}
    </ReactModal>
    </>
  );

}

export default PokemonDetails;

export async function loader( {params} ){
    console.log( "loader sabe esto: " + params.pokemonNumber );
    const response =  await fetch( 'http://pokeapi.co/api/v2/pokemon/'+ params.pokemonNumber );
    const resData = await response.json();
    console.log( resData );
    return resData;
}