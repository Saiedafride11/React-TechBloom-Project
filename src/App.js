import './App.css';
import Footer from './pages/Footer/Footer';
import Highlight from './pages/Highlight/Highlight';
import TopScroll from './pages/TopScroll/TopScroll';
import Services from './pages/Services/Services';
import OurMission from './pages/OurMission/OurMission';
import Banner from './pages/Banner/Banner';



function App() {
  return (
    <div>
      {/* <div className="flex items-center justify-center">
          <div>
              <h3 className="text-3xl font-bold underline text-center text-clifford my-6"> Meet the them</h3>
              <div className="flex flex-row mb-10 relative">
                  <div>
                      <img src="https://randomuser.me/api/portraits/women/72.jpg" alt="" />
                      <p className="text-xs">Monet Goode</p>
                      <p className="text-xs">Founder</p>
                  </div>
                  <div className="absolute top-10 left-24">
                      <img src="https://randomuser.me/api/portraits/men/75.jpg"  alt="" />
                      <p className="text-xs">Audrius Linkus</p>
                      <p className="text-xs">Head of interactive</p>
                  </div>
              </div>
              <div className="flex flex-row relative">
                  <div>
                      <img src="https://randomuser.me/api/portraits/men/70.jpg"  alt="" />
                      <p className="text-xs">Manvydas Kugis</p>
                      <p className="text-xs">Digital director</p>
                  </div>
                  <div className="absolute top-10 left-24">
                      <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="" />
                      <p className="text-xs">Nicole Wiegand</p>
                      <p className="text-xs">Project manager</p>
                  </div>
              </div>
          </div>
      </div> */}
      <Banner/>
      <Services/>
      <OurMission/>
      <Highlight/>
      <Footer/>
      <TopScroll/>
    </div>
    
  );
}

export default App;
