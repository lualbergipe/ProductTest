import React, {useEffect, useState} from 'react';
import { getProduct } from '../api/products';
import Breadcrumb from './Breadcrumb';
import Loading from './Loading';
import ShowProduct from './ShowProduct';


export default function SingleProduct() {

    const [product, setProduct] = useState(null);
    /*
    Ejecutamos la petición get para traer el detalle del producto.
    */
    useEffect(() => {
        (async () =>{
            const response = await getProduct();
            setProduct(response);
        })();
    }, []); 
  return (
   <div>
     {/* Si ya cargó la información del producto renderizamos el componente ShowProduct y el Breadcrumb, si no renderizamos el componente Loading */}
       {product ? (
        <div className='p-3'>
          <Breadcrumb product={product} />
                <div className='row py-4'>
                   <ShowProduct product={product} />
                </div>
        </div>
        ): (<Loading/>) }
   
   </div>
  )
}
