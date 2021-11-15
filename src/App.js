import React from "react";
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Create from "./component/Create";
import Home from "./component/Home";
import Info from "./component/info";
import NavBar from "./component/NavBar";
import './style/style.css'
import useFetch from "./useFetch";
function App() {
  const {blog , loading , error} = useFetch("http://localhost:8000/blog")
  console.log(blog);
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="conetent">
          <Routes>
            <Route exact path="/" element={blog && <Home blog={blog} />} ></Route>
            <Route path="/info" element={<Info />}></Route>
            <Route path="/create" element={<Create />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
