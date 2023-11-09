import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { editActions } from "@/store/index";

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

  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [images, setImages] = useState(existingImages || []);
  const [stock, setStock] = useState(existingStock || "");
  const [packageType, setPackageType] = useState(existingPackageType || "");
  const router = useRouter();

  const discardEditHandler = () => {
    dispatch(editActions.discardEdit());
  };


  async function uploadImages(e) {
    const files = e.target?.files;
    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
    }
    
  }

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
    dispatch(editActions.discardEdit());
  }

  return (
    <div className="col-span-1 border-solid border-[1px] border-white px-4 py-6 rounded-lg">
      <h3 className="mb-2">Edit Product</h3>
      <form onSubmit={saveProduct}>
        <label>Photo</label>
        <div list={images} className="mb-2 flex flex-wrap gap-2">
          {!!images?.length &&
            images.map((link) => (
              <div key={link} className="h-24">
                <img src={link}></img>
              </div>
            ))}

          <label className="w-24 h-24 flex items-center justify-center text-sm gap-1 text-gray-500 rounded-lg bg-gray-200 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
              />
            </svg>
            <div>Upload</div>
            <input
              type="file"
              className="hidden"
              onChange={uploadImages}
            ></input>
          </label>
        </div>

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
          <button
            type="button"
            className="btn-secondary"
            onClick={discardEditHandler}
          >
            Discard
          </button>
          <button type="submit" className="btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
