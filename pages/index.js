import s from "./style.module.css";
import Header from "../components/header";

export default function Index() {
  return (
    <>
      <Header />
      <div className={`${s.container}  ${s.smallContainer}`}>
        <nav style={{ marginTop: "-30px", marginBottom: "25px" }}>
          <div className={`${s.itemMenu} ${s.nav}`}>
            <a href="/exchangeRate" className={`${s.label}  ${s.labelMedium}`}>
              USD exchange rate
            </a>
          </div>
          <div className={`${s.itemMenu} ${s.nav}`}>
            <a href="/calculator" className={`${s.label} ${s.labelMedium}`}>
              Calculator
            </a>
          </div>
          <div className={`${s.itemMenu} ${s.nav}`}>
            <a href="/status" className={`${s.label}  ${s.labelMedium}`}>
              Database Status
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
