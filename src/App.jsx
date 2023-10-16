import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Restaurant from './pages/Restaurant'
import Add from './pages/Add'
import Search from './pages/Search'
import Update from './pages/Update';
import Signup from './pages/Signup';
import Signin from './pages/signin';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import NotAllow from './pages/NotAllow';
import ProtectedRouts from './pages/ProtectedRoute';
import AdminRoute from './pages/AdminRoute';
import Layout from './components/Layout';

function App() {
  

  return (
    <BrowserRouter>
      <Routes >
          <Route path="/" element={<Layout/>}>
            <Route index element={<Restaurant />} />

            <Route 
            path="/add" element=
            {<AdminRoute>
              <Add />
              </AdminRoute>} />

            <Route path="/Search" element=
            {<ProtectedRouts>
              <Search />
              </ProtectedRouts>} />
            
            <Route path="/NotAllow" element={<NotAllow />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/logout" element={<Logout />} /> 
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Update/:restaurantId" element=
            {<AdminRoute><Update /></AdminRoute>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
