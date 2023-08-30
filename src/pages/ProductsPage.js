import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ProductsList from "../components/ProductsList";
import ProductsContext from "../store/products-context";

const ProductsPage = () => {
    const products = useContext(ProductsContext).products;

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/products/add");
    }

    return <>
        <h1>Information about products</h1>
        <button type="button" className="btn-primary" style={{marginLeft: "1000px", marginBottom: "25px"}} onClick={onClickHandler}>
            New product
        </button>
        <ProductsList products={products} />
    </>
}

export default ProductsPage;