'use client'
import React from "react";
import { useRouter } from "next/navigation";
function About(){
    const router = useRouter()
    return(
        <>
        <h1>About</h1>
        <button onClick={()=> router.push('contact')}>climl mee</button>
        </>
    )
} 
export default About;