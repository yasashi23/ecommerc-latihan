import mongoose, { mongo } from "mongoose"

export function mongooseConnect(){
    if (mongoose.connection.readtState === 1) {
        return mongoose.connection.asPromise()
    }else {
        const uri = process.env.MONGODB_URI
        return mongoose.connect(uri)
    }
    
}