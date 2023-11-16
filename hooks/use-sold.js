import { useState, useEffect } from "react";
import axios from "axios";

const useSold = (props) => {
  const [totalArray, setTotalArray] = useState([]);

  axios.get("/api/orders").then((response) => {
    const sales = response.data;
    const allItems = [];
    for (const sale of sales) {
      const lineItems = sale.line_items;
      for (const lineItem of lineItems) {
        allItems.push(lineItem);
      }
    }
    setTotalArray(allItems);
  });

  return totalArray;
};

export default useSold;
