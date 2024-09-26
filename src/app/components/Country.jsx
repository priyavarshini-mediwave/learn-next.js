"use client"; // This is a client component 👈🏽
import React, { useState } from "react"
import State from "./State";
import City from "./City";

function Country(){
    const [country,setCountry] = useState("");
    const [stateChoosen,setstateChoosen] = useState("");
    const [cityChoosen,setCityChoosen] = useState("");

    console.log('country',country);
    
    const handleNavigate =() =>{
        location.href='/about';
    }
    const handleCountrySelect =(e)=>{
        let countrychoosen = e.target.value;
        setCountry(countrychoosen);
        setstateChoosen("");
        setCityChoosen("")
    }

    const onsetState = (state) =>{
        console.log(state,"state received");
        setstateChoosen(state);
        setCityChoosen("");
    };

    const onsetCity = (city) =>{
        console.log(city,"city received");
        setCityChoosen(city);
    }
    console.log("whole",country,stateChoosen,cityChoosen);

    const nameCode ={
        india : "India",
        us : "USA",
        tn : "Tamil Nadu",
        kl : "Kerala",
        florida: "Florida",
        texas : "Texas"
        }
    const resultName = (namegiven) => nameCode[namegiven]
    return (
        <>
        <label htmlFor="country">Choose a Country: 👈🏽</label>

        <select name="country" id="country" value={country} onChange={handleCountrySelect}>
            <option value="select" > </option>
            <option value="india">India</option>
            <option value="us">USA</option>
        </select>

<br />

        {
            country ?
            <>
            <State country={country} onStateSelected={onsetState}/>
            </> 
            : <></>

        }
<br />        
         {
            country && stateChoosen ? <>
            <City country={country} state={stateChoosen} onCitySelected={onsetCity}/>
             </> : <> </>
        } 
        {  country && stateChoosen && cityChoosen ? <> 
            <p>The City Choosen is  {resultName(country)}  , {resultName(stateChoosen)} , {cityChoosen}</p> 
        </> : <> </>
        } 
              <button onClick={handleNavigate}>Navigate</button>
  
        </>
    )
};

export default Country;
