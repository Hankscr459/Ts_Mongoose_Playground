  
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/user'
import products from './data/product'
import User from './models/userModel'
import Product from './models/productModel'
import Order from './models/orderModel'
import connectDB from './config/db'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })
        await Product.insertMany(sampleProducts)
        console.log('Data Import!')
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

const destoryData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destoryed')
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destoryData()
} else {
    importData()
}