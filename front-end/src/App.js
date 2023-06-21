import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Allcourses, Blog, Contact, Footer, Header, Home, Pricing, Team } from './components';
import './App.css';
function App(){
return(
  <Router>
    <Header/>
    <Routes><Route element ={<Home/>}  path=''/></Routes>
    <Routes><Route element={<Team/>} path='/team'/></Routes>
    <Routes><Route element={<Allcourses/>} path='allCourses'/></Routes>
    <Routes><Route element={<Pricing/>} path='pricing'/></Routes>
    <Routes><Route element={<Blog/>}  path='contact'/></Routes>
    <Routes><Route element={<Contact/>}  path='contact'/></Routes>
    <Footer/>
  </Router>
)
}
export default App;
