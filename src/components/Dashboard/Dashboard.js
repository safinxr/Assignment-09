import React, { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

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
        <LineChart width={700} height={400} data={data} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <Line dataKey={"sell"}></Line>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <YAxis></YAxis>
          <XAxis dataKey={"month"}></XAxis>
          <Tooltip />
        </LineChart>
      </div>
      <div className="my-5">
        <h1 className="text-primary ms-5 ps-2">Investment vs revenue </h1>
        <AreaChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </div>
    </div>  
  );
};

export default Dashboard;
