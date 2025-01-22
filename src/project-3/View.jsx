import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const View = () => {
  let [state,setState]=useState({})
  let {id}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:3000/user/${id}`).then((res)=>{
      setState(res.data)
    }).catch(()=>{
      console.log("Data Not Found");
    })
  },[id])
  return (
    <div>
      {state==null?"Nothing":<div key={state.id}>
        <p>{state.name}</p>
        <p>{state.email}</p>
        <p>{state.phone}</p>
        <p>{state.password}</p>
        <Link to="/data">Go Back</Link>
        <Link to={`/update/${id}`}>Edit</Link>
        </div>}
    </div>
  )
}

export default View