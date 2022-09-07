import React from 'react';
import './Services.css';

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
            <div className="tmp-container">
                  <div>
                        <div className="tmp-inner" style={{height: '450px', backgroundImage: `url(${data[0].img})`}}>
                              <div className="hover-box">
                              <span>
                                    <h2>New</h2>
                                    <h4>Arrivals</h4>
                              </span>
                              </div>
                        </div>
                        <div className="tmp-inner" style={{height: '450px', backgroundImage: `url(${data[2].img})`}}>
                              <div className="hover-box">
                                    <span>
                                    <h2>New</h2>
                                    <h4>Arrivals</h4>
                                    </span>
                              </div>
                        </div>
                        <div className="tmp-inner" style={{height: '300px', backgroundImage: `url(${data[4].img})`}}>
                              <div className="hover-box">
                                    <span>
                                    <h2>New</h2>
                                    <h4>Arrivals</h4>
                                    </span>
                              </div>
                        </div>
                  </div>

                  <div>
                        <div className="tmp-inner" style={{height: '300px', backgroundImage: `url(${data[1].img})`}}>
                              <div className="hover-box">
                                    <span>
                                    <h2>New</h2>
                                    <h4>Arrivals</h4>
                                    </span>
                              </div>
                        </div>
                        <div className="tmp-inner" style={{height: '450px', backgroundImage: `url(${data[3].img})`}}>
                              <div className="hover-box">
                                    <span>
                                    <h2>New</h2>
                                    <h4>Arrivals</h4>
                                    </span>
                              </div>
                        </div>
                        <div className="tmp-inner" style={{height: '450px', backgroundImage: `url(${data[5].img})`}}>
                              <div className="hover-box">
                                    <span>
                                    <h2>New</h2>
                                    <h4>Arrivals</h4>
                                    </span>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Services;