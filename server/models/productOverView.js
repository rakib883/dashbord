import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true, // You can set this field to required if needed
  },
  title: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  sale: {
    type: String,
    default: "on sale", // Default value if not provided
  },
  Revenue: {
    type: String,
    default: "0", // Default value
  },
  status: {
    type: String,
    default: "Not Available", // Default value if not provided
  },
  createdAt: {
    type: Date,
    default: Date.now, // Default to the current date and time
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Default to the current date and time
  },
});

// Create the model from the schema
const Product = mongoose.model("Product", productSchema);

export default Product;


