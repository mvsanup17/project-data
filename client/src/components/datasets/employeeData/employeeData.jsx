import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../navbar/navbar.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import '../dataset.css';

const EmployeeData = () => {
    const [empdata, setEmpData] = useState([]);

    //downloading excel format
    const tableref = useRef(null)
    const {onDownload} = useDownloadExcel({
        currentTableRef:tableref.current,
        filename: 'Employee Data',
        sheet: 'Employee Data',
    })

    //downloading pdf format
    const componentPDF = useRef();
    const generathPDF = useReactToPrint({
        content: ()=>componentPDF.current,
        documentTitle: 'Employee Data',
        onAfterPrint: () => alert("Data Downloaded in PDF")

    });




    useEffect(() => {
        axios.get('http://localhost:6700/getemployee')
            .then((response) => {
                setEmpData(response.data.employeedata);
            })
            .catch((error) => {
                console.log('Error fetching student data:', error);
            });
    }, []);

    const del = (id) => {
        axios.delete(`http://localhost:6700/deleteemp/${id}`)
            .then((response) => {
                console.log(response);
                alert("Data Deleted Successfully");
                // Instead of full page reload, update stdata after deletion
                setEmpData(empdata.filter(employee => employee._id !== id));
            })
            .catch((error) => {
                console.log('Error deleting employee data:', error);
            });
    };

    return (
        <div>
            <Navbar/> 
            <br/><br /><br />
            <h2 className="text-center text-des">Employee Data</h2>
            <br/><br/>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-outline-success me-md-2" type="button" onClick={onDownload}>
                    Excel
                </button>
                <button className="btn btn-outline-success" type="button" onClick={generathPDF}>
                    PDF
                </button>
                <button className="btn btn-outline-success" type="button" >
                    <CSVLink data={empdata} filename={"Employee Data"} className="bl">CSV</CSVLink>
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
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Designation</th>
                                <th>Salary</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata.length > 0 ? (
                                empdata.map((employee, index) => (
                                    <tr key={employee._id}>
                                        <td>{index + 1}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.designation}</td>
                                        <td>{employee.salary}</td>
                                        <td><Link to={`/employee-edit/${employee._id}`}><button className="btn btn-info">Edit</button></Link></td>
                                        <td><button onClick={() => del(employee._id)}  className="btn btn-danger">Delete</button></td>
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
                <Link to='/employee-form'>
                    <button class="btn btn-outline-success" type="button">Add Data</button>
                </Link>
            </div>
        </div>
    );
}
export default EmployeeData;