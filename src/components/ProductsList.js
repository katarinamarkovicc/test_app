import { format } from 'date-fns';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import ProductsContext from '../store/products-context';

const ProductsList = (props) => {
    const productCtx = useContext(ProductsContext);
    const navigate = useNavigate();

    const products = props.products;
    const manufactures = productCtx.manufacturers;

    const onClickHandler = productId => {
        productCtx.removeProduct(productId);
    }

    const onClickEditHandler = productId => {
        navigate(`/products/${productId}`);
    }

    return <>
            <div>
                    <ul>
                        {products.map((product) => {
                            const manufacturer = manufactures.find(manufacturer => manufacturer.id === product.manufacturer); 
                
                            return (<li className="li-item" key={product.id}>
                                        <div className="li-item-content">
                                            <strong>Name</strong>
                                            {product.name}
                                        </div>
                                        <div className="li-item-content">
                                            <strong>Manufacturer</strong>
                                            {manufacturer.name}
                                        </div>
                                        <div className="li-item-content">
                                            <strong>Price</strong> 
                                            {product.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                                        </div>
                                        <div className="li-item-content">
                                            <strong>Expiry Date</strong>
                                            {format(product.expiryDate, "dd.MM.yyyy")}
                                        </div>
                                        <div className="button-container">
                                            <button type="button" className="btn btn-light" onClick={() => onClickEditHandler(product.id)} style={{backgroundColor: "#f57b42", color: "#fff"}}>Edit product</button>
                                            <button type="button" className="btn btn-danger" onClick={() => onClickHandler(product.id)}>Delete product</button>
                                        </div>
                                    </li>);
                        })}
                    </ul>
            </div>
    </>
}

export default ProductsList;