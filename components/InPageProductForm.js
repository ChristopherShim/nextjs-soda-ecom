import React from "react";
import { useState } from "react";

export default function InPageProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
  stock: existingStock,
  packageType: existingPackageType,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [images, setImages] = useState(existingImages || []);
  const [stock, setStock] = useState(existingStock || "");
  const [packageType, setPackageType] = useState(existingPackageType || "");

  function disableEditHandler(e) {
    e.preventDefault();
    console.log("hello");
  }

  return (
    <div className="col-span-1 border-solid border-[1px] border-white px-4 py-6 rounded-lg">
      <h3 className="mb-2">Edit Product</h3>
      <form>
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
        <button className="btn-primary">Save</button>
        <button onClick={disableEditHandler} className="btn-primary">
          Discard
        </button>
      </form>
    </div>
  );
}
