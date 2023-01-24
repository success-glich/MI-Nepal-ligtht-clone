import './App.css'
import PreNavbar from './components/PreNavbar'
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Slider from './components/Slider';
import data from "./data/data.json";
import Offer from "./components/Offers";
import Heading from "./components/Heading";
// import StarProducts from "./components/StarProduct";

import Video from "./components/Video";
import Footer from "./components/Footer"
import NavOption from "./components/NavOption"


function App() {

  return (
    <>
    <Router>
    <PreNavbar />
    <Navbar />
    <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
    <Slider  start={data.banner.start}/>
    <Offer offers= {data.offer} />
      <Heading text="VIDEOS " />

      <Video videos = {data.videos} />
      <Footer footer ={data.footer} />
    </Router>
    </>
  )
}

export default App
