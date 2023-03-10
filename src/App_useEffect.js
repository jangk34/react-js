import { useState, useEffect } from "react";

// dependency는 react가 지켜볼 대상
// state를 변화시킬때 component 실행

function App_useEffect() {
  const [showing, setShowing] = useState(false);
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  //  const onClick = () => setValue((prev) => prev + 1);
  const onClick = () => setShowing((prev) => !prev);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      // 5길이 이상 검색
      console.log("i run when 'keyword' changes", keyword);
    }
  }, [keyword]); // dependency인 [ keyword] 에 해당하는 값이 변할때만 위의 로그 실행
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]); // [counter] 에 해당하는 값이 변할때만 위의 로그 실행
  useEffect(() => {
    console.log("i run whe keyword & counter change");
  }, [keyword, counter]); // [keyword] 또는 [counter] 둘중 하나 변할때 실행

  function Hello() {
    // componet가 파괴될때 useefeect를 사용
    useEffect(() => {
      console.log("hi :");
      return function () {
        console.log("by :(");
      };
    }, []);
    return <h1>Hello!!</h1>;
  }

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...."
      ></input>
      {/* <h1 className={styles.title}>Wellcome back !!!!</h1> */}
      <h1>{counter}</h1>
      {/* <button onClick={onClick}>Click me!!</button> */}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App_useEffect;
