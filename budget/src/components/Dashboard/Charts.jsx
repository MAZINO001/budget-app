/* eslint-disable no-unused-vars */
import ReactApexChart from "react-apexcharts";
export function RadarApexChart() {
  const state = {
    series: [
      {
        name: "Series 1",
        data: [20, 100, 40, 30, 50, 80, 33],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        radar: {
          size: 125,
          polygons: {
            strokeColors: "#000",
            fill: {
              // colors: ["#fff", "#fff"],
            },
          },
        },
      },
      title: {
        text: "Your Chart Title", // Set your chart title
        style: {
          color: "#000", // Black color for the title
        },
      },
      colors: ["#FF4560"],
      markers: {
        size: 3,
        colors: ["#fff"],
        strokeColor: "#FF4560",
        strokeWidth: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
      xaxis: {
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: function (val, i) {
            if (i % 2 === 0) {
              return val;
            } else {
              return "";
            }
          },
        },
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radar"
          className="bg-gray-700 rounded-md"
          height={277}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

//second line chart

import React from "react";
export function LineApexChart() {
  const [chartData, setChartData] = React.useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      title: {
        text: "Your Chart Title", // Set your chart title
        style: {
          color: "#000", // Black color for the title
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={277}
          className="bg-gray-700"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
