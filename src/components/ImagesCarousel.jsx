
import Carousel from 'react-bootstrap/Carousel';

const ImagesCarousel = ( images ) => {

    console.log( images.images )
    const imageStyles = {
       ".cardExternal": {maxHeight: "300px"},
       ".imageInside": { width: "50% !important", height: "20% !important" }
    }
    return (
        <>
        <Carousel>
            <Carousel.Item style={ imageStyles['.cardExternal'] }>
                <img
                className="d-block w-50" style={ imageStyles['.imageInside'] }
                src={ images.images[2] }
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Vista de atrás</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={ imageStyles['.cardExternal'] }>
                <img
                className="d-block w-50" style={ imageStyles['.imageInside'] }
                src={ images.images[0] }
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Vista default</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={ imageStyles['.cardExternal'] }>
                <img
                className="d-block w-50" style={ imageStyles['.imageInside'] }
                src={ images.images[1] }
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Shiny default</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
     );
}

export default ImagesCarousel;
