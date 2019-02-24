import React from "react";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel
} from "victory";
const { breakdown } = require("../helpers.js");

const RatingsBreakdown = ({ reviews }) => {
  const data = breakdown(reviews);
  return (
    <div style={chartWrap}>
      <svg viewBox="0 0 500 400">
        <VictoryChart
          domainPadding={{ y: 14 }}
          standalone={false}
          style={{ labels: { fontSize: "40px " } }}>
          {/* <VictoryAxis /> */}
          <VictoryBar
            horizontal
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
            cornerRadius="10"
            labels={d => d.y}
            barWidth="25"
            style={{
              data: {
                fill: "#f96302",
                stroke: "#f96302",
                fillOpacity: "0.7",
                strokeWidth: "2"
              },
              labels: {
                fontSize: "14",
                fill: "#f96302"
              }
            }}
            them={VictoryTheme.material}
            data={data}
          />
        </VictoryChart>
      </svg>
    </div>
  );
};

const chartWrap = {
  height: "400px",
  width: "400px",
  marginRight: "75px",
  marginTop: "20px"
};

export default RatingsBreakdown;
