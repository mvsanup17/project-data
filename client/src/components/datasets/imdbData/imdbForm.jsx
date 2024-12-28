import { useState } from "react";
import axios from "axios";

const Imdbform = () =>{
    const [imdbFormData, setImdbFormData] = useState({
        'name': '',
        'release': '',
        'genre': '',
        'rating': ''
    })

    const handleSub=(e)=>{
        e.preventDefault();
        console.log(imdbFormData)
        axios.post('http://localhost:6700/addimdb',{imdbFormData})
        .then((res)=>alert(res.data.message))
        window.location.reload()
    }

    return(
        <div>
            <h1>IMDB Form</h1>
            <br/>
            <form onSubmit={handleSub}>
                <label>Movie Name</label>
                <input type="text" name="name" onChange={(e) => setImdbFormData({...imdbFormData,name:e.target.value})}/>
                <br/>
                <label>Release Date</label>
                <input type="text" name="release" onChange={(e) => setImdbFormData({...imdbFormData,release:e.target.value})} />
                <br/>
                <label>Genre</label>
                <input type="text" name="genre" onChange={(e) => setImdbFormData({...imdbFormData,genre:e.target.value})} />
                <br/>
                <label>Rating</label>
                <input type="text" name="rating" onChange={(e) => setImdbFormData({...imdbFormData,rating:e.target.value})} />
                <br/><br/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Imdbform;