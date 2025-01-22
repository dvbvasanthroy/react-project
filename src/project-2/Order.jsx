import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'

const Order = () => {
  let [state,setState]=useState(null)
  let [count,setCount]=useState(1)
  let {id}=useParams()
  let increase=()=>{
    setCount(count+1)
  }
  let decrease=()=>{
    count>1?setCount(count-1):setCount(1)
  }
  let totalPrice=()=>{
    return count*state.price
  }
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
      setState(res.data)
    }).catch(()=>{
      console.log("Loading...!!!");
    })
  },[])
  return (
    <div>
      {state==null?"nothing":(<div>
        <p>{state.title}</p>
        <p>{state.category}</p>
        <p>Price: {state.price}</p>
        <button onClick={decrease}>-</button>
        {count}
        <button onClick={increase}>+</button>
        <p>Total Price: {totalPrice()}</p>
        <Link to="/checkout">Check Out</Link>
        </div>)}
    </div>
  )
}

export default Order