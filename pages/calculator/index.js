import React, { useState } from "react";
import s from "../style.module.css";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [tsePAttern, settsePAttern] = useState(false);

  // Adiciona números ou operadores ao visor
  const handleButtonClick = (value) => {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  // Limpa o visor
  const handleClear = () => {
    setDisplay("0");
  };

  // Calcula o resultado final
  const handleCalculate = () => {
    try {
      // eval calcula a expressão matemática em formato de texto

      if (display.indexOf("+") !== -1 && tsePAttern) {
        var operator = display.indexOf("+");
        var soma = display.substring(operator + 1, display.length);
        soma = (parseInt(soma) + 1).toString();
        var result = display.substring(0, operator) + "+" + soma;
        setDisplay(eval(result).toString());
      } else {
        setDisplay(eval(display).toString());
      }
    } catch (error) {
      setDisplay("Erro");
    }
  };

  const handleCheckBoxChange = (e) => {
    if (e.target.checked) {
      settsePAttern(true);
    } else {
      settsePAttern(false);
    }
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2
        style={{
          width: "350px",
          marginLeft: "10%",
          padding: "2px",
        }}
      >
        The Calculator
      </h2>

      <div
        style={{
          width: "350px",
          marginLeft: "10%",
          padding: "2px",
        }}
      >
        <input type="checkbox" onClick={(e) => handleCheckBoxChange(e)} />
        <label className={s.defaultFont} htmlFor="ste-checkbox">
          STE Mode
        </label>
      </div>

      <div
        style={{
          width: "250px",
          margin: "50px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            marginBottom: "10px",
            padding: "10px",
            fontSize: "1.5em",
            background: "#f4f4f4",
            textAlign: "right",
          }}
        >
          {display}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "5px",
          }}
        >
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
          <button onClick={() => handleButtonClick("-")}>-</button>

          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("+")}>+</button>

          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={handleCalculate} style={{ gridRow: "span 2" }}>
            =
          </button>

          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>

          <button
            onClick={() => handleButtonClick("0")}
            style={{ gridColumn: "span 2" }}
          >
            0
          </button>
          <button onClick={() => handleButtonClick(".")}>.</button>
        </div>
      </div>
      <div
        style={{
          width: "350px",
          marginLeft: "70%",
          padding: "2px",
        }}
      >
        <a href="/" className={s.linkAsButton}>
          Back
        </a>
      </div>
    </div>
  );
}

export default Calculator;
