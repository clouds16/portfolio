import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import PageRouter from './router/Router'

function App() {
  return (
    <div className="App">
     <Navbar />
     <PageRouter />
    </div>
  );
}

export default App;
