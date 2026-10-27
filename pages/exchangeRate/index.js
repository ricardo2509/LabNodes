import ExchangeRateComponent from "../../components/exchangeRate";
import s from "../style.module.css";

export default function ExchangeRate() {
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
        Exchange Rate
      </h2>
      <div
        style={{
          width: "350px",
          marginLeft: "10%",
          padding: "2px",
        }}
      >
        <ExchangeRateComponent />
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
