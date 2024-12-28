import React from "react";
import Navbar from "../navbar/navbar.jsx";
import '../about/about.css';
// import imglogo from "../imgs/logo.png";
import Footer from "../footer/footer.jsx";

function About(){
    return(
        <div>
            <Navbar/>
            <br/><br/><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={`http://localhost:6700/imgData/file_1719146193977.png`} alt="img" className="img-fluid img-hov" />
                    </div>
                    <br />
                    <div className="col-lg-8">
                        <h2 className="text-ho">About us</h2>
                        <p>
                            <b>myData</b> your ultimate destination for accessing and downloading a diverse range of datasets tailored to meet your needs. 
                            At <b>myData</b>, we believe in the power of information and its potential to drive innovation, solve problems, and fuel progress across 
                            various domains. Whether you are a researcher, data analyst, 
                            student, or enthusiast, our platform is designed to provide you with the data you need to excel in your projects and endeavors.
                        </p>
                        <h3 className="text-ho">Our Mission</h3>
                        <p>
                            <b>Our mission is simple:</b> To democratize access to high-quality data and empower individuals and organizations with 
                            the tools and resources they need to make informed decisions. 
                            We are committed to fostering a culture of data literacy and promoting the use of data in ways that benefit society.
                        </p>
                        <p>
                            At myData, we are dedicated to continuous improvement and innovation. 
                            We actively seek feedback from our users to enhance our platform and expand our dataset offerings. 
                            Our goal is to create a dynamic and evolving resource that adapts to the ever-changing landscape of data and technology.
                        </p>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="text-ho">What we offer</h3>
                        <p>
                           <b>myData</b> hosts a comprehensive collection of datasets spanning multiple categories, 
                           including but not limited to: hosts a comprehensive collection of datasets spanning multiple categories,
                           including but not limited to:
                        </p>
                        <ol>
                            <li>
                                <b>Science and Technology:</b> From cutting-edge research findings to technological
                                advancements, explore datasets that push the boundaries of knowledge.
                            </li>
                            <li>
                                <b>Economics and Finance:</b> Access financial reports, economic indicators, market analyses,
                                and more to stay ahead in the world of finance.
                            </li>
                            <li>
                                <b>Health and Medicine:</b> Discover datasets that contribute to medical research, 
                                public health initiatives, and healthcare innovations.
                            </li>
                        </ol>
                        <br />
                        <h3 className="text-ho">Why myData ?</h3>
                        <ol>
                            <li>
                                <b>Quality and Reliability: </b> We prioritize the integrity and accuracy of our datasets. 
                                Each dataset is meticulously curated and verified to
                                 ensure it meets high standards of quality and reliability.
                            </li>
                            <li>
                                <b>Ease of Access: </b> Our user-friendly interface makes it easy for you to search, preview, and download datasets.
                                 Whether you're a seasoned
                                 data professional or a newcomer, you'll find our platform intuitive and accessible.
                            </li>
                            <li>
                                <b>Diverse Collection: </b> Our extensive repository encompasses a wide range of fields and topics,
                                 ensuring that you can find the data you need for any project or research.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <br />
            <Footer/>
        </div>
    )
}
export default About;