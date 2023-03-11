//import Button from "./Button";
//import styles from "./App.module.css";
import { useState, useEffect, useSyncExternalStore } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])   // 기본 coins 값은 0
  useEffect(() => {
    fetch("https://api.coinpaprika.com/asdv1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loding.....</strong> 
      ) : (
      <select>
        {coins.map((coin) => (sd
        <option>
          {coin.name} ({coin.symbole}) : ${coin.quotes.USD.price}
        </option>
        ))}
        {/* map은 element에 key를 줌 */}
      </select>
      )}
    </div>
  )
}

export default App;