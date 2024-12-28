import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Techedit = () => {
    const { id } = useParams(); // Get the ID from the route parameters

    const [techFormData, setTechFormData] = useState({
        name: '',
        color: '',
        feature: '',
        price: ''
    });

    useEffect(() => {
        // Fetch student data by ID when the component mounts
        axios.get(`http://localhost:6700/gettech/${id}`)
            .then((res) => {
                console.log(res.data);
                // Update state with fetched data
                setTechFormData(res.data.technodata);
            })
            .catch((err) => console.log(err));
    }, [id]); // Include 'id' in the dependency array

    const handleSub = async (e) => {
        e.preventDefault();
        console.log(techFormData);
        try {
            // Send PUT request to update student data
            const response = await axios.put(`http://localhost:6700/updatetech/${id}`, techFormData);
            alert(response.data.msg); // Display success message
        } catch (error) {
            console.log(error); // Log any errors
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTechFormData({ ...techFormData, [name]: value });
    };

    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={handleSub}>
                <label>Product Name</label>
                <input
                    type="text"
                    name="name"
                    value={techFormData.name}
                    onChange={handleChange}
                />
                <br />
                <label>Color</label>
                <input
                    type="text"
                    name="color"
                    value={techFormData.color}
                    onChange={handleChange}
                />
                <br />
                <label>Features</label>
                <input
                    type="text"
                    name="feature"
                    value={techFormData.feature}
                    onChange={handleChange}
                />
                <br />
                <label>Price</label>
                <input
                    type="text"
                    name="price"
                    value={techFormData.price}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Techedit;