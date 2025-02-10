import Tarjeta from './Tarjeta';
import {tarjetas} from '../data/tarjetas'


function ListaTarjetas (titulo, descripcion, mensajeInicial) {
 //   const tarjetas = [
   //     {titulo:"Tarjeta Regalo", descripcion:"Vale por un juego", mensajeInicial:"Mensaje de prueba"},
     //   {titulo:"Tarjeta VISA", descripcion:"Compra con cuidado", mensajeInicial:"Mensaje de prueba"},
       // {titulo:"Tarjeta de Crédito", descripcion:"Sin intereses", mensajeInicial:"Mensaje de prueba"}

   //  ]
    return (

        <div>
            {tarjetas.map((tarjeta) => (
                <Tarjeta {...tarjeta} />
                ))}
        </div>
    )

}

export default ListaTarjetas;