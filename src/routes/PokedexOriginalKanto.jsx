import { useLoaderData, Outlet } from 'react-router-dom';
import { Suspense, createContext } from 'react';

import PokePage from '../components/PokePage';


const PokedexOriginalKanto = ( { stylesMainCardsContainer, pokedex } ) => {
    const resData = useLoaderData();

    return(

        <>
        <Outlet />
        <div className="mainCardsContainer" style={ stylesMainCardsContainer }>
            <Suspense fallback={ <div>Cargando...</div> } >
                <PokePage pokemon={ resData } pokedex= { pokedex } />
            </Suspense>
        </div>
        </>

    )
}

export default PokedexOriginalKanto;


export async function loader( {params} ){
    const response =  await fetch( 'https://pokeapi.co/api/v2/pokemon?limit=151' );
    const resData = await response.json();
    console.log( resData );
    return resData;
}
