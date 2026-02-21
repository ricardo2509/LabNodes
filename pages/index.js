import Status from "../components/status";
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
    <>
      <h1>Lab Nodes/React</h1>
      <h2>Database Info - Status component</h2>
      <Status />
      <br />
      <br />
      <h2>Database Info - API Status</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
export default Index;
