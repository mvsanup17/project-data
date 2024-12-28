import React from "react";
import { Link } from "react-router-dom";
import "../cards/cards.css";

function Cards() {
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-lg-3 col-md-6 mb-4 ">
                    <div className="card h-100 cards">
                        <img src={`http://localhost:6700/imgData/file_1719145518120.avif`} alt="img" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Students Data</h5>
                            <p className="card-text">
                                This students dataset contains of student's name, roll number, branch, college etc.
                                It basically tells about the students details.
                            </p>
                            <br />
                            <Link to='/students-data'>
                                <button className="btn-block card-btn">View</button>
                            </Link>
                            <button className="btn-block  download-btn">Download</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100 cards">
                        <img src={`http://localhost:6700/imgData/file_1719145627791.webp`} alt="img" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Employee Data</h5>
                            <p className="card-text">
                                The employee dataset comprises various fields that provides information about each staff member.
                            </p>
                            <br />
                            <Link to='/employee-data'>
                                <button className="btn-block card-btn">View</button>
                            </Link>
                            <button className="btn-block  download-btn">Download</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100 cards">
                        <img src={`http://localhost:6700/imgData/file_1719145712908.jpg`} alt="img" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">IMDb Data</h5>
                            <p className="card-text">
                                The IMDb dataset includes information on various movies, each listed with its name, release year, genre, and rating. 
                            </p>
                            <br />
                            <Link to='/imdb-data'>
                                <button className="btn-block card-btn">View</button>
                            </Link>
                            <button className="btn-block  download-btn">Download</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100 cards">
                        <img src={`http://localhost:6700/imgData/file_1719145783387.jpg`} alt="img" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Medical Data</h5>
                            <p className="card-text">
                                I have created a comprehensive medical dataset that includes detailed information on various diseases.
                            </p>
                            <br />
                            <Link to='/medical-data'>
                                <button className="btn-block card-btn">View</button>
                            </Link>
                            <button className="btn-block  download-btn">Download</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100 cards">
                        <img src={`http://localhost:6700/imgData/file_1719145898902.avif`} alt="img" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Accessories</h5>
                            <p className="card-text">
                                Accessories dataset featuring a diverse range of products. 
                                Each entry includes essential details such as the Available Sizes.
                            </p>
                            <br />
                            <Link to='/clothes-data'>
                                <button className="btn-block card-btn">View</button>
                            </Link>
                            <button className="btn-block  download-btn">Download</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100 cards">
                        <img src={`http://localhost:6700/imgData/file_1719145968909.jpg`} alt="img" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Indian Stock Market</h5>
                            <p className="card-text">
                                Indian stock market dataset compiles information on various companies including their Current Stock Price.
                            </p>
                            <br />
                            <Link to='/stocks-data'>
                                <button className="btn-block card-btn">View</button>
                            </Link>
                            <button className="btn-block  download-btn">Download</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100 cards">
                        <img src={`http://localhost:6700/imgData/file_1719146044964.avif`} alt="img" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Tech Devices</h5>
                            <p className="card-text">
                                Explore our latest collection of tech devices, featuring a variety of innovative products that suits every need.
                            </p>
                            <br />
                            <Link to='/tech-data'>
                                <button className="btn-block card-btn">View</button>
                            </Link>
                            <button className="btn-block  download-btn">Download</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100 cards">
                        <img src={`http://localhost:6700/imgData/file_1719145234943.jpg`} alt="img" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Indian Colleges</h5>
                            <p className="card-text">
                                This dataset includes renowned colleges and educational opportunities available across India.
                            </p>
                            <br />
                            <Link to='/college-data'>
                                <button className="btn-block card-btn">View</button>
                            </Link>
                            <button className="btn-block  download-btn">Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
