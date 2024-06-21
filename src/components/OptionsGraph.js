import React from "react";
import { Line } from "react-chartjs-2";
import { sampleData } from "../data/sampleData";
import "chart.js/auto";
import { generateGraphData, calculateSummary } from "../utils/optionsUtils";

// React component for displaying the Options Graph and Summary
const OptionsGraph = () => {
  // Generate data for the graph and calculate summary based on sampleData
  const graphData = generateGraphData(sampleData);
  const summary = calculateSummary(sampleData);

  return (
    <div>
      <h2> Risk & Reward Graph </h2>{" "}
      {/* Display Line chart with calculated graphData */}{" "}
      <Line data={graphData} />{" "}
      <div>
        <h3> Summary </h3>{" "}
        {/* Display calculated max profit, max loss, and break-even points */}{" "}
        <p> Max Profit: {summary.maxProfit.toFixed(2)} </p>{" "}
        <p> Max Loss: {summary.maxLoss.toFixed(2)} </p>{" "}
        <p> Break Even Points: {summary.breakEvenPoints.join(", ")} </p>{" "}
      </div>{" "}
    </div>
  );
};

export default OptionsGraph;
