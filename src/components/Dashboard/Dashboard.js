import React, { useEffect, useState } from "react";
import { Area, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("productData.json")
      .then((res) => res.json())
      .then((productData) => setData(productData));
  }, []);
  return (
    <div className="container">
      <div className="my-5">
        <h1 className="text-primary ms-5 ps-2">Month wise sell</h1>
        <LineChart width={700} height={400} data={data}>
          <Line dataKey={"sell"}></Line>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <YAxis></YAxis>
          <XAxis dataKey={"month"}></XAxis>
        </LineChart>
      </div>
      <div className="my-5">
        <h1 className="text-primary ms-5 ps-2">Investment vs revenue </h1>
        <LineChart width={700} height={400} data={data}>
        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <YAxis></YAxis>
          <XAxis dataKey={"month"}></XAxis>
        </LineChart>
      </div>
    </div>
  );
};

export default Dashboard;
