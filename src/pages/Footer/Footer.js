import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
      return (
            <div style={{backgroundColor: '#000', padding: "20px"}}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '40%'}}>
                              <FontAwesomeIcon icon={faFacebookSquare} style={{color: "#fff", width: "30px", height: "30px", marginRight: "20px"}}/>
                              <FontAwesomeIcon icon={faTwitterSquare} style={{color: "#fff", width: "30px", height: "30px", marginRight: "20px"}}/>
                              <FontAwesomeIcon icon={faYoutubeSquare} style={{color: "#fff", width: "30px", height: "30px"}}/>
                        </div>
                        <p style={{color: "#fff", textAlign: "center"}}>© Techboom 2018. All rights reserved.</p>
                  </div>
            </div>
      );
};

export default Footer;