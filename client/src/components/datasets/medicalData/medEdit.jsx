import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Mededit = () => {
    const { id } = useParams(); // Get the ID from the route parameters

    const [medFormData, setMedFormData] = useState({
        name: '',
        symptom: '',
        medication: ''
    });

    useEffect(() => {
        // Fetch student data by ID when the component mounts
        axios.get(`http://localhost:6700/getmed/${id}`)
            .then((res) => {
                console.log(res.data);
                // Update state with fetched data
                setMedFormData(res.data.meddata);
            })
            .catch((err) => console.log(err));
    }, [id]); // Include 'id' in the dependency array

    const handleSub = async (e) => {
        e.preventDefault();
        console.log(medFormData);
        try {
            // Send PUT request to update student data
            const response = await axios.put(`http://localhost:6700/updatemed/${id}`, medFormData);
            alert(response.data.msg); // Display success message
        } catch (error) {
            console.log(error); // Log any errors
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMedFormData({ ...medFormData, [name]: value });
    };

    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={handleSub}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={medFormData.name}
                    onChange={handleChange}
                />
                <br />
                <label>Symptoms</label>
                <input
                    type="text"
                    name="symptom"
                    value={medFormData.symptom}
                    onChange={handleChange}
                />
                <br />
                <label>Medication</label>
                <input
                    type="text"
                    name="medication"
                    value={medFormData.medication}
                    onChange={handleChange}
                />
                <br />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Mededit;