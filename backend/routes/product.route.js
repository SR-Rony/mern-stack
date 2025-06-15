import express from 'express'
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controller/product.controller.js'


const router = express.Router()

router.get("/",getProduct)
router.post("/",createProduct)
router.get("/:id",updateProduct)
router.get("/:id",deleteProduct)




export default router