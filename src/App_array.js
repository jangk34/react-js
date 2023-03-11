//import Button from "./Button";
//import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefalut();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); // [] = toDo, ...[] 와 같이 현재 State함수를 보냄, ([hello] => [newhello, ...[bye bye, hello]])
    setToDo(""); //저장한 DATA
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* // map()은 예전 array 변경  */}
    </div>
  );
}

export default App;
