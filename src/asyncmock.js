const misProductos = [
    { id: "1", nombre: "Arroz Lucchetti", precio: 220, img: "../img/arroz.png", idCat: "1" },
    { id: "2", nombre: "Fideos Lucchetti", precio: 270, img: "../img/fideos-tallarin.png", idCat: "1" },
    { id: "3", nombre: "Milanesa de Nalga", precio: 1750, img: "../img/milanesa-nalga.png", idCat: "2" },
    { id: "4", nombre: "Picada Especial", precio: 1200, img: "../img/picada-especial.jpg", idCat: "2" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}