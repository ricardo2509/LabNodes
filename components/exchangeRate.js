import React, { useState, useEffect } from "react";
import s from "../pages/style.module.css";

const ExchangeRateComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [responseBody, setResponseBody] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const host =
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_HOST
            : "";

        const response = await fetch(host + "/api/v1/exchangeRate");
        setIsLoading(false);

        const responseBodyData = await response.json();
        setResponseBody(responseBodyData);
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
      {responseBody.map((item) => (
        <div>
          <div className={`${s.fl} ${s.w100}`}>
            <label className={`${s.label} ${s.w40}`}>Exchange Rate:</label>
            <label className={`${s.label} ${s.w20}`}>{item.rate}</label>
          </div>
          <div>
            <label className={`${s.label} ${s.w40}`}>Currency</label>
            <label className={`${s.label} ${s.w40}`}>
              {item.currency_code} - {item.currency_name}
            </label>
          </div>
          <div>
            <label className={`${s.label} ${s.w40}`}>Created</label>
            <label className={`${s.label} ${s.w40}`}>
              {new Intl.DateTimeFormat("pt-BR").format(
                new Date(item.created_at),
              )}
            </label>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default ExchangeRateComponent;
