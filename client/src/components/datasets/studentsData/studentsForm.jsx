import { useState } from "react";
import axios from "axios";

const Studentsform = () =>{
    const [stFormData, setStFormData] = useState({
        'name': '',
        'rollno': '',
        'branch': '',
        'college': ''
    })

    const handleSub=(e)=>{
        e.preventDefault();
        console.log(stFormData)
        axios.post('http://localhost:6700/addstudent',{stFormData})
        .then((res)=>alert(res.data.message))
        window.location.reload()
    }

    return(
        <div>
            <h1>Student Form</h1>
            <br/>
            <form onSubmit={handleSub}>
                <label>Name</label>
                <input type="text" name="name" onChange={(e) => setStFormData({...stFormData,name:e.target.value})}/>
                <br/>
                <label>Roll No</label>
                <input type="text" name="rollno" onChange={(e) => setStFormData({...stFormData,rollno:e.target.value})} />
                <br/>
                <label>Branch</label>
                <input type="text" name="branch" onChange={(e) => setStFormData({...stFormData,branch:e.target.value})} />
                <br/>
                <label>College</label>
                <input type="text" name="college" onChange={(e) => setStFormData({...stFormData,college:e.target.value})} />
                <br/><br/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Studentsform;