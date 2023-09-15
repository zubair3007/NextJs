"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";







export default function SignupPage() {

    const [user, setUSer] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const signUp = async () => {
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-bold ">Sign Up</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input className="p-2 border-2 border-black rounded-md w-96" 
            id="username" type="text"
            value={user.username} 
            onChange={(e) => setUSer({...user, username: e.target.value}) }
            placeholder="username"/>

             <label htmlFor="email">email</label>
            <input className="p-2 border-2 border-black rounded-md w-96" 
            id="email" type="text"
            value={user.email}
            onChange={(e) => setUSer({...user, email: e.target.value}) }
            placeholder="email"/>

             <label htmlFor="password">password</label>
            <input className="p-2 border-2 border-black rounded-md w-96" 
            id="password" type="password"
            value={user.password} 
            onChange={(e) => setUSer({...user, password: e.target.value}) }
            placeholder="password"/>

           
        
        </div>
    )
}