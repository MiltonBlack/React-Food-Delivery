import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Dishes from './components/Dishes/Dishes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Dishes/>
    </div>
  );
}

export default App;
