import { useState } from "react";
import axios from "axios";

const Collegeform = () =>{
    const [clgFormData, setClgFormData] = useState({
        'name': '',
        'state': '',
        'course': ''
    })

    const handleSub=(e)=>{
        e.preventDefault();
        console.log(clgFormData)
        axios.post('http://localhost:6700/addclg',{clgFormData})
        .then((res)=>alert(res.data.message))
        window.location.reload()
    }

    return(
        <div>
            <h1>Colleges Form</h1>
            <br/>
            <form onSubmit={handleSub}>
                <label>College Name</label>
                <input type="text" name="name" onChange={(e) => setClgFormData({...clgFormData,name:e.target.value})}/>
                <br/>
                <label>State</label>
                <input type="text" name="state" onChange={(e) => setClgFormData({...clgFormData,state:e.target.value})} />
                <br/>
                <label>Courses</label>
                <input type="text" name="course" onChange={(e) => setClgFormData({...clgFormData,course:e.target.value})} />
                <br/><br/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Collegeform;