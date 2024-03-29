import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "../src/pages/dashboard.jsx";
import MyAcct from"../src/pages/MyAcct.jsx";
//import Sign_up from"../src/pages/sign_up.js";
import Toast from "./pages/TestToasts.jsx";
import Registration from './pages/registration.jsx';
import SuccessPage from './pages/Login_success.jsx';
import Create_ship from './pages/Create_ship.jsx';
import My_Ship from './pages/myShip.jsx';
import Print from './pages/Print.jsx';

import { ToastProvider, useToasts } from 'react-toast-notifications';
function App() {
  return (
    <ToastProvider>
    <Router>
      <Routes>
      <Route exact path="/" element={<Registration/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/MyAcct" element={<MyAcct/>} />
     
        <Route exact path="/registration"element={<Registration/>}></Route>
        <Route exact path="/success" element={<SuccessPage/>} />
       
        <Route exact path="/newShip" element={<Create_ship/>}/>
               
        <Route exact path="/myShip" element={<My_Ship/>}/>
        <Route path="/print" element={<Print />} />
        <Route path="/Toast" element={<Toast />} />
        </Routes>

     </Router>
     </ToastProvider>
    );
}

export default App;
