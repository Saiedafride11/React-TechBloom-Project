import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import './BottomScroll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const BottomScroll = () => {
  // const { pathname } = useLocation();

  // router top scroll
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  
  // top scroll
  const scrollToTop = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="scroll-to-bottom">
        <button onClick={scrollToTop} style={{backgroundColor: '#FF906F'}}><FontAwesomeIcon icon={faArrowDown}/></button>
    </div>
  )
}

export default BottomScroll