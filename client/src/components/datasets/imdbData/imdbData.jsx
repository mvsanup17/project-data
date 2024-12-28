import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../navbar/navbar.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import '../dataset.css';

const Imdbdata = () => {
    const [imdbdata, setImdbData] = useState([]);

    //downloading excel format
    const tableref = useRef(null)
    const {onDownload} = useDownloadExcel({
        currentTableRef:tableref.current,
        filename: 'IMDb Data',
        sheet: 'IMDb Data',
    })

    //downloading pdf format
    const componentPDF = useRef();
    const generathPDF = useReactToPrint({
        content: ()=>componentPDF.current,
        documentTitle: 'IMDb Data',
        onAfterPrint: ()=>alert("Data Downloaded in PDF")

    });




    useEffect(() => {
        axios.get('http://localhost:6700/getimdb')
            .then((response) => {
                setImdbData(response.data.imdbdata);
            })
            .catch((error) => {
                console.log('Error fetching student data:', error);
            });
    }, []);

    const del = (id) => {
        axios.delete(`http://localhost:6700/deleteimdb/${id}`)
            .then((response) => {
                console.log(response);
                alert("Data Deleted Successfully");
                // Instead of full page reload, update stdata after deletion
                setImdbData(imdbdata.filter(imdb => imdb._id !== id));
            })
            .catch((error) => {
                console.log('Error deleting student data:', error);
            });
    };

    return (
        <div>
            <Navbar /> 
            <br/><br /><br />
            <h2 className="text-center text-des">IMDb Data</h2>
            <br/>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-outline-success me-md-2" type="button" onClick={onDownload}>
                    Excel
                </button>
                <button className="btn btn-outline-success" type="button" onClick={generathPDF}>
                    PDF
                </button>
                <button className="btn btn-outline-success" type="button" >
                    <CSVLink data={imdbdata} filename={"IMDb Data"} className="bl">CSV</CSVLink>
                </button>

            </div>
            
            <br/>
            <center>
                <div className="table-responsive" ref={componentPDF}>
                    <table border={2} align="center" className="table table-success table-striped-columns table-success" ref={tableref}>
                        <thead className="table-dark">
                            <tr>
                                <th>S.NO</th>
                                <th>Movie Name</th>
                                <th>Release</th>
                                <th>Genre</th>
                                <th>Rating</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {imdbdata.length > 0 ? (
                                imdbdata.map((imdb, index) => (
                                    <tr key={imdb._id}>
                                        <td>{index + 1}</td>
                                        <td>{imdb.name}</td>
                                        <td>{imdb.release}</td>
                                        <td>{imdb.genre}</td>
                                        <td>{imdb.rating}</td>
                                        <td><Link to={`/imdb-edit/${imdb._id}`}><button className="btn btn-info">Edit</button></Link></td>
                                        <td><button onClick={() => del(imdb._id)}  className="btn btn-danger">Delete</button></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6}>Data Loading...</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </center>

            <div class="d-grid gap-2 d-md-block">
                <Link to='/imdb-form'>
                    <button class="btn btn-outline-success" type="button">Add Data</button>
                </Link>
            </div>
        </div>
    );
};

export default Imdbdata;
