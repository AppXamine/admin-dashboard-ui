import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function drawRectangles(chart, options) {
  const { ctx, chartArea } = chart;
  if (!ctx || !chartArea) return;

  const { x, y, width, height, backgroundColor } = options;

  ctx.save();
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(x, y, width, height);
  ctx.restore();
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 5, // Adjust the step size to space y-axis with 5 boxes per unit
        max: 50, // Adjust the maximum value on the y-axis as needed
      },
    },
  },
};

const labels = ["Recurrent", "New for", "Content", "Design" , "Design"];
const manualData = [5, 0, 5, 5];
const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      barThickness: 10,
      
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      data: manualData,
      backgroundColor: "#fff",
    },
  ],
};

const VerticalChart = () => {
 
  return (
   
    <Bar
      options={{
        ...options,
        plugins: {
          ...options.plugins,
          customRectangles: {
            rectangles: [
              // Define your background boxes here
              {
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                backgroundColor: "rgba(0, 0, 255, 0.3)",
              },
              {
                x: 60,
                y: 0,
                width: 50,
                height: 50,
                backgroundColor: "rgba(0, 255, 0, 0.3)",
              },
              // Add more rectangles as needed
              {
                x: 120,
                y: 0,
                width: 50,
                height: 50,
                backgroundColor: "rgba(255, 0, 0, 0.3)",
              },
              {
                x: 180,
                y: 0,
                width: 50,
                height: 50,
                backgroundColor: "rgba(255, 255, 0, 0.3)",
              },
              
            ],
          },
        },
        onDraw: (chart, args) => {
          const { rectangles } = args.config.options.plugins.customRectangles;
          console.log(args.config.options.plugins.customRectangles);
          rectangles.forEach((rect) => drawRectangles(chart, rect));
        },
      }}
      data={data}
    />
  );
};

export default VerticalChart;