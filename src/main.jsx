import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from "./routes/RootLayout"
import PokedexPagination from "./routes/PokedexPagination"
import PokemonDetails, { loader as pokemonDetailsLoader } from "./routes/PokemonDetails"
import PokemonRouteModal, { loader as pokemonRouteModalLoader } from './routes/PokemonRouteModal'
import PokedexOriginalKanto, { loader as pokedexOriginalKantoLoader } from './routes/PokedexOriginalKanto'

import './index.css'

const stylesMainCardsContainer = {
  paddingTop: "10%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#D9AFD9",
  backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <PokedexPagination stylesMainCardsContainer = { stylesMainCardsContainer } pokedex={ "" } />,
        children: [
          // {
          //   path: '/:pokemonNumber',
          //   element: <PokemonDetails />,
          //   loader: pokemonDetailsLoader,
          // }
          {
            path: '/:pokemonNumber',
            element: <PokemonRouteModal />,
            loader: pokemonRouteModalLoader,
          }
        ]
      },
      {
        path: '/kanto',
        element: <PokedexOriginalKanto stylesMainCardsContainer = { stylesMainCardsContainer } pokedex= { "kanto" } />,
        loader: pokedexOriginalKantoLoader,
        children: [
          // {
          //   path: '/kanto/:pokemonNumber',
          //   element: <PokemonDetails />,
          //   loader: pokemonDetailsLoader,
          // }
          {
            path: '/kanto/:pokemonNumber',
            element: <PokemonRouteModal />,
            loader: pokemonRouteModalLoader,
          }
        ]
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
