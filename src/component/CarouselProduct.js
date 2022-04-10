import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

/* Creamos el carousel para renderizar las imagenes con la libreria react-responsive-carousel*/
export default function CarouselProduct(props) {
    const {product} = props
    console.log(product.media);
  return (
<div className='col-md-6'>
    <Carousel 
    showStatus={false}
    autoPlay={true}>
        {product.media.map(data =>  {
          return (
            <img src={data.src} />
            )
          })
        }
    </Carousel>
</div>

  )
}
