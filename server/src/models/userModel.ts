import { Schema, model, Document } from 'mongoose'

export interface UserModel extends Document {
    user: string
    name: string
    email: string
    password: string
    isAdmin: boolean
}

const userSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

const User = model<UserModel>('User', userSchema)

export default User