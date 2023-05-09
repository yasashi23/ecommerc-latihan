import ProductForm from "@/components/ProductForm";
import Layout from "@/components/layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";

export default function EditProductPage() {
    const [productInfo, setProductInfo] = useState(null)
    const router = useRouter()
    // router.query.id 
    const {id} = router.query
    useEffect(() => {
        if(!id) {
            return;
        }
        axios.get('/api/products?id='+id).then(resp => {
            setProductInfo(resp)
        })
    },[id])
    return(
        <Layout>
            <h1>Edit product</h1>
            {productInfo && (
            <ProductForm {...productInfo}/> 
            )}
        </Layout>
    )
}