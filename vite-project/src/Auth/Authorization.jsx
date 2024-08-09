import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Authorization = () => {

        const navigate = useNavigate();

        const checkAuth = async()=>{
            try {

                const token = localStorage.getItem("token");
                if(!token){
                    navigate('/login');
                    return false;
                }
                        else{
                            const baseUrl = 'http://localhost:4000';
                            const res = await axios.get(`${baseUrl}/token/verify/${token}`);

                            if(res.data.message === "Unauthorized user"){
                                navigate('/login');
                                toast.error('You are not authorized to view this page!');
                                return false;
                            }
                            else if(res.data.message === "verified"){
                                const id = res.data.decode._id;
                                localStorage.setItem("id", id);
                                toast.success("User Verified successfully");
                                return true;

                            }
                        }
                
            } catch (error) {
                console.log(error);
                navigate('/login');
                toast.error(error.message);
                return false;
                
            }
        }
            return checkAuth;

            
};

export default Authorization;
