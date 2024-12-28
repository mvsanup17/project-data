import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../navbar/navbar.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import '../dataset.css';

const Stockdata = () => {
    const [stkdata, setStkData] = useState([]);

    //downloading excel format
    const tableref = useRef(null)
    const {onDownload} = useDownloadExcel({
        currentTableRef:tableref.current,
        filename: 'Indian Stock Market Data',
        sheet: 'Indian Stock Market Data',
    })

    //downloading pdf format
    const componentPDF = useRef();
    const generathPDF = useReactToPrint({
        content: ()=>componentPDF.current,
        documentTitle: 'Indian Stock Market Data',
        onAfterPrint: ()=>alert("Data Downloaded in PDF")

    });




    useEffect(() => {
        axios.get('http://localhost:6700/getstock')
            .then((response) => {
                setStkData(response.data.stockdata);
            })
            .catch((error) => {
                console.log('Error fetching stocks data:', error);
            });
    }, []);

    const del = (id) => {
        axios.delete(`http://localhost:6700/deletestock/${id}`)
            .then((response) => {
                console.log(response);
                alert("Data Deleted Successfully");
                // Instead of full page reload, update stdata after deletion
                setStkData(stkdata.filter(stock => stock._id !== id));
            })
            .catch((error) => {
                console.log('Error deleting stocks data:', error);
            });
    };

    return (
        <div>
            <Navbar /> 
            <br/><br /><br />
            <h2 className="text-center text-des">Indian Stock Market Data</h2>
            <br/>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-outline-success me-md-2" type="button" onClick={onDownload}>
                    Excel
                </button>
                <button className="btn btn-outline-success" type="button" onClick={generathPDF}>
                    PDF
                </button>
                <button className="btn btn-outline-success" type="button" >
                    <CSVLink data={stkdata} filename={"Stocks Data"} className="bl">CSV</CSVLink>
                </button>

            </div>
            
            <br/>
            <center>
                <div className="table-responsive" ref={componentPDF}>
                    <table border={2} align="center" className="table table-success table-striped-columns table-success" ref={tableref}>
                        <thead className="table-dark">
                            <tr>
                                <th>S.NO</th>
                                <th>Company Name</th>
                                <th>Sector</th>
                                <th>Market Capitialization</th>
                                <th>Current Stock Price</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stkdata.length > 0 ? (
                                stkdata.map((stock, index) => (
                                    <tr key={stock._id}>
                                        <td>{index + 1}</td>
                                        <td>{stock.name}</td>
                                        <td>{stock.sector}</td>
                                        <td>{stock.market}</td>
                                        <td>{stock.price}</td>
                                        <td><Link to={`/stocks-edit/${stock._id}`}><button className="btn btn-info">Edit</button></Link></td>
                                        <td><button onClick={() => del(stock._id)}  className="btn btn-danger">Delete</button></td>
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
                <Link to='/stocks-form'>
                    <button class="btn btn-outline-success" type="button">Add Data</button>
                </Link>
            </div>
        </div>
    );
};

export default Stockdata;
