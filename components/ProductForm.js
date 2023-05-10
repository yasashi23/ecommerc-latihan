import { useRouter } from "next/router"
import { useState } from "react"
import axios from "axios"


export default function ProductForm({
    _id,
    title:existingTitile, 
    description:existingDescription, 
    price:existingPrice,
    images
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
    <label>
        Photos 
    </label>
    <div className="mb-2">
        <button className="w-24 h-24 border text-center flex items center>">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>

            Upload
        </button>
        {!images?.length &&(
            <div>No Photos in this Product</div>
        )}
    </div>
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
