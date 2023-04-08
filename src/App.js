import axios from "axios";
import { useState } from "react";
import "./App.css";
function App() {
  console.log("kartthootohik");

  const [products, setproduct] = useState([]);

  function karthikclick() {
    axios.get("https://fakestoreapi.com/products").then((kart) => {
      setproduct(kart.data);
    });
  }

  return (
    <div className="App">
      mandan njan vasu gundoos thooti
      <button style={{ backgroundColor: "red" }} onClick={karthikclick}>
        clkartcick
      </button>
      {products.length != 0 &&
        products.map((e) => {
          return (
            <>
              <div>
                <h1>name is {e.title}</h1>
                <img
                  style={{ height: "100px", width: "100px" }}
                  src={e.image}
                />
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </>
          );
        })}
    </div>
  );
}

export default App;
