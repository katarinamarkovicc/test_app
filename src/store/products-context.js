import React from "react";

const ProductsContext = React.createContext({
    products: [],
    manufacturers: [],
    addProduct: () => {},
    removeProduct: () => {},
    editProduct: () => {},
    addManufacturer: () => {},
    editManufacturer: () => {}
});

export default ProductsContext;