import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import productRoute from './routes/product.route.js';


dotenv.config()

const app = express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send('my server is running and i love backend')
})




app.use("/api/product",productRoute)


app.listen(3000,async()=>{
    await connectDB()
    console.log(`my server is running at http://localhost:3000`);
    
})