import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductsContext from "../store/products-context";

const AddProductPage = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [manufacturerName, setManufacturerName] = useState(''); 
    const [expiryDate, setExpiryDate] = useState(new Date());
    const navigate = useNavigate();

    const productsCtx = useContext(ProductsContext);

    const products = productsCtx.products;
    const manufacturers = productsCtx.manufacturers;

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

        const existing = manufacturers.find(manufacturer => manufacturer.name === manufacturerName);

        let newManufacturerId;

        if(existing) {
            newManufacturerId = existing.id;
        } 

        newManufacturerId = String(manufacturers.length + 1);

        const newManufacturer = {
            id: newManufacturerId,
            name: manufacturerName
        }

        productsCtx.addManufacturer(newManufacturer);

        const newProduct = {
            id: String(products.length + 1),
            name: productName,
            manufacturer: newManufacturerId, 
            price: parseFloat(productPrice),
            expiryDate: expiryDate 
          };

          productsCtx.addProduct(newProduct);
          navigate("/products");
    };

    return <>
            <div className="add-product-container">
                <h1 className="add-product-title">Add New Product</h1>
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
                <button className="btn-primary" type="submit">Add</button>
                </form>
            </div>
    </>
}

export default AddProductPage;