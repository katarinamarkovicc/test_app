import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import ProductsPage from "./pages/ProductsPage";
import AboutApplicationPage from "./pages/AboutApplicationPage";
import ErrorPage from "./pages/ErrorPage";
import StatisticsPage from "./pages/StatisticsPage";
import AddProductPage from "./pages/AddProductPage";
import ProductsProvider from "./store/ProductsProvider";
import EditProductPage from "./pages/EditProductPage";

const router = createBrowserRouter([
  { path: "/", element: <RootLayout />, errorElement: <ErrorPage />, 
    children: [
      { path: "/", element: <ProductsPage />},
      { path: "/products", element: <ProductsPage />},
      { path: "/products/add", element: <AddProductPage />},
      { path: "/products/:productId", element: <EditProductPage />},
      { path: "/about-application", element: <AboutApplicationPage />},
      { path: "/statistics", element: <StatisticsPage />},

    ]}
]);

function App() {
  return (
    <>
      <ProductsProvider>
        <RouterProvider router={router}/>
      </ProductsProvider>
    </>
  );
}

export default App;
