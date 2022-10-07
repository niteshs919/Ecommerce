import './App.css';
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart'
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';
import BuyNow from './pages/BuyNow';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/addaproduct' element={<AddProduct/>}></Route>
      <Route path='/buynow' element={<BuyNow/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
