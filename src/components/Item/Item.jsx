import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='cardProducto'>
      <div className="img-container">
        <img className='imgProducto' src={img} alt={nombre} />
      </div>
      <h3 className='name'>Nombre: {nombre} </h3>
      <p>Precio:{precio} </p>
      <p className='id-producto'>ID: {id} </p>
      <button className='btn'><Link className='btn__link' to={`/item/${id}`} > Ver Detalles </Link></button>
    </div>
  )
}

export default Item