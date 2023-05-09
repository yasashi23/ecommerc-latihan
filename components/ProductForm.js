import { useRouter } from "next/router"
import { useState } from "react"
import axios from "axios"


export default function ProductForm({
    _id,
    title:existingTitile, 
    description:existingDescription, 
    price:existingPrice
}) {
    const [title,setTitle] = useState(existingTitile || '') 
    const [description, setDescription] = useState(existingDescription ||  '')
    const [price, setPrice] = useState(existingPrice || '')
    const [goToProducts, setGoToProducts] = useState(false)
    const router = useRouter()
    async function saveProduct(ev) {
        ev.preventDefault()
        const data = {title,description, price}
        if(_id) {
            // update
            await axios.put('/api/products', {...data,_id})

        }else{
            // else
            await axios.post('/api/products', data)   
        }
        setGoToProducts(true)   
    }
    if(goToProducts) {
        router.push('/products')
    }
  return (
    <form action="" onSubmit={saveProduct}>
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
  )
}
