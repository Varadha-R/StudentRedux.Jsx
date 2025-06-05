import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginform from "./Project/Loginform";
import Student from "./Project/Student"; 
import Manager from "./Project/Manager";
import StudentDetails from "./Project/StudentDetails";
import { StudentProvider } from "./Project/StudentContext";
function App() {
  return (
    <StudentProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Loginform/>} />
        <Route path="/Student" element={<Student />} />
        <Route path="/Manager" element={<Manager/>}/>
        <Route path="/StudentDetails"element={<StudentDetails/>}/>
      </Routes>
    </Router>
    </StudentProvider>
  );
}

export default App;
