import { useState } from 'react'
import {Routes, Route, useLocation} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Treats';
import Admin from './pages/Admin';
import InquiryBox from './pages/InquiryBox';
import Footer from './components/Footer';
import { ToastContainer } from "react-toastify";
import Blog from './pages/BlogPage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import DevelopersPage from './pages/DevelopersPage';


function App() {

  // we access the location to get the path later
  const location = useLocation();

  // we wont show navbar for the admin so we create for it
  const hideNavbarFooterRoutes = ["/admin"];

  // we create a varibale with a value of checking the pathname that should have a navbar
  const shouldShowNavbarFooter = !hideNavbarFooterRoutes.includes(location.pathname);

  return (
    <div className='bg-transparent'>
      {/* we import navbar here so that it will always in the website pages */}
      
      {shouldShowNavbarFooter && <Navbar/> }
      <ToastContainer />


      {/* we define the path per pages so our app, become dynamic */}
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/treats' element={<Menu/> } />
        <Route path='/inquiry' element={<InquiryBox/> } />
        <Route path='/blog' element={<Blog/> } />
        <Route path='/admin' element={<Admin/> } />``
        <Route path='/terms' element={<Terms/> } />
        <Route path='/privacy' element={<Privacy/> } />
        <Route path='/developers' element={<DevelopersPage/> } />

      </Routes>

      {/* we also import footer here so that it will avaible to all pages excluding admin*/}
      {shouldShowNavbarFooter && <Footer/> }

    </div>
  )
}

export default App
