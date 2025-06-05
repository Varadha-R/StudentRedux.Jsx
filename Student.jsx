import React, { useContext } from "react";
import { StudentContext } from './StudentContext';
import { Link } from 'react-router-dom';
import "./Loginform.css";
export default function Student() {
    const student = {
    name: "Prince",
    address: "123 Main Street, Velacherry",
    mark: 85
  };
  const { result } = useContext(StudentContext);
 
  return (
    <div className="student-dashboard">
      <div className="sidebar">
        <h3>Student Panel</h3>    
<ul>
  <li><Link to="/settings" className="board">Settings</Link></li>
  <li><Link to="/logout" className="board">Logout</Link></li>
</ul>
      </div>
      <div className="main-content">
        <h2>Welcome, Student!</h2>
        <p>You have successfully logged in.</p>
        <div className="sub-content">
           <h2>Student Information</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>Mark:</strong> {student.mark}</p>
      {
        result ? (
          <p>
            <strong>Result:</strong>
            <span className={result==="Pass"? "pass" : "fail"}>{result}</span>
          </p>
        ):(
          <p><em>Result not set yet.</em></p>
        )
      }
          </div>
        
      </div>
    </div>
  );
}

