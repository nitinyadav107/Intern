import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import {jwtDecode} from "jwt-decode";
export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  let token = localStorage.getItem("token");
  if (token) {
    token = jwtDecode(token);
    console.log(token); 
  }

  const navigate = useNavigate();

  const logout = async () => {

    localStorage.removeItem("token");
    navigate('/');
    toast.success("Logout successful");

  }

  return (
    <AuthContext.Provider value={{ token, logout, navigate }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext);

