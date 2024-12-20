import express from "express"
import { productOverView } from "../controler/product.js"
const productRouter = express.Router()

productRouter.get("/top-product",productOverView)
productRouter.get("/top-product",productOverView)

export default productRouter