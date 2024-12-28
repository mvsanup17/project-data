import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../navbar/navbar.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import '../dataset.css';

const Studentsdata = () => {
    const [stdata, setStData] = useState([]);

    //downloading excel format
    const tableref = useRef(null)
    const {onDownload} = useDownloadExcel({
        currentTableRef:tableref.current,
        filename: 'Students Data',
        sheet: 'Students Data',
    })

    //downloading pdf format
    const componentPDF = useRef();
    const generathPDF = useReactToPrint({
        content: ()=>componentPDF.current,
        documentTitle: 'Students Data',
        onAfterPrint: ()=>alert("Data Downloaded in PDF")

    });




    useEffect(() => {
        axios.get('http://localhost:6700/getstudent')
            .then((response) => {
                setStData(response.data.studentdata);
            })
            .catch((error) => {
                console.log('Error fetching student data:', error);
            });
    }, []);

    const del = (id) => {
        axios.delete(`http://localhost:6700/deleteuser/${id}`)
            .then((response) => {
                console.log(response);
                alert("Data Deleted Successfully");
                // Instead of full page reload, update stdata after deletion
                setStData(stdata.filter(student => student._id !== id));
            })
            .catch((error) => {
                console.log('Error deleting student data:', error);
            });
    };

    return (
        <div>
            <Navbar /> 
            <br/><br /><br />
            <h2 className="text-center text-des">Students Data</h2>
            <br/>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-outline-success me-md-2" type="button" onClick={onDownload}>
                    Excel
                </button>
                <button className="btn btn-outline-success" type="button" onClick={generathPDF}>
                    PDF
                </button>
                <button className="btn btn-outline-success" type="button" >
                    <CSVLink data={stdata} filename={"Students Data"} className="bl">CSV</CSVLink>
                </button>

            </div>
            
            <br/>
            <center>
                <div className="table-responsive" ref={componentPDF}>
                    <table border={2} align="center" className="table table-success table-striped-columns table-success" ref={tableref}>
                        <thead className="table-dark">
                            <tr>
                                <th>S.NO</th>
                                <th>Name</th>
                                <th>Roll Number</th>
                                <th>Branch</th>
                                <th>College</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stdata.length > 0 ? (
                                stdata.map((student, index) => (
                                    <tr key={student._id}>
                                        <td>{index + 1}</td>
                                        <td>{student.name}</td>
                                        <td>{student.rollno}</td>
                                        <td>{student.branch}</td>
                                        <td>{student.college}</td>
                                        <td><Link to={`/students-edit/${student._id}`}><button className="btn btn-info">Edit</button></Link></td>
                                        <td><button onClick={() => del(student._id)}  className="btn btn-danger">Delete</button></td>
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
                <Link to='/students-form'>
                    <button class="btn btn-outline-success" type="button">Add Data</button>
                </Link>
            </div>
        </div>
    );
};

export default Studentsdata;
