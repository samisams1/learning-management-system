import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, CourseHome, Blog, Contact, Footer, Header, Home, Pricing, Team, Dashboard, Navbar } from './components';
import './App.css';
import './App1.css';
function App(){
return(
  <Router>
    Header
    <Routes><Route element ={<Home/>}  path=''/></Routes>
    <Routes><Route element={<Team/>} path='/team'/></Routes>
    <Routes><Route element={<About/>} path='/about'/></Routes>
    <Routes><Route element={<CourseHome/>} path='courses'/></Routes>
    <Routes><Route element={<Pricing/>} path='pricing'/></Routes>
    <Routes><Route element={<Blog/>}  path='blog'/></Routes>
    <Routes><Route element={<Contact/>} path='contact'/></Routes>
  
     
     <Navbar/>
    <Routes><Route element={<Dashboard/>} path='dashboard'/></Routes>
    Footer
  </Router>
)
}
export default App;
