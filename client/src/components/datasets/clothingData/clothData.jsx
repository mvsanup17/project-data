import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../navbar/navbar.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import '../dataset.css';

const Clothesdata = () => {
    const [clothdata, setClothData] = useState([]);

    //downloading excel format
    const tableref = useRef(null)
    const {onDownload} = useDownloadExcel({
        currentTableRef:tableref.current,
        filename: 'Clothes Data',
        sheet: 'Clothes Data',
    })

    //downloading pdf format
    const componentPDF = useRef();
    const generathPDF = useReactToPrint({
        content: ()=>componentPDF.current,
        documentTitle: 'Clothes Data',
        onAfterPrint: ()=>alert("Data Downloaded in PDF")

    });




    useEffect(() => {
        axios.get('http://localhost:6700/getcloth')
            .then((response) => {
                setClothData(response.data.clothdata);
            })
            .catch((error) => {
                console.log('Error fetching clothes data:', error);
            });
    }, []);

    const del = (id) => {
        axios.delete(`http://localhost:6700/deletecloth/${id}`)
            .then((response) => {
                console.log(response);
                alert("Data Deleted Successfully");
                // Instead of full page reload, update stdata after deletion
                setClothData(clothdata.filter(cloth => cloth._id !== id));
            })
            .catch((error) => {
                console.log('Error deleting clothes data:', error);
            });
    };

    return (
        <div>
            <Navbar /> 
            <br/><br /><br />
            <h2 className="text-center text-des">Clothes Data</h2>
            <br/>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-outline-success me-md-2" type="button" onClick={onDownload}>
                    Excel
                </button>
                <button className="btn btn-outline-success" type="button" onClick={generathPDF}>
                    PDF
                </button>
                <button className="btn btn-outline-success" type="button" >
                    <CSVLink data={clothdata} filename={"Clothes Data"} className="bl">CSV</CSVLink>
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
                                <th>Brand</th>
                                <th>Gender</th>
                                <th>Price</th>
                                <th>Available Size</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clothdata.length > 0 ? (
                                clothdata.map((cloth, index) => (
                                    <tr key={cloth._id}>
                                        <td>{index + 1}</td>
                                        <td>{cloth.name}</td>
                                        <td>{cloth.brand}</td>
                                        <td>{cloth.gender}</td>
                                        <td>{cloth.price}</td>
                                        <td>{cloth.size}</td>
                                        <td><Link to={`/clothes-edit/${cloth._id}`}><button className="btn btn-info">Edit</button></Link></td>
                                        <td><button onClick={() => del(cloth._id)}  className="btn btn-danger">Delete</button></td>
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
                <Link to='/clothes-form'>
                    <button class="btn btn-outline-success" type="button">Add Data</button>
                </Link>
            </div>
        </div>
    );
};

export default Clothesdata;
