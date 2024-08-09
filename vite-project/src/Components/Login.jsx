import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [loading, setLoading] = useState(false);
      const navigate = useNavigate();


      const userLogin = async ()=>{
        try {
          setLoading(true)
           const baseUrl = 'http://localhost:4000';
       

           const res = await axios.post(`${baseUrl}/user/login`, {email, password});

           if(res.data.message === 'Logged in Successfully!'){
            toast.success("Logged in Successfully!");
            const {token} = res.data;
            localStorage.setItem("token", token);
            navigate('/')
           }

           else if(res.data.message === 'User Not Found'){
            toast.warning(res.data.message);
           }
           else if(res.data.message === 'Incorrect Password!'){
             toast.warning(res.data.message);
           }
           else{
            toast.error(res.data.message)
           }
          
        } catch (error) {
          setLoading(false);
          console.log(error);
          toast.error(error.message)
          
        }

        finally{
          setLoading(false);
        }
      };



        const handleLogin = ()=>{
          userLogin();
        }

  return (
    <div className='Login mt-5' style={{minHeight: '100vh'}}>

      <ToastContainer/>
       <form className='Login-form'>
   
  <div className="row mb-3">
    <label className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
  </div>
  <div className="row mb-3">
    <label className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
  </div>

 

</form>
<button type="submit" className="btn btn-success mt-4" onClick={handleLogin}>
    {loading ? "Logging in..." : "Login"}
  </button>
    </div>
  )
}

export default Login
