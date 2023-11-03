import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

export default function InPageProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
  stock: existingStock,
  packageType: existingPackageType,
}) {
  const dispatch = useDispatch();
  const editButtonVis = useSelector((state) => state.visibility);

  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [images, setImages] = useState(existingImages || []);
  const [stock, setStock] = useState(existingStock || "");
  const [packageType, setPackageType] = useState(existingPackageType || "");
  const [refreshProducts, setRefreshProducts] = useState(false);
  const router = useRouter();

  const discardEditHandler = () => {
    dispatch({ type: "discardEdit" });
  };


  async function saveProduct(e) {
    e.preventDefault();
    const data = { title, description, price, images, stock, packageType };

    if (_id) {
      //Update Product
      await axios.put("/api/products", { ...data, _id });
    } else {
      //Create Product
      await axios.post("/api/products", data);
    }
    setRefreshProducts(true);
  }

  if (refreshProducts) {
    router.reload();
  }

  return (
    <div className="col-span-1 border-solid border-[1px] border-white px-4 py-6 rounded-lg">
      <h3 className="mb-2">Edit Product</h3>
      <form onSubmit={saveProduct}>
        <label className="font-medium">Description</label>
        <div className="border-solid border-[1px] rounded-lg p-2 m-2">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="product-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2"
          ></input>
          <label>Description</label>
          <textarea
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <label className="font-medium">Package Type</label>
        <input
          type="text"
          placeholder="Package Type"
          value={packageType}
          onChange={(e) => setPackageType(e.target.value)}
          className="mt-2"
        ></input>

        <label>Price (in USD)</label>
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-2"
        ></input>
        <label>Stock #</label>
        <input
          type="number"
          placeholder="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="mt-2"
        ></input>
        <div className="flex justify-between gap-2">
          {" "}
          <button type="button" className="btn-secondary" onClick={discardEditHandler}>
            Discard
          </button>
          <button className="btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
}
