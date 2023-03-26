import { Link } from 'react-router-dom';

import { MdPostAdd, MdMessage } from 'react-icons/md';

function MainHeader(  ) {

  const componentStyles = {
    ".headerSpecial": {
      borderBottom: "2px solid #ece1fa",
      backgroundColor: "#8c6cf7 !important",
      color: "white",
      fontSize: "4vw",
    },
    ".pokeLogoContainer": {
      width: "40px",
      height: "40px",
      borderRadius: "5px",
      backgroundImage: 'url("https://www.kindpng.com/picc/m/166-1669691_transparent-pokeball-pixel-png-pixel-pokeball-png-png.png" )',
      backgroundSize: "100% 100%"
    }
  };


  return (

    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom fixed-top bg-light" style={componentStyles["headerSpecial"]} >
    <div style={componentStyles[".pokeLogoContainer"]}></div>
    <MdMessage></MdMessage>
        <Link className="nav-link px-2 link-secondary" to='/'>Pokedex</Link>
        <Link className="nav-link px-2 link-dark" to='/kanto'>Primeros 151</Link>
        <Link className="nav-link px-2 link-dark" to='/25'>Pikachu</Link>
        <h5><a href="https://pokeapi.co/docs/graphql" className="nav-link px-2 link-dark">Api_Docs</a></h5>
    </header>

  );
}

export default MainHeader;
