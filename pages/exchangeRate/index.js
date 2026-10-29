import ExchangeRateComponent from "../../components/exchangeRate";
import Header from "../../components/header";
import s from "../style.module.css";

export default function ExchangeRate() {
  return (
    <div>
      <Header />
      <div className={`${s.container}  ${s.smallContainer}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h3 className={`${s.label} ${s.labelMedium}`}>Exchange Rate</h3>
          </div>
          <div>
            <a
              href="./exchangeRate/addExchange"
              className={`${s.linkAsButton} ${s.linkAsButtonBlue}`}
            >
              Add
            </a>
          </div>
        </div>
        <div style={{ width: "90%" }}>
          <ExchangeRateComponent />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "right",
          }}
        >
          <div></div>
          <a href="/" className={`${s.linkAsButton}`}>
            Back
          </a>
        </div>
      </div>
    </div>
  );
}
