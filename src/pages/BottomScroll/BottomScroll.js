import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import './BottomScroll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BottomScroll = () => {
  // const { pathname } = useLocation();
  const [count, setCount] = useState(0);

  // router top scroll
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  
  // top scroll
  const scrollToSection = () => {
    const servicesElement = document.getElementById('services');
    const missionElement = document.getElementById('mission');
    const highlightElement = document.getElementById('highlight');
    const goElement = (element) => {
      setTimeout(() => {
          window.scrollTo({
              behavior: element ? "smooth" : "auto",
              top: element ? element.offsetTop - 50 : 0
          });
      },50)
    }
    if(count === 0 && servicesElement){
      setCount(count + 1);
      goElement(servicesElement);
    }
    if(count === 1 && missionElement){
      setCount(count + 1);
      goElement(missionElement);
    }
    if(count === 2 && highlightElement){
      setCount(count + 1);
      goElement(highlightElement);
    }
    if(count === 3){
      setCount(count + 1);
      window.scrollTo({
          top: document.body.scrollHeight,
          left: 0,
          behavior: "smooth"
      });
    }
    if(count === 4){
      setCount(0);
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
      });
    }
  };

  return (
    <div className="scroll-to-bottom">
        <button onClick={scrollToSection} style={{backgroundColor: '#FF906F'}}>
          {
            count === 4 ? 
            <FontAwesomeIcon icon={faArrowUp}/>
            :
            <FontAwesomeIcon icon={faArrowDown}/>
          }
        </button>
    </div>
  )
}

export default BottomScroll