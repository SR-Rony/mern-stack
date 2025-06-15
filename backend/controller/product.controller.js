import Product from "../models/product.model.js";

// all get product controller
export const getProduct = async(req,res)=>{
    try {
        const  products = await Product.find({})

        res.status(200).json({
            success:true,
            data:products
        })
        
    } catch (error) {

        console.log('get product error',error.message);
        res.status(500).json({success:false,message:"Internal error"})
        
        
    }
}

// create product controller
export const createProduct = async(req,res)=>{
    const product = req.body

    const {name,price,image} = product

    if(!name ||!price ||!image){

        return res.status(400).json({success:false,message:'please provide all fields'})

    }

    const newProduct = new Product(product)

    try{

        await newProduct.save()

        res.status(201).json({
            success:true,
            data:newProduct
        })

    }catch(error){
        console.log('prodect error:',error.message);

        res.status(500).json({success:false,message:'Serber error'})
        
    }

}

// update product controller
export const updateProduct = async (req,res)=>{
    const {id} = req.params

    const product = req.body

    try {
        const updateProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(201).json({success:true,data:updateProduct})
        
    } catch (error) {
        console.log('delete product error:',error.message);
        
        res.status(400).json({success:false,message:'product not found'})
    }
}

// delete product controller
export const deleteProduct = async (req,res)=>{
    const {id} = req.params

    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'product is delete'})
        
    } catch (error) {
        console.log('delete product error:',error.message);
        
        res.status(400).json({success:false,message:'product not found'})
    }
}
