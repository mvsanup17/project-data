import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../navbar/navbar.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import '../dataset.css';

const Collegedata = () => {
    const [clgdata, setClgData] = useState([]);

    //downloading excel format
    const tableref = useRef(null)
    const {onDownload} = useDownloadExcel({
        currentTableRef:tableref.current,
        filename: 'Colleges Data',
        sheet: 'Colleges Data',
    })

    //downloading pdf format
    const componentPDF = useRef();
    const generathPDF = useReactToPrint({
        content: ()=>componentPDF.current,
        documentTitle: 'Colleges Data',
        onAfterPrint: ()=>alert("Data Downloaded in PDF")

    });




    useEffect(() => {
        axios.get('http://localhost:6700/getclg')
            .then((response) => {
                setClgData(response.data.clgdata);
            })
            .catch((error) => {
                console.log('Error fetching college data:', error);
            });
    }, []);

    const del = (id) => {
        axios.delete(`http://localhost:6700/deleteclg/${id}`)
            .then((response) => {
                console.log(response);
                alert("Data Deleted Successfully");
                // Instead of full page reload, update stdata after deletion
                setClgData(clgdata.filter(clg => clg._id !== id));
            })
            .catch((error) => {
                console.log('Error deleting college data:', error);
            });
    };

    return (
        <div>
            <Navbar /> 
            <br/><br /><br />
            <h2 className="text-center text-des">Colleges Data</h2>
            <br/>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-outline-success me-md-2" type="button" onClick={onDownload}>
                    Excel
                </button>
                <button className="btn btn-outline-success" type="button" onClick={generathPDF}>
                    PDF
                </button>
                <button className="btn btn-outline-success" type="button" >
                    <CSVLink data={clgdata} filename={"Colleges Data"} className="bl">CSV</CSVLink>
                </button>

            </div>
            
            <br/>
            <center>
                <div className="table-responsive" ref={componentPDF}>
                    <table border={2} align="center" className="table table-success table-striped-columns table-success" ref={tableref}>
                        <thead className="table-dark">
                            <tr>
                                <th>S.NO</th>
                                <th>College Name</th>
                                <th>State</th>
                                <th>Courses</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clgdata.length > 0 ? (
                                clgdata.map((clg, index) => (
                                    <tr key={clg._id}>
                                        <td>{index + 1}</td>
                                        <td>{clg.name}</td>
                                        <td>{clg.state}</td>
                                        <td>{clg.course}</td>
                                        <td><Link to={`/college-edit/${clg._id}`}><button className="btn btn-info">Edit</button></Link></td>
                                        <td><button onClick={() => del(clg._id)}  className="btn btn-danger">Delete</button></td>
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
                <Link to='/college-form'>
                    <button class="btn btn-outline-success" type="button">Add Data</button>
                </Link>
            </div>
        </div>
    );
};

export default Collegedata;
