import Layout from "@/components/layout"
import { useState } from "react"
import ProductForm from "@/components/ProductForm"

export default function New() {
    return (
        <Layout>
            <h1>New Product</h1>
            <ProductForm/>
        </Layout>
    )
}
