import logo from './logo.svg';
import './App.css';
/*import './money.css'*/
import {LandingPageHeader} from './Components/LandingPageHeader';
import { Hero } from './Components/Hero';


export function App() {
  return (
    <div>
      <LandingPageHeader/>
      <Hero />
      
    </div>
  );
}

export default App;
