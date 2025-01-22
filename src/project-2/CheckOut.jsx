import React,{useState} from 'react'

const CheckOut = () => {
  let [state,setState]=useState({
    name:"",
    password:"",
    address:""
  })
  let [orderStatus,setOrderStatus]=useState(false)
  let {name,password,address}=state
  let handleChange=(a)=>{
      let {name,value}=a.target
      setState({...state,[name]:value})
  }
  let handlePlaceOrder=()=>{
    if(state.name!==""&&state.password!==""&&state.address!=="")
    {
      setOrderStatus(true)
    }
  }
  let handleSubmit=(a)=>{
    if(state.name!==""&&state.password!==""&&state.address!=="")
    {
      a.preventDefault()
      console.log(state);
    }
}
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your name' value={name} name='name' onChange={handleChange} required/>
            <br /><br />
            <input type="text" placeholder='Enter your password' value={password} name='password' onChange={handleChange} required/>
            <br /><br />
            <input type="text" placeholder='Enter your address' value={address} name='address' onChange={handleChange} required/>
            <br /><br />
            <button onClick={handlePlaceOrder}>Place Order</button>
            <input type="reset" />
            {orderStatus===false?"":(<h1>Your Order Has Been Placed Successfully...!!!</h1>)}
        </form>
    </div>
  )
}

export default CheckOut