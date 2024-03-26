import { Radar } from "react-chartjs-2";

const data = [
  {
    label: "Skill 1",
    data: [85, 75, 90, 80, 70],
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    pointBackgroundColor: "rgba(255, 99, 132, 1)",
    pointBorderColor: "#fff",
    pointHoverRadius: 5,
    pointHitRadius: 10,
    pointBorderWidth: 2,
  },
  {
    label: "Skill 2",
    data: [70, 80, 60, 90, 85],
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgba(54, 162, 235, 1)",
    pointBackgroundColor: "rgba(54, 162, 235, 1)",
    pointBorderColor: "#fff",
    pointHoverRadius: 5,
    pointHitRadius: 10,
    pointBorderWidth: 2,
  },
];

const RadarChart = () => {
  const options = {
    scale: {
      pointLabels: {
        fontSize: 14,
      },
    },
  };

  return (
    <div>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
