
import './App.css';
import './assets/css/style.css';
import Header from './compnent/header';
import Footer from './compnent/footer';
import Home from './templates/home';
import About from './templates/about';
import Contact from './templates/contact';
import Cart from './templates/cart';
import Shop from './templates/shop';
import Login from './authUser/login';
import Register from './authUser/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/shop' Component={Shop} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='/cart' Component={Cart} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
