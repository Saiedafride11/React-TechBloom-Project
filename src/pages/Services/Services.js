import React from 'react';
import './Services.css';
import Fade from 'react-reveal/Fade';

const data = [
      { img: "http://techboom.ai/images/appDev.jpg" },
      { img: "http://techboom.ai/images/frontEnd.jpg" },
      { img: "http://techboom.ai/images/dataviz.jpg" },
      { img: "http://techboom.ai/images/processAuto.jpeg" },
      { img: "http://techboom.ai/images/artificial-intelligence.jpg" },
      { img: "http://techboom.ai/images/monitorProduct.jpg" },
    ];

const Services = () => {
      return (
            <div className="service-section" id="services">
                  <div className="container mx-auto px-8">
                        <h3 className="col px-3 px-sm-2 px-md-0">OUR SERVICES</h3>
                        <div className="tmp-service">
                              <div> 
                                    <div style={{backgroundColor: "#a1778f"}}>
                                          <Fade bottom>
                                                <div className="tmp-inner" style={{height: '450px', backgroundImage: `url(${data[0].img})`}}>
                                                      <div className="hover-box">
                                                      <span>
                                                            <h4>App Development</h4>
                                                            <p>Have an idea for an app? Whatever the platform, we'll build it..</p>
                                                      </span>
                                                      </div>
                                                </div>
                                          </Fade>
                                    </div>
                                    <div style={{backgroundColor: "#a1778f"}}>
                                          <Fade bottom>
                                                <div className="tmp-inner" style={{height: '450px', backgroundImage: `url(${data[2].img})`}}>
                                                      <div className="hover-box">
                                                            <span>
                                                                  <h4>Data Analytics</h4>
                                                                  <p>Know your customers better. Find hidden insights in your data to steer business.</p>
                                                            </span>
                                                      </div>
                                                </div>
                                          </Fade>
                                    </div>
                                    <div style={{backgroundColor: "#a1778f"}}>
                                          <Fade bottom>
                                                <div className="tmp-inner" style={{height: '300px', backgroundImage: `url(${data[4].img})`}}>
                                                      <div className="hover-box">
                                                            <span>
                                                                  <h4>Artificial Intelligence</h4>
                                                                  <p>Use predictive modelling to see what's coming, keeping you one step ahead of the competition.</p>
                                                            </span>
                                                      </div>
                                                </div>
                                          </Fade>
                                    </div>
                              </div>

                              <div>
                                    <div style={{backgroundColor: "#a1778f"}}>
                                          <Fade bottom>
                                                <div className="tmp-inner" style={{height: '300px', backgroundImage: `url(${data[1].img})`}}>
                                                      <div className="hover-box">
                                                            <span>
                                                                  <h4>Website Design</h4>
                                                                  <p>Take your user experience to the next level and improve your SEO rankings</p>
                                                            </span>
                                                      </div>
                                                </div>
                                          </Fade>
                                    </div>
                                    <div style={{backgroundColor: "#a1778f"}}>
                                          <Fade bottom>
                                                <div className="tmp-inner" style={{height: '450px', backgroundImage: `url(${data[3].img})`}}>
                                                      <div className="hover-box">
                                                            <span>
                                                                  <h4>Process Automation</h4>
                                                                  <p>Free your team from repetitive tasks, so that they can focus on what's really important.</p>
                                                            </span>
                                                      </div>
                                                </div>
                                          </Fade>
                                    </div>
                                    <div style={{backgroundColor: "#a1778f"}}>
                                          <Fade bottom>
                                                <div className="tmp-inner" style={{height: '450px', backgroundImage: `url(${data[5].img})`}}>
                                                      <div className="hover-box">
                                                            <span>
                                                                  <h4>Production Monitoring</h4>
                                                                  <p>Be proactive. Give your customers a smooth ride by addressing real-time system problems.</p>
                                                            </span>
                                                      </div>
                                                </div>
                                          </Fade>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Services;