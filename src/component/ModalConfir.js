import Swal from 'sweetalert2';

 //Formateamos los valores a tipo moneda 
 const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});


export default function confirmarPedido(colorSelect, sizeSeclect, total, cantidad, product){

  /*
  Si el usuario elige talla y color abre la ventana mostrando la información que está apunto de agregar al carrito,
  si no elige uno de los dos o ninguno abre otra ventana modal informando que debe hacerlo. 
  si elige talla y color y presiona aceptar se abre otro dialogo informando que fue agregado al carrito.
  */

  if(!colorSelect || !sizeSeclect || !total || !cantidad || !product){
    Swal.fire({text:'ups... you must choose your size and color ',  confirmButtonColor:'#000'})
  }else{
    Swal.fire({
      title:'selected variant.',
      text: 'Add to cart',
      html:
     ' <table class="table table-light">'+
    ' <thead>' +
     '<tr style="font-size: 12px">'+
       '<th>Product</th>'+
       '<th>Size</th>'+
      ' <th>Color</th>'+
     '  <th>Quantity</th>'+
     '  <th>Total</th>'+
    ' </tr>'+
 '  </thead>'+
     ' <tbody style="font-size: 12px">'+
          '<td class="table-active">'+ product.title +'</td>'+
         ' <td>'+ sizeSeclect +'</td>'+
         ' <td>'+ colorSelect +'</td>'+
         ' <td>'+ cantidad +'</td>'+
         ' <td>'+ formatter.format(total) +'</td>'+
        '</tr>'+
     ' </tbody>'+
     '</table>',
      imageUrl: product.featured_image,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      confirmButtonColor: '#000'
   
      
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({text:'congratulations, you added the product to the cart!',  confirmButtonColor:'#000'})
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '')
      }
    })
  }
}