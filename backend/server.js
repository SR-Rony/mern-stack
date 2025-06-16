import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import productRoute from './routes/product.route.js';


dotenv.config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000


app.get("/",(req,res)=>{
    res.send('my server is running and i love backend')
})




app.use("/api/product",productRoute)


app.listen(PORT,async()=>{
    await connectDB()
    console.log(`my server is running at http://localhost:${PORT}`);
    
})