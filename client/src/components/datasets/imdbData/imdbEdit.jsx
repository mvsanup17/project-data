import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Imdbedit = () => {
    const { id } = useParams(); // Get the ID from the route parameters

    const [imdbFormData, setImdbFormData] = useState({
        name: '',
        release: '',
        genre: '',
        rating: ''
    });

    useEffect(() => {
        // Fetch student data by ID when the component mounts
        axios.get(`http://localhost:6700/getimdb/${id}`)
            .then((res) => {
                console.log(res.data);
                // Update state with fetched data
                setImdbFormData(res.data.imdbdata);
            })
            .catch((err) => console.log(err));
    }, [id]); // Include 'id' in the dependency array

    const handleSub = async (e) => {
        e.preventDefault();
        console.log(imdbFormData);
        try {
            // Send PUT request to update student data
            const response = await axios.put(`http://localhost:6700/updateimdb/${id}`, imdbFormData);
            alert(response.data.msg); // Display success message
        } catch (error) {
            console.log(error); // Log any errors
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setImdbFormData({ ...imdbFormData, [name]: value });
    };

    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={handleSub}>
                <label>Movie Name</label>
                <input
                    type="text"
                    name="name"
                    value={imdbFormData.name}
                    onChange={handleChange}
                />
                <br />
                <label>Release</label>
                <input
                    type="text"
                    name="release"
                    value={imdbFormData.release}
                    onChange={handleChange}
                />
                <br />
                <label>Genre</label>
                <input
                    type="text"
                    name="genre"
                    value={imdbFormData.genre}
                    onChange={handleChange}
                />
                <br />
                <label>Rating</label>
                <input
                    type="text"
                    name="rating"
                    value={imdbFormData.rating}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Imdbedit;