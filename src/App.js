
import './App.css';
import './assets/css/style.css';
import Header from './compnent/header';
import Footer from './compnent/footer';
import Home from './templates/home';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
