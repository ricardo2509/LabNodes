import React, { useState, useEffect } from "react";

const ExchangeRateComponent = () => {
  const [error, setError] = useState(null);
  const [responseBody, setResponseBody] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const host =
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_HOST
            : "";

        const response = await fetch(host + "/api/v1/addExchangeRate");
        const responseBodyData = await response.json();
        setResponseBody(responseBodyData);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return <div>{responseBody}</div>;
};

export default ExchangeRateComponent;
