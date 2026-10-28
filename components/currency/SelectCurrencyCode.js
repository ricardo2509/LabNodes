import React, { useState, useEffect } from "react";

const SelectCurrencyCode = ({ value, onChange }) => {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const host =
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_HOST
            : "";

        const response = await fetch(host + "/api/v1/currency");
        const responseBodyData = await response.json();
        const list = [];
        responseBodyData.forEach((curr) => {
          list.push({ key: curr.currency_code, value: curr.id });
        });

        setItems([{ key: "select a currency", value: "" }, ...list]);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {items.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.key}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectCurrencyCode;
