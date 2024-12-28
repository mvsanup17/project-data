import React,{useState,useEffect} from "react";
import Navbar from "../navbar/navbar.jsx";
import axios from "axios";

function Files(){

    const [file,setFiles] = useState()
    const [images,setImages] = useState()

    const uploadFiles = (e) =>{
        const formdata = new FormData()
        formdata.append('file',file)
        axios.post("http://localhost:6700/uploadimg",formdata)
        .then(res => alert(res.data.msg))
        window.location.reload()
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:6700/getimg")
        .then(res => setImages(res.data[0].images))
        .catch(err => console.log(err))
    },[])

    return(
        <div>
            <Navbar/>
            <br/><br /><br />
            <center>
                <h2 className="text-center">Upload the files</h2>
                <br/><br/>
                <input type="file" onChange={(e) => setFiles(e.target.files[0])} />
                <br/><br/><br/>
                <button onClick={uploadFiles} className="btn btn-success">Upload</button>
            </center>
        </div>
    )
}
export default Files