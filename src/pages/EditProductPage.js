import { useParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import ProductsContext from '../store/products-context';

const EditProductPage = () => {
    const { productId } = useParams();
    const productCtx = useContext(ProductsContext);

    const products = productCtx.products;
    const manufacturers = productCtx.manufacturers;

    const navigate = useNavigate();

    const productToEdit = products.find(product => product.id === productId); 
    const manufactureOfProduct = manufacturers.find(manufacture => manufacture.id === productToEdit.manufacturer);

    const [productName, setProductName] = useState(productToEdit.name);
    const [productPrice, setProductPrice] = useState(productToEdit.price);
    const [manufacturerName, setManufacturerName] = useState(manufactureOfProduct.name);  
    const [expiryDate, setExpiryDate] = useState(productToEdit.expiryDate);

    const handleProductNameChange = event => {
        setProductName(event.target.value);
    };

    const handleProductPriceChange = event => {
        setProductPrice(event.target.value);
    };

    const handleManufacturerChange = event => {
        setManufacturerName(event.target.value);
    };

    const handleExpiryDateChange = event => {
        setExpiryDate(new Date(event.target.value));
    };

    const handleSubmit = event => {
        event.preventDefault();

        const updatedProduct = {
            id: productId,
            name: productName,
            manufacturer: manufactureOfProduct.id,
            price: parseFloat(productPrice),
            expiryDate: expiryDate
        };

        productCtx.editProduct(productId, updatedProduct); 

        const updatedManufacturer = {
            id: manufactureOfProduct.id,
            name: manufacturerName
        };

        productCtx.editManufacturer(manufactureOfProduct.id, updatedManufacturer);

        navigate("/products");
    };
    
    return <>
            <div className="add-product-container">
                <h1 className="add-product-title">Edit Product</h1>
                <form className="add-product-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input required className="form-input" type="text" value={productName} onChange={handleProductNameChange} />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input required className="form-input" type="number" value={productPrice} onChange={handleProductPriceChange} />
                    </div>
                    <div className="form-group">
                        <label>Manufacturer</label>
                        <input required className="form-input" type="text" value={manufacturerName} onChange={handleManufacturerChange} />
                    </div>
                    <div className="form-group">
                        <label>Expiry Date</label>
                        <input required className="form-input" type="date" value={expiryDate.toISOString().split('T')[0]} onChange={handleExpiryDateChange} />
                    </div>
                    <button className="btn-primary" type="submit" style={{backgroundColor: "#f57b42"}}>Save changes</button>
                </form>
            </div>
</>
}

export default EditProductPage;