import { useState } from "react"
import { useCustomerLogin } from "../hooks/useCustomerLogin"
import { BrowserRouter as Router, Route, Routes , Navigate } from "react-router-dom";
import CustomerNavbar from "../components/common/CustomerNavbar";
import { useAuthContext } from "../hooks/useAuthContext";  
const CustomerLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {login, error, isLoading} = useCustomerLogin()
	const { customer } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }



  return (

    <form  onSubmit={handleSubmit} >
<p></p>
<br/>
<br/>
<br/>
<br/>
<br/>
<div className="h-10 d-flex align-items-center justify-content-center">
<div class="shadow p-3 mb-5 bg-body rounded">   
  <div class="card text-white bg-dark" style={{maxWidth: "20"}} >
<fieldset style={{marginBlock: "10"}} >
<div class="card-header text-center ">Customer Login</div>
<div class="card-body">
    <div className="w-150 p-3"> 
    <div className="form-group mt-2 ">  
      <label className="form-label mt-3">Email address</label>
      <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Email"/>
    </div>
    <div className="form-group">
      <label className="form-label mt-3">Password</label>
      <input type="password" className="form-control"    onChange={(e) => setPassword(e.target.value)}   value={password}      placeholder="Password"/>
    </div>
  </div>
<div class="text-center">
    <button disabled={isLoading}  class="btn btn-light active">Login</button>
    {error && <div  style={{textAlign: 'center'}}  className="card text-dark bg-warning">{error}</div>}
    </div>
  </div>
  </fieldset>
  </div>
  </div>
  </div>
</form>
  )
}

export default CustomerLogin