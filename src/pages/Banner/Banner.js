import React from 'react';
import './Banner.css';

const Banner = () => {
      return (
            <div id="intro">
                  <div className="jumbotron text-center">
                        <div className="jumbotron-container">
                              <h2 className="jumbotron-heading1">TECHBOOM</h2>
                              <h2 className="jumbotron-heading2">TECH</h2>
                              <h2 className="jumbotron-heading3">BOOM</h2>
                              <div className="animation">
                                    <div className="cloud1" id="animation"><img src="https://techboom.ai/images/cloud1%20(1).png"/></div>
                                    <div className="cloud2" id="animation"><img src="https://techboom.ai/images/cloud2%20(1).png"/></div>
                                    <div className="cloud3" id="animation"><img src="https://techboom.ai/images/cloud1%20(1).png"/></div>
                                    <div className="cloud4" id="animation"><img src="https://techboom.ai/images/cloud2%20(1).png"/></div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;