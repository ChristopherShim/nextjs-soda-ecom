const { Schema, model, models } = require("mongoose");

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  images: [{ type: String }],
  stock: { type: Number, required: true },
  packageType: String
}, {
  timestamps:true
});

export const Product = models.Product || model("Product", ProductSchema);
