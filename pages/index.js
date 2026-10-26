import s from "../pages/style.module.css";

export default function Index() {
  return (
    <div>
      <h1 className={`${s.defaultFont} ${s.divLO}`}>Lab Nodes/React</h1>

      <nav>
        <div className={`${s.itemMenu} ${s.nav}`}>
          <a href="/status" className={`${s.label}`}>
            Status
          </a>
        </div>
        <div className={`${s.itemMenu} ${s.nav}`}>
          <a href="/calculator" className={`${s.label}`}>
            Calculator
          </a>
        </div>
      </nav>
    </div>
  );
}
