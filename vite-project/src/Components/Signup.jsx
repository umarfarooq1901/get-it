import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const userDetails = async () => {
        const baseUrl = 'http://localhost:4000';
        try {
            setLoading(true);
            const res = await axios.post(`${baseUrl}/user/signup`, { username, email, password });

            if (res.data.message === "User Registered Successfully") {
                toast.success("User Registered Successfully");
                setTimeout(() => {
                    navigate('/login');
                }, 2000); // After 2 sec it will navigate to login page
            } else if (res.data.message === "User Already Registered") {
                toast.error("User Already Registered");
            } else if (res.data.message === "All credentials required") {
                toast.warning("All credentials required");
            } else {
                toast.error("Some error while registering this user");
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleClick = (e) => {
        e.preventDefault(); // Prevent default form submission
        userDetails();
    };

    return (
        <>
            <div className='Signup mt-5 d-flex flex-column align-items-center' style={{ minHeight: '100vh' }}>
                <ToastContainer />
                <h1 className='text-center mb-5'>Register with us</h1>
                <form className='form w-75'>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
                <button type="submit" className="btn btn-success mt-4 w-25" onClick={handleClick}>
                    {loading ? "Signing up..." : "Sign Up"}
                </button>
            </div>
        </>
    );
}

export default Signup;
