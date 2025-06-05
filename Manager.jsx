import "./Loginform.css";
import { Link } from 'react-router-dom';

export default function Manager() {
  return (
    <>
    <div className="student-dashboard">
       <div className="sidebar">
        <h3>Manager Panel</h3> 
        <ul>
          <li><Link to="/StudentDetails" className="board">Student Profile</Link></li>
          <li><Link to="/Student" className="board">Student Portal</Link></li>
          <li><Link to="/settings" className="board">Settings</Link></li>
          <li><Link to="/logout" className="board">Logout</Link></li>
        </ul>
       </div>
        <div className="main-content">
      <h2>Welcome, Manager!</h2>
      <p>You have successfully logged in.</p>
      </div>
      </div>
    </>
  );
}
