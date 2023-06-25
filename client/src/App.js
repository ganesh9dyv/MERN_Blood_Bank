import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Donar from "./pages/DashBoard/Donar";
import Hospital from "./pages/DashBoard/Hospital";
import Organisation from "./pages/DashBoard/Organisation";
import Consumer from "./pages/DashBoard/Consumer";
import Donation from "./pages/DashBoard/Donation";

function App() {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>
      } />
        <Route path='/donar' element={
          <ProtectedRoute>
            <Donar/>
          </ProtectedRoute>
      } />
        <Route path='/hospital' element={
          <ProtectedRoute>
            <Hospital/>
          </ProtectedRoute>
      } />
        <Route path='/consumer' element={
          <ProtectedRoute>
            <Consumer/>
          </ProtectedRoute>
      } />
        <Route path='/donation' element={
          <ProtectedRoute>
            <Donation/>
          </ProtectedRoute>
      } />
        <Route path='/organisation' element={
          <ProtectedRoute>
            <Organisation/>
          </ProtectedRoute>
      } />
        <Route path='/login' element={
        <PublicRoute> <Login/> </PublicRoute>
        } />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
