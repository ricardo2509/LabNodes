import s from "../pages/style.module.css";

export default function Index() {
  return (
    <div>
      <h1 className={`${s.defaultFont} ${s.divLO}`}>Lab Nodes/React</h1>

      <nav>
        <div className={`${s.itemMenu} ${s.nav}`}>
          <a href="/exchangeRate" className={`${s.label}`}>
            USD exchange rate
          </a>
        </div>
        <div className={`${s.itemMenu} ${s.nav}`}>
          <a href="/calculator" className={`${s.label}`}>
            Calculator
          </a>
        </div>
        <div className={`${s.itemMenu} ${s.nav}`}>
          <a href="/status" className={`${s.label}`}>
            Database Status
          </a>
        </div>
      </nav>
    </div>
  );
}
