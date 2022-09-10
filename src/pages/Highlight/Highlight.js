import React from 'react';
import './Highlight.css';
import Fade from 'react-reveal/Fade';

const data = [
      { img: "http://techboom.ai/images/newprofile4.jpg" },
      { img: "http://techboom.ai/images/newprofile.jpg" },
      { img: "http://techboom.ai/images/team4.jpg" },
      { img: "http://techboom.ai/images/unnamed.jpg" },
      { img: "http://techboom.ai/images/newprofile5.jpg" },
      { img: "http://techboom.ai/images/profile7.jpeg" },
      { img: "http://techboom.ai/images/preparation.jpeg" },
      { img: "http://techboom.ai/images/preparation.jpeg" },
    ];

const Highlight = () => {
      return (
            <div className="highlight-section">
                  <div className="container mx-auto px-8">
                        <h3 className="col px-3 px-sm-2 px-md-0">HIGHLIGHTS</h3>
                        <div className="tmp-highlight tmp-highlight-top">
                              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <div style={{backgroundColor: "#FF906F", marginBottom: "30px"}}>
                                          <Fade top>
                                                <div className="tmp-highlight-inner" style={{height: '285px', backgroundImage: `url(${data[0].img})`}}></div>
                                          </Fade>
                                    </div>
                                    <div style={{backgroundColor: "#FF906F"}}>
                                          <Fade top>
                                                <div className="tmp-highlight-inner" style={{height: '285px', backgroundImage: `url(${data[1].img})`}}></div>
                                          </Fade>
                                    </div>
                              </div>
                              <div>
                                    <div style={{backgroundColor: "#FF906F"}}>
                                          <Fade top>
                                                <div className="tmp-highlight-inner" style={{height: '600px', backgroundImage: `url(${data[2].img})`}}></div>
                                          </Fade>
                                    </div>
                              </div>
                        </div>
                        <div className="tmp-highlight tmp-highlight-middle">
                              <div style={{backgroundColor: "#FF906F"}}>
                                    <Fade top>
                                          <div className="tmp-highlight-inner" style={{height: '300px', backgroundImage: `url(${data[3].img})`}}></div>
                                    </Fade>
                              </div>
                              <div style={{backgroundColor: "#FF906F"}}>
                                    <Fade top>
                                          <div className="tmp-highlight-inner" style={{height: '300px', backgroundImage: `url(${data[4].img})`}}></div>
                                    </Fade>
                              </div>
                        </div>
                        <div className="tmp-highlight tmp-highlight-bottom">
                              <div>
                                    <div style={{backgroundColor: "#FF906F"}}>
                                          <Fade top>
                                                <div className="tmp-highlight-inner" style={{height: '600px', backgroundImage: `url(${data[5].img})`}}></div>
                                          </Fade>
                                    </div>
                              </div>
                              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <div style={{backgroundColor: "#FF906F", marginBottom: "30px"}}>
                                          <Fade top>
                                                <div className="tmp-highlight-inner" style={{height: '285px', backgroundImage: `url(${data[6].img})`}}></div>
                                          </Fade>
                                    </div>
                                    <Fade top>
                                          <div className="tmp-highlight-inner" style={{height: '285px', backgroundColor: "#FF906F"}}>
                                                <h1>LET'S CHAT!</h1>
                                          </div>
                                    </Fade>
                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default Highlight;