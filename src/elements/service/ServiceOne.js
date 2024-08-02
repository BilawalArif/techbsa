import React from "react";
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    icon: <FiActivity />,
    title: "Service Delivery Overview:",
    description:
      "Automation services to CABGOC through qualified National engineers since 2017.",
  },
  {
    icon: <FiCast />,
    title: "National Engineers Provision",
    description: "Provision of 06 National Engineers at CABGOC site.",
  },
  {
    icon: <FiMap />,
    title: "Trainee Engineers Provision",
    description: "03 National Trainee Engineers training at INTECH office",
  },
  {
    icon: <FiActivity />,
    title: "Angolization Plan Support",
    description: " Support to achieve ANGOLIZATION PLAN.",
  },
  {
    icon: <FiCast />,
    title: "Taxation and Obligations",
    description:
      "Employees taxation and relevant obligations including IRT & INSS.",
  },
  {
    icon: <FiMap />,
    title: "Payroll Management",
    description: "Payroll Management of National Engineers.",
  },
];

const ServiceOne = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="icon">{val.icon}</div>
              <div className="content">
                <h4 className="title w-600">
                  <Link
                    to="#service"
                    dangerouslySetInnerHTML={{ __html: val.title }}
                  ></Link>
                </h4>
                <p
                  className="description b1 color-gray mb--0"
                  dangerouslySetInnerHTML={{ __html: val.description }}
                ></p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};
export default ServiceOne;
