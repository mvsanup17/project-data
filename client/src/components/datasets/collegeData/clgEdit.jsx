import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Collegeedit = () => {
    const { id } = useParams(); // Get the ID from the route parameters

    const [clgFormData, setClgFormData] = useState({
        name: '',
        state: '',
        course: ''
    });

    useEffect(() => {
        // Fetch student data by ID when the component mounts
        axios.get(`http://localhost:6700/getclg/${id}`)
            .then((res) => {
                console.log(res.data);
                // Update state with fetched data
                setClgFormData(res.data.collegedata);
            })
            .catch((err) => console.log(err));
    }, [id]); // Include 'id' in the dependency array

    const handleSub = async (e) => {
        e.preventDefault();
        console.log(clgFormData);
        try {
            // Send PUT request to update student data
            const response = await axios.put(`http://localhost:6700/updateclg/${id}`, clgFormData);
            alert(response.data.msg); // Display success message
        } catch (error) {
            console.log(error); // Log any errors
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setClgFormData({ ...clgFormData, [name]: value });
    };

    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={handleSub}>
                <label>College Name</label>
                <input
                    type="text"
                    name="name"
                    value={clgFormData.name}
                    onChange={handleChange}
                />
                <br />
                <label>State</label>
                <input
                    type="text"
                    name="state"
                    value={clgFormData.state}
                    onChange={handleChange}
                />
                <br />
                <label>Courses</label>
                <input
                    type="text"
                    name="course"
                    value={clgFormData.course}
                    onChange={handleChange}
                />
                <br />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Collegeedit;