import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'

// Load environment variables
dotenv.config()

// Import custom modules
import connectDB from './config/connectDB.js'
import userRouter from './route/user.route.js'
import categoryRouter from './route/category.route.js'
import uploadRouter from './route/upload.router.js'
import subCategoryRouter from './route/subCategory.route.js'
import productRouter from './route/product.route.js'
import cartRouter from './route/cart.route.js'
import addressRouter from './route/address.route.js'
import orderRouter from './route/order.route.js'

const app = express()
const PORT = process.env.PORT || 8080

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}))

// Optional: Handle preflight requests
app.options('*', cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}))

app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(helmet({
  crossOriginResourcePolicy: false
}))

// Default route
app.get("/", (req, res) => {
  res.json({
    message: `Server is running on PORT ${PORT}`
  })
})

// API routes
app.use('/api/user', userRouter)
app.use('/api/category', categoryRouter)
app.use('/api/file', uploadRouter)
app.use('/api/subcategory', subCategoryRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)

// Start server after DB connects
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`)
  })
}).catch((err) => {
  console.error("❌ Failed to connect to DB:", err)
})
