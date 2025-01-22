import React,{useState,useEffect} from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Update = () => {
  let [state,setState]=useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })
  let navigate=useNavigate()
  let {id}=useParams()
  let {name,email,phone,password}=state
  let handleChange=(l)=>{
    let {name,value}=l.target
    setState({...state,[name]:value})
  }
  let handleSubmit=(p)=>{
    p.preventDefault()
    axios.put(`http://localhost:3000/user/${id}`,state).then((res)=>{
      console.log(res.data);
      navigate("/data")
    }).catch(()=>{
      console.log("Data Not Updated");
    })
  }
  useEffect(()=>{
    axios.get(`http://localhost:3000/user/${id}`).then((res)=>{
      setState(res.data)
    }).catch(()=>{
      console.log("Data Not Found");
    })
  },[id])
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={name} name="name" placeholder='Enter your new name' onChange={handleChange}/><br /><br />
        <input type="text" value={email} name="email" placeholder='Enter your new email' onChange={handleChange}/><br /><br />
        <input type="text" value={phone} name="phone" placeholder='Enter your new phone number' onChange={handleChange}/><br /><br />
        <input type="text" value={password} name="password" placeholder='Enter your new password' onChange={handleChange}/><br /><br />
        <button>Update</button>
      </form>
    </div>
  )
}

export default Update