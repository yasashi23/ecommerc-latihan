import Layout from "@/components/layout"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"

export default function New() {
    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [goToProducts, setGoToProducts] = useState(false)
    const router = useRouter()
    async function createProduct(ev) {
        ev.preventDefault()
        const data = {title,description, price}
        await axios.post('/api/products', data)   
        setGoToProducts(true)   
    }
    if(goToProducts) {
        router.push('/products')
    }
  return (
    <Layout>
    <form action="" onSubmit={createProduct}>
    <h1>New Product</h1>
    <label htmlFor="">Product Name</label>
    <input 
        type="text" 
        placeholder="product name" 
        value={title} 
        onChange={ev => setTitle(ev.target.value)}/>
    <label htmlFor="">description</label>
    <textarea 
        placeholder="description" 
        value={description}
        onChange={ev => setDescription(ev.target.value)}
        />
    <label htmlFor="">Price (in USD)</label>
    <input 
        type="number" 
        placeholder="price"
        value={price}
        onChange={ev => setPrice(ev.target.value)}/>
    <button 
        className="btn-primary" 
        type="submit">Save</button>
    </form>
    </Layout>
  )
}
