import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import TrackVisibility from "react-on-screen";

const progressData = [
  {
    id: 1,
    title: "Angolan Nationalization Plan",
    percantage: 92,
    subtitle:
      "Replacement of Two Expat Engineers with Local Engineers at CABGOC through INTECH.",
    strokeColor: "#0f0f11",
    strokePath: "#2e5aec",
    strokeLinecap: "round",
    strokeWidth: 2,
  },

  {
    id: 2,
    title: "Network Extension",
    percantage: 97,
    subtitle:
      "Partnership with International subcontractor INTECH Process Automation Angola and serving CABGOC for Since January 2018.",
    strokeColor: "#0f0f11",
    strokePath: "#f0d436",
    strokeLinecap: "round",
    strokeWidth: 5,
  },

  {
    id: 3,
    title: "External Trainings",
    percantage: 95,
    subtitle:
      "Arrangements of Technical Trainings in India, South Africa and Dubai to develop local strength",
    strokeColor: "#0f0f11",
    strokePath: "#1170ac",
    strokeLinecap: "round",
    strokeWidth: 10,
  },
  {
    id: 4,
    title: "Customer’s Satisfaction",
    percantage: 99,
    subtitle:
      "Providing safe and simple operation, ensuring reliable service to INTECH without compromising pre-established lead time and standards for over Years.",
    strokeColor: "#0f0f11",
    strokePath: "#ff9b05",
    strokeLinecap: "round",
    strokeWidth: 13,
  },
];

const CircleProgressTwo = () => {
  return (
    <div className="row row--30">
      {progressData.map((progress, index) => (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30" key={index}>
          <div className="rwt-circle text-center">
            <TrackVisibility once>
              {({ isVisible }) =>
                isVisible && (
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={progress.percantage}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                    repeat={false}
                  >
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          strokeWidth={progress.strokeWidth}
                          styles={{
                            trail: {
                              stroke: progress.strokeColor,
                              transition: "stroke-dashoffset 0.5s ease 0s",
                            },
                            text: {
                              fill: "#adb5c4",
                              fontSize: "16px",
                              dominantBaseline: "central",
                              textAnchor: "middle",
                            },
                            path: {
                              stroke: progress.strokePath,
                              strokeLinecap: progress.strokeLinecap,
                            },
                          }}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                )
              }
            </TrackVisibility>
            <div className="circle-info">
              <h4 className="title">{progress.title}</h4>
              <span className="subtitle">{progress.subtitle}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CircleProgressTwo;
