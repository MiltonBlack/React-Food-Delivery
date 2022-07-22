import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Dishes from './components/Dishes/Dishes';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Dishes/>
      <About/>
      <Menu/>
      <Review/>
    </div>
  );
}

export default App;
