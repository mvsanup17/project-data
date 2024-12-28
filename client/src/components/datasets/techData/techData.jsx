import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../navbar/navbar.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import '../dataset.css';

const Techdata = () => {
    const [techdata, setTechData] = useState([]);

    //downloading excel format
    const tableref = useRef(null)
    const {onDownload} = useDownloadExcel({
        currentTableRef:tableref.current,
        filename: 'Tech Devices Data',
        sheet: 'Tech Devices Data',
    })

    //downloading pdf format
    const componentPDF = useRef();
    const generathPDF = useReactToPrint({
        content: ()=>componentPDF.current,
        documentTitle: 'Tech Devices Data',
        onAfterPrint: ()=>alert("Data Downloaded in PDF")

    });




    useEffect(() => {
        axios.get('http://localhost:6700/gettech')
            .then((response) => {
                setTechData(response.data.techdata);
            })
            .catch((error) => {
                console.log('Error fetching tech devices data:', error);
            });
    }, []);

    const del = (id) => {
        axios.delete(`http://localhost:6700/deletetech/${id}`)
            .then((response) => {
                console.log(response);
                alert("Data Deleted Successfully");
                // Instead of full page reload, update stdata after deletion
                setTechData(techdata.filter(tech => tech._id !== id));
            })
            .catch((error) => {
                console.log('Error deleting Tech devices data:', error);
            });
    };

    return (
        <div>
            <Navbar /> 
            <br/><br /><br />
            <h2 className="text-center text-des">Tech Devices Data</h2>
            <br/>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-outline-success me-md-2" type="button" onClick={onDownload}>
                    Excel
                </button>
                <button className="btn btn-outline-success" type="button" onClick={generathPDF}>
                    PDF
                </button>
                <button className="btn btn-outline-success" type="button" >
                    <CSVLink data={techdata} filename={"Tech Devices Data"} className="bl">CSV</CSVLink>
                </button>

            </div>
            
            <br/>
            <center>
                <div className="table-responsive" ref={componentPDF}>
                    <table border={2} align="center" className="table table-success table-striped-columns table-success" ref={tableref}>
                        <thead className="table-dark">
                            <tr>
                                <th>S.NO</th>
                                <th>Product Name</th>
                                <th>Color</th>
                                <th>Features</th>
                                <th>Price</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {techdata.length > 0 ? (
                                techdata.map((tech, index) => (
                                    <tr key={tech._id}>
                                        <td>{index + 1}</td>
                                        <td>{tech.name}</td>
                                        <td>{tech.color}</td>
                                        <td>{tech.feature}</td>
                                        <td>{tech.price}</td>
                                        <td><Link to={`/tech-edit/${tech._id}`}><button className="btn btn-info">Edit</button></Link></td>
                                        <td><button onClick={() => del(tech._id)}  className="btn btn-danger">Delete</button></td>
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
                <Link to='/tech-form'>
                    <button class="btn btn-outline-success" type="button">Add Data</button>
                </Link>
            </div>
        </div>
    );
};

export default Techdata;
