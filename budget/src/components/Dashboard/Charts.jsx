/* eslint-disable no-unused-vars */
import React from "react";
import {
  LineChart,
  Line,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Tooltip,
  Legend,
  Bar,
  Rectangle,
} from "recharts";

const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data2 = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const data3 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export function ChartLines(interval) {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <LineChart data={data1} margin={{ right: 25, top: 10 }}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" interval={interval} />
        <YAxis interval={interval} />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d"  strokeWidth={2}/>
      </LineChart>
    </ResponsiveContainer>
  );
}

export function ChartRadar() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
        <PolarGrid  />
        <PolarAngleAxis dataKey="subject" />
        {/* <PolarRadiusAxis /> */}
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
export function ChartBars() {
  return (
  <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data3}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#0000ff" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#00ff00" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          <Bar dataKey="amt" fill="#ff0000" activeBar={<Rectangle fill="red" stroke="red" />} />
        </BarChart>
      </ResponsiveContainer>
  );
}
