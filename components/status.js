import React, { useState, useEffect } from "react";
import s from "../pages/style.module.css";
import useSwr from "swr";

async function getAPI(url) {
  const response = await fetch(url);
  const responseBody = await response.json();
  return responseBody;
}

const Status = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dbVersion, setDbVersion] = useState("1");
  const [maxConn, setMaxConn] = useState(1);
  const [openConn, setOpenConn] = useState(1);
  const [updated_at_is, setUpdated_at_is] = useState(null);

  const { data, errorData } = useSwr("/api/v1/status", getAPI, {
    refreshInterval: 10000,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const host =
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_HOST
            : "";

        const response = await fetch(host + "/api/v1/status");
        setIsLoading(false);

        const responseBody = await response.json();
        setUpdated_at_is(new Date(responseBody.updated_at).toISOString());
        const dbVersion = responseBody.dependencies.database.version;
        setDbVersion(responseBody.dependencies.database.version);
        setMaxConn(responseBody.dependencies.database.max_connections);
        setOpenConn(responseBody.dependencies.database.open_connections);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <div className={`${s.fl} ${s.w100}`}>
        <label className={`${s.label} ${s.w40}`}>Version DB:</label>
        <label className={`${s.label} ${s.w20}`}>{dbVersion}</label>
      </div>
      <div>
        <label className={`${s.label} ${s.w40}`}>Max Connections: </label>
        <label className={`${s.label} ${s.w40}`}>{maxConn}</label>
      </div>
      <div>
        <label className={`${s.label} ${s.w40}`}>Open Connections</label>
        <label className={`${s.label} ${s.w40}`}>{openConn}</label>
      </div>
      <div>
        <label className={`${s.label} ${s.w40}`}>Last update</label>
        <label className={`${s.label} ${s.w40}`}>{updated_at_is}</label>
      </div>
      <br />
      <div>
        <label className={`${s.label} ${s.w40}`}>Last update realtime</label>
        <label className={`${s.label} ${s.w40}`}>{data.updated_at}</label>
      </div>
    </div>
  );
};

export default Status;
