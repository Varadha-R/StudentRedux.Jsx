import React, { useContext } from "react";
import { StudentContext } from './StudentContext';
import { Link } from 'react-router-dom';
import "./Loginform.css";
export default function StudentDetails(){
     const student = {
    name: "Prince",
    address: "123 Main Street, Velacherry",
    mark: 85,
  };
   const {result,setResult}=useContext(StudentContext);


    return(
        <>
         <div className="student-dashboard">
       <div className="sidebar">
        <h3>Manager Panel</h3> 
        <ul>
          <li><Link to="/StudentDetails" className="board">Student Profile</Link></li>
          <li><Link to="/settings" className="board">Settings</Link></li>
          <li><Link to="/logout" className="board">Logout</Link></li>
        </ul>
       </div>
        <div className="main-content">
       <h2>Student Information</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>Mark:</strong> {student.mark}</p> 
       <div style={{ marginTop: "10px" }}>
        <button onClick={()=>setResult("Pass")}>Pass</button>
        <button onClick={()=>setResult("Fail")} style={{ marginLeft: "10px" }}>Fail</button>
       </div>
       {
        result&& (
            <p>
                <strong>Result:</strong>
                <span className={result === "Pass" ? "pass" : "fail"}>{result}</span>
            </p>
        )
       }
      </div>
      </div>
        
        
        </>
    )
}
