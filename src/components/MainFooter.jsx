function MainFooter() {

    const componentStyles = {
        ".footerContainer": { 
            backgroundColor: "black" 
        },
        ".pokeLogoContainer": {
          position: "relative",
          width: "15%",
          height: "90%",
          borderRadius: "5px",
          backgroundImage:
            'url("https://www.kindpng.com/picc/m/166-1669691_transparent-pokeball-pixel-png-pixel-pokeball-png-png.png" )',
          backgroundSize: "100% 100%"
        },
        ".reservedRights": {
          fontSize: "3vw",
          color: "#fffcfc",
          fontFamily: "sans-serif"
        }
      }
      

    return (
        <>
        <div style={ componentStyles[".footerContainer"] } >
            <div style={ componentStyles[".pokeLogoContainer"] } ></div>
            <div style={ componentStyles[".reservedRights"] } > Todos los derechos reservados </div>
        </div>
        </>
     );
}

export default MainFooter;
