import Status from "../../components/status";
import Header from "../../components/header";
import s from "../style.module.css";
import useSwr from "swr";

async function getAPI(url) {
  const response = await fetch(url);
  const responseBody = await response.json();
  return responseBody;
}

function Index() {
  const { data, error } = useSwr("/api/v1/status", getAPI, {
    refreshInterval: 10000,
  });

  return (
    <div>
      <Header />
      <div className={s.container}>
        <h3
          className={`${s.label} ${s.labelMedium}`}
          style={{
            width: "300px",
            marginLeft: "10%",
            padding: "2px",
          }}
        >
          Database Info - Status component
        </h3>
        <Status />
        <br />
        <br />
        <h3
          className={`${s.label} ${s.labelMedium}`}
          style={{
            width: "300px",
            marginLeft: "10%",
            padding: "2px",
          }}
        >
          Database Info - API Status
        </h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <div
          style={{
            width: "350px",
            marginLeft: "75%",
            padding: "2px",
          }}
        >
          <a href="/" className={s.linkAsButton}>
            Back
          </a>
        </div>
      </div>
    </div>
  );
}
export default Index;
