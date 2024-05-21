/* eslint-disable no-unused-vars */
/********************************** line chart************************************/

//area chart
const areaDataCurrMonth = [0, 0, 0, 0, 1000, 0, 0, 0, 0, 0, 0, 0];
const areaDataPrevMonth = [0, 0, 0, 0, 1500, 0, 0, 0, 0, 0, 0, 0];
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

import React from "react";

export function LineApexChart() {
  const [chartData, setChartData] = React.useState({
    series: [
      {
        name: "series1",
        data: areaDataCurrMonth,
      },
      {
        name: "series2",
        data: areaDataPrevMonth,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        categories: areaCategories,
      },
      yaxis: {
        title: {
          text: "Spending",
        },
      },
      title: {
        text: "This Month Spending",
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
          height={380}
          className="bg-gray-700"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

/********************************** radar chart************************************/
const existingTransactions =
  JSON.parse(localStorage.getItem("transactions")) || [];

const transactionData = existingTransactions.map((item) => {
  return item;
});

const sortedData = transactionData.sort(
  (a, b) => b.transaction - a.transaction
);
const top5MostExpensiveItems = sortedData.slice(0, 5);
const mostExpensiveAmount = top5MostExpensiveItems.map(
  (item) => item.transaction
);
const mostExpensiveCategories = top5MostExpensiveItems.map(
  (item) => item.category
);

const totalSpending = existingTransactions.reduce(
  (acc, item) => acc + item.transaction,
  0
);

const MonthlyAmount = totalSpending || 0;

/********************************** premdae charts************************************/
/* eslint-disable no-unused-vars */
import ReactApexChart from "react-apexcharts";
export function RadarApexChart() {
  const state = {
    series: [
      {
        name: "Series 1",
        data: mostExpensiveAmount,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
      },
      dataLabels: {
        enabled: true,
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
        text: "Most spenging",
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
        categories: mostExpensiveCategories,
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
        max: MonthlyAmount,
      },
    },
  };

  return (
    <div>
      <div id="chart" >
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radar"
          className="bg-gray-700 rounded-md"
          // height={275}
          height={330}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
