import bgStars from './assets/bgStars.svg';
import patternHill from './assets/patternHill.svg';

import './App.css';
import IconsSection from './components/icons/IconsSection';
import TopSection from './components/topTitle/TopSection';
import CountdownTimerSection from './components/countdownTimer/countdownTimer';

function App() {
  return (
    <div className="containerAll">
      <img className="stars" src={bgStars} alt="no se puede mostrar la imagen"></img>
      <img className="hills" src={patternHill} alt="no se puede mostrar la imagen"></img>
      <div className="content">
        <TopSection />
        <CountdownTimerSection />
        <IconsSection />
      </div>
    </div>
  );
}

export default App;
