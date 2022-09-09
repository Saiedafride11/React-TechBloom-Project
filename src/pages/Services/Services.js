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
            <div className="container mx-auto px-8">
                  <h3 className="col text-center px-3 px-sm-2 px-md-0 my-5" style={{fontSize: "2.5em"}}>OUR SERVICES</h3>
                  <div className="tmp-container">
                        <div> 
                              <div style={{backgroundColor: "#a1778f"}}>
                                    <Fade bottom>
                                          <div className="tmp-inner" style={{height: '450px', backgroundImage: `url(${data[0].img})`}}>
                                                <div className="hover-box">
                                                <span>
                                                      <h2>New</h2>
                                                      <h4>Arrivals</h4>
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
                                                      <h2>New</h2>
                                                      <h4>Arrivals</h4>
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
                                                      <h2>New</h2>
                                                      <h4>Arrivals</h4>
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
                                                      <h2>New</h2>
                                                      <h4>Arrivals</h4>
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
                                                      <h2>New</h2>
                                                      <h4>Arrivals</h4>
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
                                                      <h2>New</h2>
                                                      <h4>Arrivals</h4>
                                                      </span>
                                                </div>
                                          </div>
                                    </Fade>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Services;