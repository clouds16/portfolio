import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import PageRouter from './router/Router'
import Footer from './pages/components/footer'

function App() {
  return (
    <div className="App">
     <Navbar />
     <PageRouter />
     <Footer />
    </div>
  );
}

export default App;
