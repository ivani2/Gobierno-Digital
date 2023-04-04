function MainFooter() {

    const componentStyles = {
        ".footerContainer": { 
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          backgroundImage:"linear-gradient( 35.2deg,  rgba(0,119,182,1) -18.7%, rgba(8,24,68,1) 54.3% )"

        },
        ".pokeLogoContainer": {
          position: "relative",
          width: "40px",
          height: "40px",
          borderRadius: "5px",
          backgroundImage:'url("https://www.kindpng.com/picc/m/166-1669691_transparent-pokeball-pixel-png-pixel-pokeball-png-png.png" )',
          backgroundSize: "100% 100%"
        },
        ".reservedRights": {
          fontSize: "2vw",
          color: "#fffcfc",
          fontFamily: "sans-serif"
        }
      }
      

    return (
        <>
        <div style={ componentStyles[".footerContainer"] } >
            <div style={ componentStyles[".pokeLogoContainer"] } ></div>
            <div style={ componentStyles[".reservedRights"] } > Todos los derechos reservados</div>
        </div>
        </>
     );
}

export default MainFooter;
