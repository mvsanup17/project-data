import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Clothesedit = () => {
    const { id } = useParams(); // Get the ID from the route parameters

    const [clothFormData, setClothFormData] = useState({
        name: '',
        brand: '',
        gender: '',
        price: '',
        size:''
    });

    useEffect(() => {
        // Fetch student data by ID when the component mounts
        axios.get(`http://localhost:6700/getcloth/${id}`)
            .then((res) => {
                console.log(res.data);
                // Update state with fetched data
                setClothFormData(res.data.clothdata);
            })
            .catch((err) => console.log(err));
    }, [id]); // Include 'id' in the dependency array

    const handleSub = async (e) => {
        e.preventDefault();
        console.log(clothFormData);
        try {
            // Send PUT request to update student data
            const response = await axios.put(`http://localhost:6700/updatecloth/${id}`, clothFormData);
            alert(response.data.msg); // Display success message
        } catch (error) {
            console.log(error); // Log any errors
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setClothFormData({ ...clothFormData, [name]: value });
    };

    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={handleSub}>
                <label>Product Name</label>
                <input
                    type="text"
                    name="name"
                    value={clothFormData.name}
                    onChange={handleChange}
                />
                <br />
                <label>Brand</label>
                <input
                    type="text"
                    name="brand"
                    value={clothFormData.brand}
                    onChange={handleChange}
                />
                <br />
                <label>Gender</label>
                <input
                    type="text"
                    name="gender"
                    value={clothFormData.gender}
                    onChange={handleChange}
                />
                <br />
                <label>Price</label>
                <input
                    type="text"
                    name="price"
                    value={clothFormData.price}
                    onChange={handleChange}
                />
                <br />
                <label>Available Size</label>
                <input
                    type="text"
                    name="size"
                    value={clothFormData.size}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Clothesedit;