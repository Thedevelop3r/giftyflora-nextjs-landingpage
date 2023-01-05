// import Head from "next/head";
// import Image from "next/image";
// import "../../styles/Home.module.css"
import { Inter } from "@next/font/google";
import Navbar from "../Components/Navbar";
import MainSliker from "../Components/MainSliker";
import QuickServices from "../Components/QuickServices";
import ImageGallery from "../Components/ImageGallery";
import Couresal from "../Components/Couresal";
import AboutUs from "../Components/AboutUs";
import WhyUs from "../Components/WhyUs";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <div className="mainBody">
      <div className="MainContainer">
        <Navbar />
        <MainSliker />
        <QuickServices />
        <ImageGallery />
        <Couresal bgcolorgrey={false} />
        <Couresal bgcolorgrey={true} />
        <Couresal bgcolorgrey={false} />
        <Couresal bgcolorgrey={true} />
        <Couresal bgcolorgrey={false} />
        <Couresal bgcolorgrey={true} />
        <AboutUs/>
        <WhyUs />
        <Blogs/>
        <Footer/>
      </div>
    </div>
  );
}
