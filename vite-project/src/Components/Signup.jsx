import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [loading, setLoading] = useState(false);


        const userDetails = async()=>{

            const baseUrl = 'http://localhost:4000'
            try {
              setLoading(true);
                const res = await axios.post(`${baseUrl}/user/signup`, {username, email, password});

                if(res.data.message === "User Registered Successfully"){
                  toast.success("User Registered Successfully");
                }
                else if(res.data.message === "User Already Registered"){
                  toast.error("User Already Registered");
                }
                else if(res.data.message === "All credentials required"){
                  toast.warning("All credentials required");
                }
                else{
                  toast.error("Some error while  registering this user");
                }


                
            } catch (error) {
              setLoading(false);
                console.log(error);
                toast.error(error.message);
                
            }
            finally{
              setLoading(false);
            }
        };

        const handleClick = ()=> {
          userDetails();
        }

          

  return (
    <>
    <div className='Signup mt-5' style={{minHeight: '100vh'}}>
    <ToastContainer/>
      
      <form className='form'>
      <div className="row mb-3">
    <label className="col-sm-2 col-form-label">Username</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
    </div>
  </div>
  <div className="row mb-3">
    <label  className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control"  value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    </div>
  </div>
  <div className="row mb-3">
    <label  className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control"  value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    </div>
  </div>

 
</form>
  <button type="submit" className="btn btn-success mt-4" onClick={handleClick}>
    {loading ? "Signing in..." : "Sign in"}
    </button>
    </div>
    </>
  )
}

export default Signup
