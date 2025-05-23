import axios from "axios";
import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Mandan from "./Mandan";

const Main = styled.div`
  background-color: cyan;
  .red {
    background-color: green;
  }
  .mandan {
    backdrop-filter: calc();
    background-color: darkblue;
    color: aqua;
  }
  h1 {
    text-align: center;
  }
  .submit {
    background-color: darkcyan;
  }
`;

function App() {
  console.log("kartthootohik");

  const [products, setproduct] = useState([]);

  function abatton() {
    axios.get("https://fakestoreapi.com/products").then((kart) => {
      setproduct(kart.data);
    });
  }

  const [input, setInput] = useState("");

  return (
    <Main>
      TeStInG If ThIs WoRkS !
      <button className="red" onClick={abatton}>
        clickme
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("ഇപ്പൊ ശെരിയാക്കി തരാം (●'◡'●)");
        }}
      >
        <input
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Any problems ?   "
        />
        <button type="submit" className="submit">
          submit
        </button>
      </form>
      {products.length !== 0 &&
        products.map((e) => {
          return (
            <>
              <div>
                <h1>name is {e.title}</h1>
                <h1>price is {Math.floor(Math.random() * 1000)} </h1>
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    margin: "0px auto",
                  }}
                  src={e.image}
                />
                <h1>stock : {Math.floor(Math.random() * 100)}</h1>
              </div>
              <br></br>
            </>
          );
        })}
    </Main>
  );
}

export default App;
