import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  let [state,setState]=useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })
  let navigate=useNavigate()
  let {name,email,phone,password}=state
  let handleChange=(a)=>{
    let {name,value}=a.target
    setState({...state,[name]:value})
  }
  let handleSubmit=(r)=>{
    r.preventDefault()
    if (name&&email&&phone&&password) {
      axios.post("http://localhost:3000/user",state).then((res)=>{
        console.log(res);
        navigate("/data")
      }).catch(()=>{
        console.log("Data is not posted");
      })
    }
    else{
      console.log("Please fill all the fields");
    }
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={name} name="name" placeholder='Enter your name' onChange={handleChange} /><br /><br />
        <input type="text" value={email} name="email" placeholder='Enter your email' onChange={handleChange} /><br /><br />
        <input type="text" value={phone} name="phone" placeholder='Enter your phone number' onChange={handleChange} /><br /><br />
        <input type="text" value={password} name="password" placeholder='Enter your password' onChange={handleChange} /><br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Create