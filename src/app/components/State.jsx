"use client"; // This is a client component 👈🏽
import React, { useState } from "react"


function State({country,onStateSelected}){
  
  const [state,setState] = useState("");
  
  const handleStateSelect = (e) =>{
    let stateSelected = e.target.value;
    setState(stateSelected);
    onStateSelected(stateSelected)
  }
    console.log('country param', country,state);

    const countryStates = {
        india: [
          { label: "Tamil Nadu", value: "tn" },
          { label: "Kerala", value: "kl" }
        ],
        us: [
          { label: "Florida", value: "florida" },
          { label: "Texas", value: "texas" }
        ]
      };

    const choosenStates = countryStates[country] || [];

    console.log('choosenStates',choosenStates);
    
    return (
    <>
   
    {/* <select name="state" id="state" value={state} onChange={(e)=>setState(e.target.value)}> */}
    <select name="state" id="state" value={state} onChange={handleStateSelect}>
      <option value="select" > </option>

      {
          choosenStates.map((state)=>(
              <option key = {state.value} value={state.value}> {state.label}</option>
          ))
      }

   
      </select>
    {/*  */}
    </>  
)}
export default State;

// {statesForCountry.map((state) => (
//     <option key={state.value} value={state.value}>
//       {state.label}
//     </option>
//   ))}

{/* {country == "india" ? <>
    <option value="tn">TN</option>
    <option value="kl">Kerala</option>
</> : <>
<option value="florida">Florida</option>
<option value="texas">Texas</option>

</>} */}