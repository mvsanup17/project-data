import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Stockedit = () => {
    const { id } = useParams(); // Get the ID from the route parameters

    const [stkFormData, setStkFormData] = useState({
        name: '',
        sector: '',
        market: '',
        price: ''
    });

    useEffect(() => {
        // Fetch student data by ID when the component mounts
        axios.get(`http://localhost:6700/getstock/${id}`)
            .then((res) => {
                console.log(res.data);
                // Update state with fetched data
                setStkFormData(res.data.stockdata);
            })
            .catch((err) => console.log(err));
    }, [id]); // Include 'id' in the dependency array

    const handleSub = async (e) => {
        e.preventDefault();
        console.log(stkFormData);
        try {
            // Send PUT request to update student data
            const response = await axios.put(`http://localhost:6700/updatestock/${id}`, stkFormData);
            alert(response.data.msg); // Display success message
        } catch (error) {
            console.log(error); // Log any errors
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStkFormData({ ...stkFormData, [name]: value });
    };

    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={handleSub}>
                <label>Company Name</label>
                <input
                    type="text"
                    name="name"
                    value={stkFormData.name}
                    onChange={handleChange}
                />
                <br />
                <label>Sector</label>
                <input
                    type="text"
                    name="sector"
                    value={stkFormData.sector}
                    onChange={handleChange}
                />
                <br />
                <label>Market Capitalization</label>
                <input
                    type="text"
                    name="market"
                    value={stkFormData.market}
                    onChange={handleChange}
                />
                <br />
                <label>Current Price</label>
                <input
                    type="text"
                    name="price"
                    value={stkFormData.price}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Stockedit;