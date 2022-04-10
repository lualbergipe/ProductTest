import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

/* Creamos una bandera para cuando inicia la aplicación ya que primero renderiza y luego  realiza la petición a la api,
mientras carga la info muestra el contenido de este componente  */
export default function Loading() {
  return (
   <>
    <div className='container'>
    <div className='row py-4'>
   <h4>Cargando...</h4>
   <div className='col-md-6'>
     <Skeleton height={400}/>
   </div>
   <div className='col-md-6' style={{lineHeight: 2}}>
   <Skeleton height={100} />
   <Skeleton height={200}/>
   <Skeleton height={50}/>
   <Skeleton height={50}/>
   </div>
   </div>
   </div>
   </>
  )
}
