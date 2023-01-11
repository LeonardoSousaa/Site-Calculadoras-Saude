import logo from './logo.svg';
import './App.css';
import Highlight from './components/Highlight'
import SegundaSection from './components/SegundaSection'
import TerceiraSection from './components/TerceiraSection'
import Footer from './components/Footer'
import PageCalculator from './Pages'



function App() {
  return (
    <div className="App">
    <Highlight/>
    <SegundaSection/>
    <TerceiraSection/>
    <PageCalculator/>
    <Footer/>
    </div>
  );
}

export default App;
