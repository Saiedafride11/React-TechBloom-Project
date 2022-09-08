import React from 'react';
import './Highlight.css';

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
            <div className="container mx-auto px-8">
                  <h3 className="col text-right px-3 px-sm-2 px-md-0 my-5" style={{fontSize: "2.5em"}}>HIGHLIGHTS</h3>
                  <div className="tmp-highlight tmp-highlight-top">
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                              <div className="tmp-highlight-inner highlight-extra" style={{height: '285px', backgroundImage: `url(${data[0].img})`}}>
                                    
                              </div>
                              <div className="tmp-highlight-inner" style={{height: '285px', backgroundImage: `url(${data[1].img})`}}>
                                    
                              </div>
                        </div>

                        <div>
                              <div className="tmp-highlight-inner" style={{height: '600px', backgroundImage: `url(${data[2].img})`}}>
                              
                              </div>
                        </div>
                  </div>
                  <div className="tmp-highlight tmp-highlight-middle">
                        <div className="tmp-highlight-inner" style={{height: '300px', backgroundImage: `url(${data[3].img})`}}>
                        
                        </div>
                        <div className="tmp-highlight-inner" style={{height: '300px', backgroundImage: `url(${data[4].img})`}}>
                              
                        </div>
                  </div>
                  <div className="tmp-highlight tmp-highlight-bottom">
                        <div>
                              <div className="tmp-highlight-inner" style={{height: '600px', backgroundImage: `url(${data[5].img})`}}>
                              
                              </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                              <div className="tmp-highlight-inner highlight-extra" style={{height: '285px', backgroundImage: `url(${data[6].img})`}}>
                                    
                              </div>
                              <div className="tmp-highlight-inner" style={{height: '285px', backgroundColor: "#FF906F"}}>
                                    <h1>LET'S CHAT!</h1>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default Highlight;