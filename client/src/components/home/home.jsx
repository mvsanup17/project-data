import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar.jsx";
import "../home/home.css";
// import { useState,useEffect } from "react";
// import homeimg from "../imgs/pic.jpg";
// import homeimg2 from "../imgs/data-vis.avif";
// import homeimg3 from "../imgs/data-circuit.jpg";
import Footer from "../footer/footer.jsx";


function Home(){



    return(
        <div>
            <Navbar/>
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <br />
                    <div className="col-lg-4">
                        <img src={`http://localhost:6700/imgData/file_1719146376314.jpg`} alt="home img" className="img-fluid img-ho" srcset="" />
                    </div>
                    <div className="col-lg-8">
                        <h2 className="text-des">Hello Welcome to myData</h2>
                        <p>
                            Welcome to <b>myData</b>, your one-stop destination for a vast collection of datasets spanning various domains and industries. 
                            Whether you're a researcher, data scientist,
                            student, or enthusiast, <b>myData</b> offers you easy access to a wealth of information to fuel your projects and insights.
                        </p>
                        <p>
                            Dive into our extensive library of datasets, meticulously curated and organized for your convenience. 
                            From social sciences and healthcare to finance, 
                            environmental studies, and more, <b>myData</b> provides you with the tools you need to explore, analyze, and innovate.
                        </p>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h3 className="text-des">How it works ?</h3>
                            <ol>
                                <li>
                                    <b>Explore:</b> Explore our categories or use the search function to find specific datasets.
                                </li>
                                <li>
                                    <b>Download:</b> Easily download datasets in various formats suitable for your tools and software.
                                </li>
                                <li>
                                    <b>Utilize:</b> Incorporate the data into your analyses, models, and reports to drive impactful results.
                                </li>
                            </ol>
                        <h3 className="text-des">Choose mydata</h3>
                        <p>
                            Dive into the world of data with mydata and unlock endless possibilities. Start exploring our extensive dataset collection, 
                            download what you need, and take your projects to the next level. With <b>myData</b>, the power of information is just a click away.
                               
                            <span><Link to='/datasets' className="texcol p-2">click here</Link></span>
                        </p>
                        
                    </div>
                    <div className="col-lg-4">
                        <img src={`http://localhost:6700/imgData/file_1719146299394.avif`} className="img-fluid img-ho" alt="img" />
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={`http://localhost:6700/imgData/file_1719146254547.jpg`} className="img-fluid img-ho" alt="img" />
                    </div>
                    <div className="col-lg-8">
                        <h3 className="text-des">Key Features</h3>
                        <p>
                            <b>Extensive Dataset Library: </b> Explore a diverse range of datasets covering multiple domains such as healthcare, finance, education, environmental science, social sciences, and more.
                            Our library is constantly updated to ensure you have access to the latest and most relevant data.
                        </p>
                        <p>
                            <b>Secure Downloads:</b> Ensure the integrity and security of
                            your data with our reliable download system. We prioritize your privacy and data security at every step.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;