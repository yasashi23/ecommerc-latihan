import Layout from "@/components/layout";
import axios from "axios";
import Link from "next/link";
import { useEffect,useState } from "react";


export default function Products() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('/api/products').then(resp => {
      // console.log(resp.data)
      setProducts(resp.data)
    })
  },[])
  return (
    <Layout>
      <Link className="bg-blue-900 rounded-md text-white py-1 px-2" href={'/products/new'}>Add new Product</Link>
      <table>
        <thead>
          <tr>
            <td>Product Name</td>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr>
              <td>{prod.title}</td>
              <td>button</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
