"use client"; // This is a client component 👈🏽
import React, { useState } from "react"


function City({country,state,onCitySelected}){
    const [city,setCity] = useState("");
    const handleCitySelect = (e) =>{
    let citySelected = e.target.value;
    setCity(citySelected);
    onCitySelected(citySelected);
  }
    console.log('State param', country,state, city);
    
    const citiesObj = {
        india:{
            tn : [
                { value: "Chennai"  },
                { value: "Trichy" }, 
            ],
            kl :[
                { value: "Trivandrum"  },
                { value: "Cochin" },
            ],

        },
        us:{
            florida: [
                { value: "Miami"},
                { value: "Naples" }, 
            ],
            texas: [
                { value: "Austin" },
                { value: "Houston" },
            ],
        }  
        
    };

    const citiesChoosen = citiesObj[country]?.[state]
    console.log('citiesChoosen',citiesChoosen);
    
    return (
    <>
   
    <select name="city" id="city" value={city} onChange={handleCitySelect}>
    <option value="select" > </option>

    {
        citiesChoosen.map((city)=>(
            <option key = {city.value} value={city.value}> {city.value}</option>
        ))
    }

   
    </select>
    </>  
)}
export default City;

// const countryStates = {
//     india: [
//       { value: "Tamil Nadu", value: "tn" },
//       { value: "Kerala", value: "kl" }
//     ],
//     us: [
//       { value: "Florida", value: "florida" },
//       { value: "Texas", value: "texas" }
//     ]
//   };