import React, {useState, useEffect} from 'react';
import '../styles/globalStyles.css'
import CarouselProduct from './CarouselProduct';
import confirmarPedido from './ModalConfir';


export default function ShowProduct(props) {
    const {product} = props;
    const [colorSelect, setColorSelect] = useState(null);
    const [sizeSeclect, setSizeSeclect] = useState(null);
     //state para cantidades
     const [cantidad, guardarCantidad] = useState(1);
     const [total, guardarTotal] = useState(0);

   //actualizamos el  el total cada vez que cambia la cantidad
   useEffect(() => {
    calcularTotal();
    },[cantidad]);

    //Calculo para el total a pagar
    const calcularTotal = () =>{
    const totalPagar = product.price * cantidad;
    guardarTotal(totalPagar);
    }

    //Increentar en uno la cantidad
    const incrementarUno = ()=>{
        const nuevaCantidad = parseInt(cantidad) +1;
        guardarCantidad(nuevaCantidad)
    }

    //decrementar uno la cantidad
    const decrementarUno = ()=>{
        if(cantidad >1){
            const nuevaCantidad = parseInt(cantidad) -1;
            guardarCantidad(nuevaCantidad)
        }
    }
    
   //Formateamos los valores a tipo moneda 
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      });
        /* Se crea esta funcion para limpiar el string ya que viene contaminado con etiquetas html  */
      const stripHtml = (html)=>{
        // Crea un nuevo elemento div
        var temporalDivElement = document.createElement("div");
        // Establecer el contenido HTML con el dado
        temporalDivElement.innerHTML = html;
        // Recuperar la propiedad de texto del elemento (compatibilidad con varios navegadores)
        return temporalDivElement.textContent || temporalDivElement.innerText || "";
    }
      
  return (
<>
    <CarouselProduct product={product}/>
    <div className='col-md-6'>
        <p className='text-black-50'> by Nike x ALYX</p>
        <h1 className='display-6'>{product.title}</h1>
        <h3 class="ps-product__price">{formatter.format(product.price)}
            <small className='text-black-50 back'> {formatter.format(product.compare_at_price)}</small>
        </h3>
        <hr/>
        <div id="color" class="wrapper">
            <p className="text-black-50 lead">Color:</p>
                {product.options[0].values.map(data =>  {
                    return (
                        <div>
                            <input type="radio" name="radio" id={data} class="radio" 
                            onClick={(data) => setColorSelect(data.target.id)}
                            />
                            <label for={data}>&nbsp;</label>
                        </div>
                        );
                    })
                }
        </div>
         <hr/>
        <figure>
            <p className="text-black-50 lead ">Size:</p>
            <div class="labels-radio-rect talla-instance options options--size row">
                {product.options[1].values.map(data =>  {
                    return (
                        <label class="label">
                            <input class="input" type="radio" name="size-product-01" id={data}
                                onClick={(data) => setSizeSeclect(data.target.id)}/>
                            <span class="label__checkmark">
                                <svg class="shape" xmlns="http://www.w3.org/2000/svg">
                                <rect class="shape-rect" />
                                </svg>
                                <span class="outline">{data}</span>
                            </span>
                        </label> 
                        )
                    })
                }
            </div>
        </figure> 
        <hr/>
        <div class="row justify-content-between">
            <div class="col-4">
                <div class="form-group--number">
                    <button className="up" onClick={()=> incrementarUno()}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button class="down" onClick={()=> decrementarUno()}>
                        <i className="fa fa-minus"></i>
                    </button>
                    <input disabled="disabled" className="form-control" type="text" value= {cantidad.toString()} />
                </div>
            </div>
            <div class="col-4">
                <div class="form-group--number d-flex">
                    <p className="text-black-50 totalPrice"  >Total Price: <b className='totalProduct'>{formatter.format(total)}</b></p>
                </div>
            </div>
        </div>
        <hr/>
        <div class="d-grid gap-2 d-lg-block ">
            <button className='btn btn-outline-dark px-5 py-2 '>
            Add to favourite
            </button>
            <button type='button' className='btn btn-dark ms-lg-2 px-5 py-2'  onClick={()=> confirmarPedido(colorSelect, sizeSeclect, total, cantidad, product)}>
            Add Cart
            </button>
        </div>
        <hr/>
        <small className='text-black-50 description'> {stripHtml(product.description)}</small>         
    </div>
</>
    
  )
}
