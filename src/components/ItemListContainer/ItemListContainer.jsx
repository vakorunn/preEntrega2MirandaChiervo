import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);
    const { idCate } = useParams();
    useEffect(() => {
        const funcion = idCate ? getProductosPorCategoria : getProductos;
        funcion(idCate)
            .then(res => setProductos(res))
    }, [idCate])

    return (
        <>
            <h2> {props.greeting} </h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer