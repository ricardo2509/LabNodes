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
      <div className={`${s.container}  ${s.smallContainer}`}>
        <div>
          <h3
            className={`${s.label} ${s.labelMedium}`}
            style={{
              marginLeft: "10%",
              padding: "2px",
            }}
          >
            Database Info - API Status
          </h3>
          <Status />
        </div>
        <br />
        <br />
        <div>
          <h3
            className={`${s.label} ${s.labelMedium}`}
            style={{
              marginLeft: "10%",
              padding: "2px",
              overflow: "hidden",
            }}
          >
            Database Info - API Status
          </h3>
          <div style={{ overflow: "hidden" }}>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
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
