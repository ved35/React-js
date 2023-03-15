import React from "react";
import Navbar from "../components/navbar/Navbar";
import './Home.css'

import Feature from "../components/feature/Feature";
import List from "../components/list/List"
import Footer from "../components/footer/Footer.jsx";


const Home = () =>{
    return(
        <div className="home">
            <Navbar />
            <Feature />
            <List />
            <List />
            <List />
            <Footer />
        </div>
    )
} 
export default Home ;