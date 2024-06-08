import "./App.css";
import React,{ useState } from "react";
import Axios from "axios";
import { Route, Routes, Link } from "react-router-dom"
import Advisor from "./Components/Advisor";
import Student from "./Components/Student";
import Instructor from "./Components/Instructor";
import Takes from "./Components/Takes";
import Teaches from "./Components/Teaches";
import Course from "./Components/Course";


function App() {


  return (
    <div className="App">

      <aside>
      <ul class="tree-view" style={{width:180}}>
        <li>University8e
          <ul>
            <li><Link to="/advisor"  > Advisor </Link></li>
            <li><Link to="/student"> Student </Link></li>
            <li><Link to="/instructor"> Instructor </Link></li>
            <li><Link to="/takes"> Takes </Link></li>
            <li><Link to="/teaches"> Teaches </Link></li>
            <li><Link to="/course"> Course </Link></li>
          </ul>
        </li>
      </ul>
      
      </aside>

      <main>
      <Routes>
        <Route path="/advisor" element={<Advisor/>}></Route>
        <Route path="/student" element={<Student/>}></Route>
        <Route path="/instructor" element={<Instructor/>}></Route>
        <Route path="/takes" element={<Takes/>}></Route>
        <Route path="/teaches" element={<Teaches/>}></Route>
        <Route path="/course" element={<Course/>}></Route>
      </Routes>

        
      
      
      
      </main>
      

      
      
    </div>

    

  );
}

export default App;
