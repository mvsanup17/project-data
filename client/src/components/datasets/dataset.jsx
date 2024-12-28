import React from "react";
import Navbar from "../navbar/navbar";
import '../datasets/dataset.css';
import Cards from "../cards/cards";
import Footer from "../footer/footer.jsx";

function Dataset(){
    return(
        <div>
            <Navbar/>
            <br/><br/><br/>
            <h2 className="text-center text-ho">Datasets</h2>
            <br/>
            <Cards/>
            <br/>
            <br />
            <Footer/>
        </div>
    )
}
export default Dataset;