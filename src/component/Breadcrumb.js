import React from 'react'

export default function Breadcrumb(props) {
    const {product} = props;
  return (
      /* creamos los breadcrum de la pagina */
      <div className="ps-breadcrumb">
      <div className="container">
          <ul className="breadcrumb">
              <li><a href="index.html" className='text-black-50'>Catalog</a></li>
              <li><a href="shop-default.html" className='text-black-50'>Sneckers</a></li>
              {product ? (<li>{product.title}</li>): (<li></li>)}
          </ul>

      </div>
  </div>
  )
}
