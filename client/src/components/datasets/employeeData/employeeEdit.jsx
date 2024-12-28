import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Employeeedit = () => {
    const { id } = useParams(); // Get the ID from the route parameters

    const [empFormData, setEmpFormData] = useState({
        name: '',
        age: '',
        gender: '',
        designation: '',
        salary: ''
    });

    useEffect(() => {
        // Fetch student data by ID when the component mounts
        axios.get(`http://localhost:6700/getemployee/${id}`)
            .then((res) => {
                console.log(res.data);
                // Update state with fetched data
                setEmpFormData(res.data.employeedata);
            })
            .catch((err) => console.log(err));
    }, [id]); // Include 'id' in the dependency array

    const handleSub = async (e) => {
        e.preventDefault();
        console.log(empFormData);
        try {
            // Send PUT request to update student data
            const response = await axios.put(`http://localhost:6700/updateemp/${id}`, empFormData);
            alert(response.data.msg); // Display success message
        } catch (error) {
            console.log(error); // Log any errors
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpFormData({ ...empFormData, [name]: value });
    };

    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={handleSub}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={empFormData.name}
                    onChange={handleChange}
                />
                <br />
                <label>Age</label>
                <input
                    type="text"
                    name="age"
                    value={empFormData.rollno}
                    onChange={handleChange}
                />
                <br />
                <label>Gender</label>
                <input
                    type="text"
                    name="gender"
                    value={empFormData.branch}
                    onChange={handleChange}
                />
                <br />
                <label>Designation</label>
                <input
                    type="text"
                    name="designation"
                    value={empFormData.college}
                    onChange={handleChange}
                />
                <br />
                <label>Salary</label>
                <input
                    type="text"
                    name="salary"
                    value={empFormData.college}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Employeeedit;