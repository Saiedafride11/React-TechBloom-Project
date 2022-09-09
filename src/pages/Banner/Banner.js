import React from 'react';
import './Banner.css';

const Banner = () => {
      return (
            <div id="intro">
                  <div className="jumbotron text-center">
                        <div className="jumbotron-container">
                              <h2>TECHBOOM</h2>
                              <div class="animation">
                                    <div class="cloud1" id="animation"><img src="https://techboom.ai/images/cloud1%20(1).png"/></div>
                                    <div class="cloud2" id="animation"><img src="https://techboom.ai/images/cloud2%20(1).png"/></div>
                                    <div class="cloud3" id="animation"><img src="https://techboom.ai/images/cloud1%20(1).png"/></div>
                                    <div class="cloud4" id="animation"><img src="https://techboom.ai/images/cloud2%20(1).png"/></div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;