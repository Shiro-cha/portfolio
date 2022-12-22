import {useState,useEffect} from "react";
import "./assets/bootstrap/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import CV from "./pages/CV/CV";
import HireMe from "./pages/HireMe/HireMe";

export default function App(){

  const [page,setPage] = useState(null);
  const [textRooter,setTextRooter] = useState("home");

  useEffect(function(){
    switch (textRooter) {
      case "home":
        setPage(<Home setTextRooter={setTextRooter}/>);
        break;
      case "project":
        setPage(<Project />);
        break;
      case "cv":
        setPage(<CV />);
        break;
      case "hire-me":
        setPage(<HireMe />);
        break;
      default:
        setPage(<Home setTextRooter={setTextRooter}/>);

    }
  },[textRooter]);

  return(
    <>
    <Header setTextRooter={setTextRooter}/>
    {page}
    <Footer/>
    </>
  )

}
