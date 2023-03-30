
import './App.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './pages/Navbar';
import Footer from './components/Footer';
import ScrollButton from "./components/ScrollButton"
function App() {
  return (
    <div className="App">
      <ScrollButton/>
      <Navbar/>
    <AllRoutes />
    { <Footer />}
    </div>
      
    
  );
}

export default App;
