import React from "react";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
  VictoryStack
} from "victory";
const { breakdown, remainder } = require("../helpers.js");

const RatingsBreakdown = ({ reviews }) => {
  const data = breakdown(reviews);
  return (
    <div style={chartWrap}>
      <svg viewBox="0 0 500 400">
        <VictoryChart
          domainPadding={{ y: 17 }}
          standalone={false}
          events={[
            {
              childName: "all",
              target: "data",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: "data",
                      mutation: props => {
                        const event = new CustomEvent("filterReviews", {
                          detail: props.datum._x
                        });
                        window.dispatchEvent(event);
                      }
                    }
                  ];
                }
              }
            }
          ]}>
          <VictoryAxis tickFormat={t => null} />
          <VictoryAxis dependentAxis />
          <VictoryBar
            horizontal
            cornerRadius="15"
            labels={d => d.y}
            barWidth="30"
            style={{
              data: {
                fill: "#f96302",
                stroke: "#f96302",
                fillOpacity: "0.6",
                strokeWidth: "2",
                strokeOpacity: ".8",
                cursor: "pointer"
              },
              labels: {
                fontSize: "14",
                fill: "#f96302"
              }
            }}
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
  marginRight: "30px",
  marginTop: "0"
};

export default RatingsBreakdown;
