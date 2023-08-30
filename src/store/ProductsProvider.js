import { useState } from "react";
import ProductsContext from "./products-context";

const ProductsProvider = (props) => {
    const [manufacturers, setManufacturers] = useState([
        { id: "1", name: "Johnson & Johnson" },
        { id: "2", name: "Pfizer" },
        { id: "3", name: "Sinopharm"}
    ]);

    const [products, setProducts] = useState([
        {
            id: "1",
            name: "Paracetamol",
            manufacturer: "1",
            price: 7.99,   
            expiryDate: new Date("2043-08-29")  
        },
        {
            id: "2",
            name: "Ibuprofen",
            manufacturer: "1",
            price: 5.99,   
            expiryDate: new Date("2053-08-01")  
        },
        {
            id: "3",
            name: "Xanax",
            manufacturer: "2",
            price: 10.99,   
            expiryDate: new Date("2031-07-27")  
        },
        {
            id: "4",
            name: "Alergosan",
            manufacturer: "1",
            price: 8.99,   
            expiryDate: new Date("2029-11-02")  
        },
        {
            id: "5",
            name: "Defrinol",
            manufacturer: "3",
            price: 12.99,   
            expiryDate: new Date("2033-07-29")  
        },
        {
            id: "6",
            name: "Caffetin",
            manufacturer: "2",
            price: 4.99,   
            expiryDate: new Date("2043-08-01")  
        },
        {
            id: "7",
            name: "Bensedin",
            manufacturer: "3",
            price: 15.99,   
            expiryDate: new Date("2053-01-29")  
        },
        {
            id: "8",
            name: "Enterofuryl",
            manufacturer: "3",
            price: 2.99,   
            expiryDate: new Date("2053-01-29")  
        },
        {
            id: "9",
            name: "Pantenol",
            manufacturer: "2",
            price: 1.99,   
            expiryDate: new Date("2053-01-29")  
        },
        {
            id: "10",
            name: "Probiotic",
            manufacturer: "2",
            price: 17.99,   
            expiryDate: new Date("2053-01-29")  
        }
    ]);

    const addProduct = newProduct => {
        setProducts(prevProducts => [...prevProducts, newProduct]);
    }

    const removeProduct = productToRemove => {
        setProducts(products => products.filter(product => product.id !== productToRemove));
    }

    const editProduct = (productToEdit, { name, manufacturer, price, expiryDate }) => {
        setProducts(products => products.map(product => 
            product.id === productToEdit
            ? {
                ...product,
                name: name !== undefined ? name: product.name,
                manufacturer: manufacturer !== undefined ? manufacturer : product.manufacturer,
                price: price !== undefined ? price : product.price,
                expiryDate: expiryDate !== undefined ? expiryDate : product.expiryDate
            } 
            : product))
    }

    const addManufacturer = (newManufacturer) => {
        setManufacturers(prevManufacturers => [...prevManufacturers, newManufacturer]);
    }

    const editManufacturer = (manufacturerToEdit, { name }) => {
        setManufacturers(manufacturers => manufacturers.map(manufacture => 
            manufacture.id === manufacturerToEdit 
            ? {
                ...manufacture,
                name: name !== undefined ? name : manufacture.name,
            } 
            : manufacture));
    }

    const productsContext = {
        products,
        manufacturers,
        addProduct,
        removeProduct,
        editProduct,
        addManufacturer,
        editManufacturer
    };

    return (
        <ProductsContext.Provider value={productsContext}>
            {props.children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;