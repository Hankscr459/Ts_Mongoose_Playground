import { Schema, model, Document } from 'mongoose'

export interface OrderItemModel extends Document {
    name: string
    qty: number
    image: string
    price: number
    prodict: string
}

export interface ShippingAddressModel extends Document {
    address: string
    city: string
    postalCode: string
    country: string
}

export interface paymentResultModel extends Document {
    id: string
    status: string
    update_time: string
    email_address: string
}

export interface OrderModel extends Document {
    user: string
    orderItem: OrderItemModel[]
    ShippingAddress: ShippingAddressModel
    paymentMethod: string
    paymentResult: paymentResultModel
    textPrice: number
    ShippingPrice: number
    totalPrice: number
    isPaid: boolean
    paidAt: Date
    isDelivered: boolean
    deliveredAt: Date
}



const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItem: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            product: { 
                type: Schema.Types.ObjectId, 
                required: true,
                ref: 'Product'
            }
        }
    ],
    ShippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true }
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String}
    },
    textPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    ShippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: 0.0
    },
    deliveredAt: {
        type: Date
    }
}, {
    timestamps: true
})

const Order = model<OrderModel>('Order', orderSchema)

export default Order