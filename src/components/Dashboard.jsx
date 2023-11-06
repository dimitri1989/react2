import { useState } from "react";
import {Link} from "react-router-dom";
function Dashboard (){
  console.log(localStorage.getItem('meil'))
  console.log(localStorage.getItem('password'))
      function removeLocalstorage (){
        localStorage.removeItem("meil")
        localStorage.removeItem("password")
        window.location.href = "/";
      }
    return(
        <div className="w-50 mt-5">
            <h1>გამარჯობა {localStorage.getItem('meil')}</h1>
           
            <button type="button" onClick={removeLocalstorage} className="btn2">გასვლა</button>
        </div>
        
    )
}

export default Dashboard