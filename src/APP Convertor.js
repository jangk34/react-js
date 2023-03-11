import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

// example 상태면 a 아니면 b
// {example ? a : b} 식

function App() {
  const [index, setIndex] = React.useState(0); // 첫번째는 item, 두번째는 modifier
  const onSelect = (event) => setIndex(event.target.value);
  return (
    <div>
      <h1>Super Convertor</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your unit</option>
        <option value="0">test1</option>
        <option value="1">test2</option>
      </select>
      <hr />
      {index === "xx" ? "please select your unit man!!" : null}
      {index === "0" ? <Example /> : null}
      {index === "" ? <Example2 /> : null}
    </div>
  );
}

const root = documnet.getElemnetById("root");

export default App;
