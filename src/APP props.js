import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

// example 상태면 a 아니면 b
// {example ? a : b} 식

function Btn({ text, changeValue }) {
  //prop는 첫번째이자 유일한 인자
  // propType은 어떤 prop을 받는지 체크 해줌
  //Btn(props) === Btn({ text, big })
  return (
    <button
      sttle={{
        backgroundColor: "tomato",
      }}
    >
      {props.banana}
    </button>
  );
}
Btn.propTyeps = {
  // propTyeps은 컴포넌트내의 prop에대한 경고문(검사기) 개념
  text: propTypes.string.isRequired, // text에 string 인자가 무조건 있어야 한다,
  fontsize: PropTypes.number.isRequired, // isRequired는 text와 fontsize는 반드시 string과 number가 존재
};
function ConfirmBtn() {
  return <button>Confirm</button>;
}

const memorizeBtn = React.memo(Btn);

function App() {
  const [value, setValue] = React.useState("Save Change");
  const changeValue = () => setValue("Revert Changes");
  return (
    <div>
      <memorizeBtn text={value} changeValue={changeValue} fontsize={18} />
      <memorizeBtn text="Continue" />
    </div>
  );
}
// text 와 changeValue 와 fontsize prop 존재
// div안에는 무엇을 넣던 prop로 인식

const root = documnet.getElemnetById("root");

export default App;
