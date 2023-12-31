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
import Analytics from "./pages/DashBoard/Analytics";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import OrganisationList from "./pages/Admin/OrganisationList";
import AdminHome from "./pages/Admin/AdminHome";

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
        <Route path='/admin' element={
          <ProtectedRoute>
            <AdminHome/>
          </ProtectedRoute>
      } />
        <Route path='/donar-list' element={
          <ProtectedRoute>
            <DonarList/>
          </ProtectedRoute>
      } />
        <Route path='/analytics' element={
          <ProtectedRoute>
            <Analytics/>
          </ProtectedRoute>
      } />
        <Route path='/hospital' element={
          <ProtectedRoute>
            <Hospital/>
          </ProtectedRoute>
      } />
        <Route path='/hospital-list' element={
          <ProtectedRoute>
            <HospitalList/>
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
        <Route path='/organisation-list' element={
          <ProtectedRoute>
            <OrganisationList/>
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
