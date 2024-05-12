import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import "./PieChartComponent.css";
const PieChartComponent = ({ increased, products }) => {
  const data = [
    { name: "Products", value: products },
    { name: "Increased", value: increased },
  ];

  const COLORS = ["#3d5a80", "#FFD700"];

  return (
    <div>
      <h3 className="pie-block">Pie Chart</h3>
      <PieChart className="pie-block" width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, value }) => `${name}: ${value}`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`Cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
