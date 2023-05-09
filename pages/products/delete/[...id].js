import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"



export default function Delete() {
    const router = useRouter()
    const [productInfo,setProductInfo] = useState()
    const {id} = router.query
    useEffect(() => {
        if(!id) {
            return
        }
        axios.get('/api/products?id='+id).then(resp => {
            setProductInfo(resp.data)
        })
    },[id])
    function goBack(){
        route.push('/products')
    }
    async function deleteProduct() {
        await axios.delete('/api/products?id='+id)
        goBack()
    }

  return (
    <Layout>
        <h1 className="text-center">do you really want to delete product &nbsp;"{productInfo?.title}"</h1>
        <div className="flex gap-2 justify-center">
        <button 
            onClick={deleteProduct}
            className="btn-red">
            Yes
        </button>
        <button 
            onClick={goBack} 
            className="btn-default">
            No
        </button>
        </div>
    </Layout>
  )
}
