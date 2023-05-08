import { Product } from '@/modals/Product'
import { mongooseConnect } from '@/lib/mongoose'


export default async function handlle(req,res) {
    const {method} = req
    await mongooseConnect()
    if (method === 'POST') {
        const {title,description,price} = req.body
        const productDoc = await Product.create({
            title,description,price,
        })
        res.json(productDoc)
    }
}