import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";

const orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);
  return (
    <Layout>
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <td>Date</td>
            <td>Paid</td>
            <td>Recipient</td>
            <td>Products</td>
          </tr>
        </thead>
        <tbody className="text-white">
          {orders.length > 0 &&
            orders.map((o) => (
              <tr>
                <td>{new Date(o.createdAt).toLocaleString()}</td>
                <td className={o.paid ? "text-green-600" : "text-red-600"}>
                  {o.paid ? "YES" : "NO"}
                </td>
                <td>
                  {o._id}  <br />
                  {o.email} <br />
                  {o.name} <br />
                  {o.streetAddress} <br />
                  {o.city} <br />
                  {o.postalCode} <br />
                  {o.country} <br />
                </td>
                <td>
                  {o.line_items.map((l) => (
                    <>
                      {l.price_data.product_data.name} x {l.quantity} <br />
                    </>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default orders;
