/********************************** custome code************************************/
const radardata = [20, 100, 40, 30, 50];
const redarCategories = [
  "housing",
  "utilities",
  "transportation",
  "subscriptions",
  "bills",
  "groceries",
];
//area chart
const areaData1 = [10, 20, 31, 40, 28, 51, 80, 47, 42, 109, 100, 88];
const areaData2 = [15, 25, 30, 45, 55, 70, 85, 95, 60, 75, 85, 95];
const areaCategories = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
/********************************** premdae charts************************************/
/* eslint-disable no-unused-vars */
import ReactApexChart from "react-apexcharts";
export function RadarApexChart() {
  const state = {
    series: [
      {
        name: "Series 1",
        data: radardata,
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
          size: 115,
          polygons: {
            strokeColors: "#000",
            fill: {
              // colors: ["#fff", "#fff"],
            },
          },
        },
      },
      title: {
        text: "Your Most spenging",
        style: {
          color: "#fff",
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
        categories: redarCategories,
      },
      yaxis: {
        tickAmount: 5,
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
        data: areaData1,
      },
      {
        name: "series2",
        data: areaData2,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
        // enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "monthes",
        categories: areaCategories,
      },
      title: {
        text: "this month spending ",
        style: {
          color: "#fff",
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
