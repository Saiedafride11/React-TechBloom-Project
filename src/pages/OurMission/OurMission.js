import React from 'react';
import './OurMission.css';
import Fade from 'react-reveal/Fade';

const OurMission = () => {
      return (
            <Fade left >
                  <div className="our-mission" id="mission">
                        <div className="container mx-auto">
                              <Fade left delay={10}>
                                    <h6>OUR MISSION</h6>
                              </Fade>
                              <Fade left delay={1000}>
                                    <p>Techboom is an Advocacy for Technology Education and a Software Development Company. We build innovative, lightning fast, and flexible products for clients in New York and Silicon Valley. Then with our growing revenue, we provide scholarships and technology educational for underserved communities.</p>
                              </Fade>
                        </div>
                  </div>
            </Fade>
      );
};

export default OurMission;