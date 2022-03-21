import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Pages/contact';
import Home2 from './components/Pages/home2';
import Donate from './components/Pages/donate';
import About from './components/Pages/about';
import Blog from './components/Pages/blog';
import BlogDetail from './components/Pages/blogdetail';
import Volunteer from './components/Pages/volunteer';
import Causes from './components/Pages/causes';
import SingleCauses from './components/Pages/singlecause';
import SingleEvent from './components/Pages/eventsingle';
import Event from './components/Pages/event';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home2/>} exact />
      {/* <Route path="/signup" element={<SignUp/>} exact />
      <Route path="/signin" element={<SignIn/>} exact /> */}
      <Route path="/contact" element={<Contact/>} exact />
      <Route path="/donate" element={<Donate/>} exact />
      <Route path="/about" element={<About/>} exact />
      <Route path="/blog" element={<Blog/>} exact />
      <Route path="/detail" element={<BlogDetail/>} exact />
      <Route path="/volunteer" element={<Volunteer/>} exact />
      <Route path="/cause" element={<Causes/>} exact />
      <Route path="/cause-detail" element={<SingleCauses/>} exact />
      <Route path="/event" element={<Event/>} exact />
      <Route path="/event-detail" element={<SingleEvent/>} exact />
    </Routes>
  </BrowserRouter>
  );
}



export default App;









