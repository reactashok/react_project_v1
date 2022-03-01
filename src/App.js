import logo from './logo.svg';
import './App.css';
import Login from '../src/Pages/Login/Login';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import TemporaryDrawer from './Component/TemporaryDrawer';
import Menu from './Pages/Menu/Menu';
import  BreakfastDetail from './Pages/OrderDetail/BreakfastDetail';
import LunchDetail from './Pages/OrderDetail/LunchDetail';
import DinnerDetail from './Pages/OrderDetail/DinnerDetail';
import Invoice from './Pages/Invoice/Invoice';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/BreakfastDetail" element={< BreakfastDetail />} />
    <Route path="/" element={<HomePage />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/LunchDetail" element={<LunchDetail />}/>
    <Route path="/DinnerDetail" element={< DinnerDetail />}/>
    <Route path="/"element={<Invoice/>}/>
     
    </Routes>
  </BrowserRouter>
  )     
}

export default App;
