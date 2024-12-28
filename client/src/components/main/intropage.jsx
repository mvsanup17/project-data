import React from "react";
import "../main/intropage.css";
import { Link } from "react-router-dom";
import {useTypewriter, Cursor} from 'react-simple-typewriter';

function Intropage(){

    const [text] = useTypewriter({
        words : ['Your Gateway to Diverse Datasets'],
        loop : true
    });
    
    return(
        <div className="intro-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>myData</h1>
                        <h3 className="text-color">
                            {text}
                            <Cursor/>
                        </h3>
                        <Link to='/home' className="btn btn-success m-3">View</Link>
                        {/* <Link to='/signup' className="btn btn-success m-3">Sign Up</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Intropage;