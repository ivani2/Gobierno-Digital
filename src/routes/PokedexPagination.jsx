import { Suspense, createContext } from 'react';

import { Outlet } from 'react-router-dom';

import PokePage from '../components/PokePage'

import { fetchData } from '../fetchData';

import '../index.css'

const apiData =  fetchData( "https://pokeapi.co/api/v2/pokemon/" );

function PokedexPagination( { stylesMainCardsContainer, pokedex } ) {

  const data = apiData.read();
  return (
    <>
      {/* <h1>ABORTAR UNA CARGA DE API</h1> */}
      {/* <button onClick={ handleCancelRequest } className="btn btn-danger" >Cancel Request</button> */}
      <Outlet />
      <div className="mainCardsContainer" style={ stylesMainCardsContainer }>
          <Suspense fallback={ <div>Cargando...</div> } >
            <PokePage pokemon={ data } pokedex= { pokedex } />
          </Suspense>
      </div>
    </>
  )
}

export default PokedexPagination;

