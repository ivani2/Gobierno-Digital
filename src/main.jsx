import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from "./routes/RootLayout"
import PokedexPagination from "./routes/PokedexPagination"
import PokemonDetails, { loader as pokemonDetailsLoader } from "./routes/PokemonDetails"
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
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <PokedexPagination stylesMainCardsContainer = { stylesMainCardsContainer } />,
        children: [
          {
            path: '/:pokemonNumber',
            element: <PokemonDetails />,
            loader: pokemonDetailsLoader,
          }
        ]
      },
      {
        path: '/kanto',
        element: <PokedexOriginalKanto stylesMainCardsContainer = { stylesMainCardsContainer } />,
        loader: pokedexOriginalKantoLoader,
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
