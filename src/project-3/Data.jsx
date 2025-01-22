import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Data = () => {
  let [state,setState]=useState([])
  let deleteData=(id)=>{
    axios.delete("http://localhost:3000/user"+id)
    setState(state.filter((ele)=>ele.id!=id))
  }
  useEffect(()=>{
    axios.get("http://localhost:3000/user").then((res)=>{
      setState(res.data.filter((data)=>data.name&&data.email&&data.phone&&data.password))
    }).catch(()=>{
      console.log("Data not fetched");
    })
  },[])
  return (
    <div>
      <Link to="/">Add</Link>
      {state.map((data)=>{
        return(
          <div key={data.id}>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.password}</p>
            <button onClick={()=>deleteData(data.id)}>Delete</button>
            <Link to={`/view/${data.id}`}>View</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Data