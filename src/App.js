import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Movie from "./routes/Detail";
//import Movie from "./components/Movie";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/hello" element={<h1>"HELLO !!!"</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
