import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TabOne = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Tabs>
            <div className="row row--30 align-items-center">
              <div className="col-lg-5">
                <img
                  className="radius-small"
                  src="./images/tab/tabs-01.jpg"
                  alt="Corporate React Template"
                />
              </div>
              <div className="col-lg-7 mt_md--40 mt_sm--40">
                <div className="rn-default-tab">
                  <div className="tab-button-panel">
                    <TabList className="tab-button">
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Engineering Team</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Corporate Team</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Commercial Team</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Projects Management Team</button>
                        </div>
                      </Tab>
                    </TabList>
                  </div>

                  <div className="tab-content-panel">
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            In-house Engineering Team to cater Automation &
                            Control, Electrical, instrumentation, Analyzers,
                            Cyber security, PCN IT and related manpower
                            requirements.
                          </p>

                          {/* <p>
                            In-house team members and local partners to provide
                            services in field of Business Management and Visa
                            and Logistic services to our esteemed clients in
                            Angola.
                          </p> */}
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            In-house team members and local partners to provide
                            services in field of Business Management and Visa
                            and Logistic services to our esteemed clients in
                            Angola.
                          </p>

                          {/* <p>
                            Ipsa Quibusdam, deleniti soluta minima minus
                            asperiores doloribus enim vitae obcaecati fuga
                            assumenda laudantium nemo odio provident nulla
                            exercitationem tempore corrupti! Nemo.
                          </p> */}
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            Commercial team to procure and deliver equipment
                            (MCC, switchgear, etc.) from top brands through its
                            offices in Dubai and USA.
                          </p>

                          {/* <p>
                            Ipsa Quibusdam, deleniti soluta minima minus
                            asperiores doloribus enim vitae obcaecati fuga
                            assumenda laudantium nemo odio provident nulla
                            exercitationem tempore corrupti! Nemo.
                          </p> */}
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            Continual Improvement in our services to ensure 100%
                            client’s satisfaction in each and every project of
                            the company.
                          </p>

                          {/* <p>
                            Ipsa Quibusdam, deleniti soluta minima minus
                            asperiores doloribus enim vitae obcaecati fuga
                            assumenda laudantium nemo odio provident nulla
                            exercitationem tempore corrupti! Nemo.
                          </p> */}
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TabOne;
