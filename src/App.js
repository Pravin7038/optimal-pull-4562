
import './App.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './pages/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
    <AllRoutes />
    { <Footer />}
    </div>
      
    
  );
}

export default App;
