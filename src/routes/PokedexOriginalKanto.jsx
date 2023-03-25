import { useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

import PokePage from '../components/PokePage';


const PokedexOriginalKanto = ( { stylesMainCardsContainer } ) => {
    const resData = useLoaderData();

    return(

        <>
        <div className="mainCardsContainer" style={ stylesMainCardsContainer }>

            <Suspense fallback={ <div>Cargando...</div> } >
                <PokePage pokemon={ resData } />
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
