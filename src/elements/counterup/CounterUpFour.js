import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const Data = [
  {
    countNum: 2,
    countTitle: "Worldwide Office Locations",
  },
  {
    countNum: 100,
    countTitle: "Key Projects Completed",
  },
  {
    countNum: 0,
    countTitle: "Safety Incidents In A Decade",
  },
  {
    countNum: 150,
    countTitle: "Employees Across The Globe",
  },
];
const CounterUpFour = ({ textALign, counterStyle, column }) => {
  return (
    <div className="row">
      {Data.map((data, index) => (
        <div className={`${column}`} key={index}>
          <div className={`count-box ${counterStyle} ${textALign}`}>
            <TrackVisibility once>
              {({ isVisible }) =>
                isVisible && (
                  <div className="count-number">
                    {isVisible ? <CountUp end={data.countNum} /> : 0}
                  </div>
                )
              }
            </TrackVisibility>
            <h5 className="counter-title">{data.countTitle}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CounterUpFour;
