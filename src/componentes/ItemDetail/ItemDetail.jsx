import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className='item-detail-container'>
      <div className="text-container">
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
      </div>
      <div className="img-container">
        <img src={img} alt={nombre} />
      </div>
    </div>
  )
}

export default ItemDetail