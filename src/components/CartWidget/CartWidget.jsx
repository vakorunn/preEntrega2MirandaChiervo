import './CartWidget.css'

const CartWidget = () => {
    const carrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";//buscar porque no funciona font awesome
    return (
        <>
            <div className="cart-container">
                <img className='imgCarrito' src={carrito} alt="carrito de compras" />
                <p className='product-count'>4</p>
            </div>
        </>
    )
}

export default CartWidget