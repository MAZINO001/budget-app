// /********************************** custome code************************************/
// import Data from "../../Data/fakeData.json";
// const sortedData = Data.sort((a, b) => b.Amount - a.Amount);
// const top5MostExpensiveItems = sortedData.slice(0, 6);
// const mostExpensiveAmount = top5MostExpensiveItems.map((item) => item.Amount);
// const mostExpensiveCategories = top5MostExpensiveItems.map(
//   (item) => item.Category
// );
// const MonthlyAmount = 1500;
// //area chart
// const areaData1 = [10, 20, 31, 40, 28, 51, 80, 47, 42, 109, 100, 88];
// const areaData2 = [15, 25, 30, 45, 55, 70, 85, 95, 60, 75, 85, 95];
// const areaCategories = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// /********************************** premdae charts************************************/
// /* eslint-disable no-unused-vars */
// import ReactApexChart from "react-apexcharts";
// export function RadarApexChart() {
//   const state = {
//     series: [
//       {
//         name: "Series 1",
//         data: mostExpensiveAmount,
//       },
//     ],
//     options: {
//       chart: {
//         height: 350,
//         type: "radar",
//       },
//       dataLabels: {
//         enabled: true,
//       },
//       plotOptions: {
//         radar: {
//           size: 115,
//           polygons: {
//             strokeColors: "#000",

//             fill: {
//               // colors: ["#fff", "#fff"],
//             },
//           },
//         },
//       },
//       title: {
//         text: "Most spenging",
//         style: {
//           color: "#fff",
//         },
//       },
//       colors: ["#FF4560"],
//       markers: {
//         size: 3,
//         colors: ["#fff"],
//         strokeColor: "#FF4560",
//         strokeWidth: 1,
//       },
//       tooltip: {
//         y: {
//           formatter: function (val) {
//             return val;
//           },
//         },
//       },
//       xaxis: {
//         categories: mostExpensiveCategories,
//       },
//       yaxis: {
//         tickAmount: 6,
//         labels: {
//           formatter: function (val, i) {
//             if (i % 2 === 0) {
//               return val;
//             } else {
//               return "";
//             }
//           },
//         },
//         max: MonthlyAmount,
//       },
//     },
//   };

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart
//           options={state.options}
//           series={state.series}
//           type="radar"
//           className="bg-gray-700 rounded-md"
//           height={275}
//         />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// }

// //second line chart

// import React from "react";

// export function LineApexChart() {
//   const [chartData, setChartData] = React.useState({
//     series: [
//       {
//         name: "series1",
//         data: areaData1,
//       },
//       {
//         name: "series2",
//         data: areaData2,
//       },
//     ],
//     options: {
//       chart: {
//         height: 350,
//         type: "area",
//       },
//       dataLabels: {
//         enabled: true,
//       },
//       stroke: {
//         curve: "smooth",
//       },
//       xaxis: {
//         type: "category",
//         categories: areaCategories,
//       },
//       yaxis: {
//         title: {
//           text: "Spending",
//         },
//       },
//       title: {
//         text: "This Month Spending",
//         style: {
//           color: "#fff",
//         },
//       },
//       tooltip: {
//         x: {
//           format: "dd/MM/yy HH:mm",
//         },
//       },
//     },
//   });

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart
//           options={chartData.options}
//           series={chartData.series}
//           type="area"
//           height={380}
//           className="bg-gray-700"
//         />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// }
/********************************** custome code************************************/
import Data from "../../Data/fakeData.json";
const sortedData = Data.sort((a, b) => b.Amount - a.Amount);
const top5MostExpensiveItems = sortedData.slice(0, 6);
const mostExpensiveAmount = top5MostExpensiveItems.map((item) => item.Amount);
const mostExpensiveCategories = top5MostExpensiveItems.map(
  (item) => item.Category
);
const MonthlyAmount = 1500;
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
        tickAmount: 6,
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
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radar"
          className="bg-gray-700 rounded-md"
          height={275}
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
