import s from "../style.module.css";
import React, { useState } from "react";
import Header from "../../components/header";
import SelectCurrencyCode from "../../components/currency/SelectCurrencyCode";

export default function ExchangeRate() {
  const [valor, setValor] = useState("");
  const [currencySelected, setCurrencySelected] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const inputVal = e.target.value;

    if (inputVal === "") {
      setValor("");
      return;
    }
    const regexValido = /^\d*\.?\d*$/;

    if (regexValido.test(inputVal)) {
      setValor(inputVal);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const exchangeData = { rate: valor, currency_id: currencySelected };
      const response = await fetch(`/api/v1/exchangeRate/addExchangeRate`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exchangeData),
      });

      if (response.status == "200") {
        setMessage("Added suceffully");
        setError("");
      } else {
        setError("An error has occurred");
        setMessage("");
      }
    } catch (err) {
      setError("An error has occurred");
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Header />

        <div className={s.smallContainer}>
          <div className={`${s.divLO}`}>
            <h3 className={`${s.label} ${s.labelMedium}`}>Add Exchange Rate</h3>
          </div>

          <div className={`${s.label} ${s.divLO} ${s.formGroup}`}>
            <label>Exchange Rate</label>
            <input
              style={{ width: "80px" }}
              maxLength={6}
              name="exchangeRate"
              type="text"
              inputMode="decimal"
              value={valor}
              onChange={handleChange}
              placeholder="0.00"
            ></input>
          </div>

          <div className={`${s.label} ${s.divLO}`}>
            <label>Currency Code</label>
            <SelectCurrencyCode
              value={currencySelected}
              onChange={setCurrencySelected}
            />
          </div>

          <div
            style={{
              width: "250px",
              marginLeft: "50%",
              padding: "2px",
            }}
          >
            <button
              className={`${s.linkAsButton} ${s.linkAsButtonBlue} ${s.m10}`}
              type="submit"
            >
              Ok
            </button>
            <a href="./" className={`${s.linkAsButton} ${s.m10}`}>
              Back
            </a>
          </div>
          <label className={`${s.successMessage}`}>{message}</label>
          <label className={`${s.errorMessage}`}>{error}</label>
        </div>
      </div>
    </form>
  );
}
