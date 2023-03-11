import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Movie from "./routes/Detail";
//import Movie from "./components/Movie";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
<<<<<<< HEAD
import { React } from "react";
=======
import React from "react";
>>>>>>> ca6dcf2673ddd894c05bb2478ff7bc6a02659a24

function App() {
  return (
    <Router>
<<<<<<< HEAD
      {/* Route를 찾는 역할인 Routes */}
      <Routes>
        {/* Home */}
        <Route basename={process.env.PUBLIC_URL + "/"}>
          <Home />
        </Route>
        {/* Movie */}
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/hello" element={<h1>"HELLO !!!"</h1>} />
=======
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/hello" element={<h1>"HELLO !!!"</h1>} />
        <Route basename={`${process.env.PUBLIC_URL}/`} element={Home} />
>>>>>>> ca6dcf2673ddd894c05bb2478ff7bc6a02659a24
      </Routes>
    </Router>
  );
}

export default App;
