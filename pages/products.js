import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import ProductList from "@/components/ProductList";
import store from "@/store";

const products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
   fetchData()
  }, []);

  function fetchData(){
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }

  console.log;
  return (
    <Provider store={store}>
    <Layout>
      <div className="flex justify-between items-center">
        <h2>Products</h2>
        <Link
          className="border-solid border-[1px] border-white px-2 py-1 rounded-lg text-white"
          href="/products/new"
        >
          Add New Product +
        </Link>
      </div>

      <div className="mt-4 border-t-2 border-t-[.1rem] mb-4" />

      <ProductList productData={products} />
    </Layout>
    </Provider>
  );
};

export default products;
