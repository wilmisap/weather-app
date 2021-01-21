import { type } from "os";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export type ForecastChartType = {
  dayHour: string;
  min: number;
  max: number;
};

interface ForecastChartProps {
  data: ForecastChartType[];
}

const ForecastChart: React.FC<ForecastChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer height={250} width={"95%"}>
      <LineChart
        margin={{ top: 20, bottom: 20, left: 5, right: 5 }}
        data={data}
      >
        <XAxis dataKey="dayHour"></XAxis>
        <YAxis></YAxis>
        <CartesianGrid></CartesianGrid>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Line type="monotone" dataKey="max" stroke="#ff0000"></Line>
        <Line type="monotone" dataKey="min" stroke="#0000ff"></Line>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ForecastChart;
