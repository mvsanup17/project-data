import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Studentsedit = () => {
    const { id } = useParams(); // Get the ID from the route parameters

    const [stFormData, setStFormData] = useState({
        name: '',
        rollno: '',
        branch: '',
        college: ''
    });

    useEffect(() => {
        // Fetch student data by ID when the component mounts
        axios.get(`http://localhost:6700/getstudent/${id}`)
            .then((res) => {
                console.log(res.data);
                // Update state with fetched data
                setStFormData(res.data.studentdata);
            })
            .catch((err) => console.log(err));
    }, [id]); // Include 'id' in the dependency array

    const handleSub = async (e) => {
        e.preventDefault();
        console.log(stFormData);
        try {
            // Send PUT request to update student data
            const response = await axios.put(`http://localhost:6700/updatestud/${id}`, stFormData);
            alert(response.data.msg); // Display success message
        } catch (error) {
            console.log(error); // Log any errors
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStFormData({ ...stFormData, [name]: value });
    };

    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={handleSub}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={stFormData.name}
                    onChange={handleChange}
                />
                <br />
                <label>Rollno</label>
                <input
                    type="text"
                    name="rollno"
                    value={stFormData.rollno}
                    onChange={handleChange}
                />
                <br />
                <label>Branch</label>
                <input
                    type="text"
                    name="branch"
                    value={stFormData.branch}
                    onChange={handleChange}
                />
                <br />
                <label>College</label>
                <input
                    type="text"
                    name="college"
                    value={stFormData.college}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Studentsedit;