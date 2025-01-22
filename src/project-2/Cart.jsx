import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'
const Cart = () => {
  let [state,setState]=useState(null)
  let {id}=useParams()
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
      setState(res.data)
    }).catch(()=>{
      console.log("Loading...!!!");
    })
  },[])
  return (
    <div>
      {state==null?"nothing":(<div key={state.id}>
        <p>{state.title}</p>
        <img src={state.image} alt="" />
        <p>{state.category}</p>
        <p>{state.price}</p>
        {/* <p>{state.rating.rate}</p> */}
        {/* <p>{state.rating.count}</p> */}
        <Link to="/">Go Back</Link>
        <Link to={`/order/${state.id}`}>Order Now</Link>
        </div>)}
    </div>
  )
}

export default Cart