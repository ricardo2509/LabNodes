import ExchangeRateComponent from "../../components/exchangeRate";
import Header from "../../components/header";
import s from "../style.module.css";

export default function ExchangeRate() {
  return (
    <div>
      <Header />

      <div className={s.container}>
        <div className={`${s.cb}`}>
          <div className={`${s.fl} ${s.labelMedium}`}>
            <h3
              className={`${s.label} ${s.labelMedium}`}
              style={{
                width: "200px",
                marginLeft: "10%",
                padding: "2px",
              }}
            >
              Exchange Rate
            </h3>
          </div>
          <div
            style={{
              width: "350px",
              marginLeft: "75%",
              padding: "2px",
            }}
          >
            <a
              href="./exchangeRate/addExchange"
              className={`${s.linkAsButton} ${s.linkAsButtonBlue}`}
            >
              Add
            </a>
          </div>
        </div>

        <br />
        <div
          className={`${s.cb}`}
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
            marginLeft: "75%",
            padding: "2px",
          }}
        >
          <a href="/" className={`${s.linkAsButton}`}>
            Back
          </a>
        </div>
      </div>
    </div>
  );
}
