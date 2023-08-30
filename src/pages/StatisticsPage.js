import React, { useContext } from "react";
import { BarChart, Bar, PieChart, Pie, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';



import ProductsContext from "../store/products-context";

const StatisticsPage = () => {
    const productsCtx = useContext(ProductsContext);

    const products = productsCtx.products;
    const manufacturers = productsCtx.manufacturers;

    const mostExpensive = products.sort((a, b) => b.price - a.price).slice(0, 5);
    const leastExpensive = products.sort((a, b) => a.price - b.price).slice(0, 5);

    const mostExpensiveCharData = mostExpensive.map(product => ({
        name: product.name,
        price: product.price,
    }));

    const leastExpensiveChartData = leastExpensive.map(product => ({
        name: product.name,
        price: product.price,
    }));

    const manufacturerProductsCount = {};

    products.forEach(product => {
        if (manufacturerProductsCount[product.manufacturer]) {
            manufacturerProductsCount[product.manufacturer]++;
        } else {
            manufacturerProductsCount[product.manufacturer] = 1;
        }
    });

    const manufacturerPieChartData = manufacturers.map(manufacturer => ({
        name: manufacturer.name,
        value: manufacturerProductsCount[manufacturer.id] || 0,
    }));

    return(
        <div>
            <h1 className="heading-statistics">Statistics</h1>
            <div>
                <h2 className="heading-statistic-item">Top 5 Most Expensive Products</h2>
                <div className="bar-chart-container">
                    <BarChart width={500} height={300} data={mostExpensiveCharData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="rgba(75, 192, 192, 0.6)" name="Top 5 Expensive Products" />
                </BarChart>
                </div>
            </div>
            <div>
                <h2 className="heading-statistic-item">Top 5 Least Expensive Products</h2>
                <div className="bar-chart-container">
                    <BarChart width={500} height={300} data={leastExpensiveChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="rgba(255, 99, 132, 0.6)" name="Top 5 Least Expensive Products" />
                    </BarChart>
                </div>
            </div>
            <div>
                <h2 className="heading-statistic-item">Number of Products by Manufacturer</h2>
                <div className="pie-chart-container">
                    <PieChart width={800} height={200}>
                        <Pie dataKey="value" data={manufacturerPieChartData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
}

export default StatisticsPage;