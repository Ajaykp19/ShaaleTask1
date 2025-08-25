// import logo from './logo.svg';
import React from 'react';
import './App.css';

import Header from './ShaaleTask2Carousel/Header';
import Footer from './ShaaleTask2Carousel/Footer';
import Carousel1 from './ShaaleTask2Carousel/Carousel1';
import Carousel2 from './ShaaleTask2Carousel/Carousel2';
import InstrumentCarousel from './ShaaleTask2Carousel/InstrumentCarousel';
import { AlbumsData, ArchivesData, ExploreByArtData, InstrumentData, LessonsData, NewReleasesData, PerformancesData, PlaylistData, SoloData, WorkshopsData } from './ShaaleTask2Carousel/CarouselData';
import ViewAll from './ViewAll';

// import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  var sty = ()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.width = "100%";
  }

  // console.log(NewReleasesData);

  // var [mode, setMode] = useState("light");
  // var [nMode, setNMode] = useState('dark');
  // var [alert, setAlert] = useState(null);
  // var showAlert = (message,type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout( ()=>
  //     setAlert(null),3000
  //   )
  // }

  //header css
  
    // var cssNav = {
    //   backgroundColor: "white",
    //   color: "black",
    //   borderRadius: "20px",
    //   border: "solid"
    // };




  // var toggle = ()=>{
  //   if(mode==='light')
  //   {
  //     setMode('dark');
  //     setNMode('light');
  //     document.body.style.backgroundColor = '#042743';
  //     document.body.style.color = 'white';
  //     showAlert("Dark Mode is Enabled", "success");
  //     document.title = "TextUtils - DarkMode";
  //   }
  //   else
  //   {
  //     setMode('light');
  //     setNMode('dark');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //     showAlert("Light Mode is Enabled", "success");
  //     document.title = "TextUtils - LightMode";
  //   }
  // }
  return (
    <>
    <Header sty={sty}></Header>
    <Carousel1></Carousel1>
    <Carousel2 data={NewReleasesData} nItem={4} heading="New Releases" width={280} borderRadius={10} center={true}></Carousel2>
    <InstrumentCarousel data={InstrumentData} heading="Explore by Instrument" center={true}/>
    <Carousel2 data={PerformancesData } nItem={4} heading="Performances" width={280} borderRadius={10} center={true}></Carousel2>
    <Carousel2 data={WorkshopsData} nItem={4} heading="Workshops" width={280} borderRadius={10} center={true}></Carousel2>
    <Carousel2 data={ArchivesData} nItem={6} heading="Archives" width={150} borderRadius={5} center={true}></Carousel2>
    <Carousel2 data={LessonsData} nItem={4} heading="Lessons" width={280} borderRadius={10} center={true}></Carousel2>
    <Carousel2 data={PlaylistData} nItem={4} heading="Playlist" width={280} borderRadius={10} center={true}></Carousel2>
    <Carousel2 data={AlbumsData} nItem={6} heading="Albums" width={150} borderRadius={5} center={true}></Carousel2>
    <Carousel2 data={SoloData} nItem={6} heading="Solo-s On the go" width={150} borderRadius={5} center={true}></Carousel2>
    <InstrumentCarousel data={ExploreByArtData} heading="Explore by Art form" center={true}/>
    <Carousel2 data={SoloData} nItem={6} heading="Music for Classical Dance" width={150} borderRadius={5} center={true}></Carousel2>
    <Carousel2 data={PlaylistData} nItem={4} heading="Interviews & Panel Discussions" width={280} borderRadius={10} center={true}></Carousel2>
    <Carousel2 data={SoloData} nItem={6} heading="Podcasts" width={150} borderRadius={5} center={true}></Carousel2>
    <Carousel2 data={PlaylistData} nItem={4} heading="Blink Videos" width={280} borderRadius={10} center={true}></Carousel2>
    <Carousel2 data={PlaylistData} nItem={4} heading="Trending in Season" width={280} borderRadius={10} center={true}></Carousel2>
    <Carousel2 data={SoloData} nItem={6} heading="Featured Artists " width={150} borderRadius={50} center={true}></Carousel2>
    <Carousel2 data={PlaylistData} nItem={4} heading="Bharatiya Samagana Sabha Presents" width={280} borderRadius={10} center={true}></Carousel2>
    <Carousel2 data={PlaylistData} nItem={4} heading="The Sound of Swaras" width={280} borderRadius={10} center={true}></Carousel2>
    <Carousel2 data={PlaylistData} nItem={2} heading="Lessons for you" width={455} height={380} borderRadius={10} center={true}></Carousel2>
    <Carousel2 data={PlaylistData} nItem={4} heading="" width={280} borderRadius={10} autoPlay={true} center={true} loop={true}></Carousel2>
    <Carousel2 data={WorkshopsData} nItem={5} heading="" width={280} borderRadius={10} autoPlay={true} speed={2300} center={false} loop={true}></Carousel2>
    <ViewAll/>
    <InstrumentCarousel data={InstrumentData} heading="Explore by Composer" center={true}/>
    <Carousel2 data={SoloData} nItem={6} heading="Featured Duo-s" width={150} borderRadius={50} center={true}></Carousel2>
    <Carousel2 data={SoloData} nItem={6} heading="Featured Organizations" width={150} borderRadius={50} center={true}></Carousel2>
    <Carousel2 data={SoloData} nItem={6} heading="The Legends" width={150} borderRadius={50} center={true} border="5px solid" borderColor="#fa8e0a"></Carousel2>
    <Carousel2 data={PlaylistData} nItem={4} heading="Classically North" width={280} borderRadius={10} center={true}></Carousel2>
    <Carousel2 data={SoloData} nItem={6} heading="Young talents" width={150} borderRadius={50} center={true}></Carousel2>
    <Carousel2 data={PlaylistData} nItem={4} heading="Natyam & Beyond" width={280} borderRadius={10} center={true}></Carousel2>
    <Footer></Footer>
    </>
  );
}

export default App;




//<Login></Login>
// {/* <Explore></Explore>
// <Access></Access>
// <Possibilities></Possibilities>
// <Rupees></Rupees>
// <Target></Target>
// <Calender></Calender>
// <Subscribe></Subscribe>
// <Application></Application>
// <Carousel></Carousel>
// <Customer></Customer>
// <Accordion></Accordion> */}

// {/* <Router>
//     <Navbar title="TextUtils" aboutText="about" toggle={toggle} mode={mode} nMode = {nMode}></Navbar>
//     <Navbar></Navbar> used for default values
//     <Alert alert={alert}/>
//     <div className="container">
//     <Routes>
//             <Route exact path="/about" element={<About mode={mode} nMode={nMode} />}></Route>
//             <Route exact path="/home" element={<TextFrom showAlert={showAlert} heading="Enter your text here" mode={mode} nMode={nMode}></TextFrom>}></Route>
//     </Routes>
//     <TextFrom showAlert={showAlert} heading="Enter your text here" mode={mode} nMode={nMode}></TextFrom>
//     </div>
//     <About mode={mode} nMode={nMode}></About>
//     </Router> */}