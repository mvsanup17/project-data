import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../navbar/navbar.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import '../dataset.css';

const Meddata = () => {
    const [meddata, setMedData] = useState([]);

    //downloading excel format
    const tableref = useRef(null)
    const {onDownload} = useDownloadExcel({
        currentTableRef:tableref.current,
        filename: 'Medical Data',
        sheet: 'Medical Data',
    })

    //downloading pdf format
    const componentPDF = useRef();
    const generathPDF = useReactToPrint({
        content: ()=>componentPDF.current,
        documentTitle: 'Medical Data',
        onAfterPrint: ()=>alert("Data Downloaded in PDF")

    });




    useEffect(() => {
        axios.get('http://localhost:6700/getmed')
            .then((response) => {
                setMedData(response.data.meddata);
            })
            .catch((error) => {
                console.log('Error fetching medical data:', error);
            });
    }, []);

    const del = (id) => {
        axios.delete(`http://localhost:6700/deletemed/${id}`)
            .then((response) => {
                console.log(response);
                alert("Data Deleted Successfully");
                // Instead of full page reload, update stdata after deletion
                setMedData(meddata.filter(med => med._id !== id));
            })
            .catch((error) => {
                console.log('Error deleting medical data:', error);
            });
    };

    return (
        <div>
            <Navbar /> 
            <br/><br /><br />
            <h2 className="text-center text-des">Medical Data</h2>
            <br/>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-outline-success me-md-2" type="button" onClick={onDownload}>
                    Excel
                </button>
                <button className="btn btn-outline-success" type="button" onClick={generathPDF}>
                    PDF
                </button>
                <button className="btn btn-outline-success" type="button" >
                    <CSVLink data={meddata} filename={"Medical Data"} className="bl">CSV</CSVLink>
                </button>
            </div>
            <br />
            <br/>
            <center>
                <div className="table-responsive" ref={componentPDF}>
                    <table border={2} align="center" className="table table-success table-striped-columns table-success" ref={tableref}>
                        <thead className="table-dark">
                            <tr>
                                <th>S.NO</th>
                                <th>Disease Name</th>
                                <th>Symptoms</th>
                                <th>Medication</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {meddata.length > 0 ? (
                                meddata.map((med, index) => (
                                    <tr key={med._id}>
                                        <td>{index + 1}</td>
                                        <td>{med.name}</td>
                                        <td>{med.symptom}</td>
                                        <td>{med.medication}</td>
                                        <td><Link to={`/medical-edit/${med._id}`}><button className="btn btn-info">Edit</button></Link></td>
                                        <td><button onClick={() => del(med._id)}  className="btn btn-danger">Delete</button></td>
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
                <Link to='/medical-form'>
                    <button class="btn btn-outline-success" type="button">Add Data</button>
                </Link>
            </div>
        </div>
    );
};

export default Meddata;
