import s from "../pages/style.module.css";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={`${s.defaultFont} ${s.divLO}`}>
        <h1>Lab Nodes/React</h1>
      </div>
    </>
  );
}
