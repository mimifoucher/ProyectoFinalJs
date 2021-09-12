//Aquí cree una clase para los productos
class Producto {
    constructor(nombre,precio,cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
}

//Aquí cree una función para crear los productos
function compraProducto(){
    const nombreProducto = prompt('Que producto deseas comprar?');
    const precioProducto = parseInt(prompt('Que precio tiene el producto?'));
    const cantidadProducto = prompt('Que cantidad desea comprar?(máximo 3)');
    let producto = new Producto(nombreProducto,precioProducto,cantidadProducto);
    carritoCompras.push(producto)

    let terminar = prompt('desea terminar?(SI o NO)').toLowerCase()
    if(terminar == 'si'){
        sumaCompra()
    }

}


//Este es el array al cual se iran sumando los productos
let carritoCompras = [];


//Esta es una funcion para sumar el total de la compra a abonar
function sumaCompra(){

    let suma = carritoCompras.reduce((acc,el)=> acc + el.precio, 0);
                                                
    console.log('El total de su compra a abonar es de $' + suma);
}


compraProducto();
sumaCompra();

