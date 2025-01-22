import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './project_2.module.css'

const Products = () => {
  let [state,setState]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/").then((res)=>{
      setState(res.data)
    }).catch(()=>{
      console.log("Loading...!!!");
    })
  },[])
  return (
    <>
      {state.map((data)=>{
        return(
          <div key={data.id} className={styles.productDiv}>
            <p>{data.title}</p>
            <p>{data.category}</p>
            <p>{data.price}</p>
            <img src={data.image} alt="" className={styles.product_img}/>
            <Link to={`/cart/${data.id}`}>Go to Cart</Link>
          </div>
        )
      })}
    </>
  )
}

export default Products