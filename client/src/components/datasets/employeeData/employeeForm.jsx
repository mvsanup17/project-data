import { useState } from "react";
import axios from "axios";

const Employeeform = () =>{
    const [empFormData, setEmpFormData] = useState({
        'name': '',
        'age': '',
        'gender': '',
        'designation': '',
        'salary': ''
    })

    const handleSub=(e)=>{
        e.preventDefault();
        console.log(empFormData)
        axios.post('http://localhost:6700/addemployee',{empFormData})
        .then((res)=>alert(res.data.message))
        window.location.reload()
    }

    return(
        <div>
            <h1>Employee Form</h1>
            <br/>
            <form onSubmit={handleSub}>
                <label>Name</label>
                <input type="text" name="name" onChange={(e) => setEmpFormData({...empFormData,name:e.target.value})}/>
                <br/>
                <label>Age</label>
                <input type="text" name="age" onChange={(e) => setEmpFormData({...empFormData,age:e.target.value})} />
                <br/>
                <label>Gender</label>
                <input type="text" name="gender" onChange={(e) => setEmpFormData({...empFormData,gender:e.target.value})} />
                <br/>
                <label>Designation</label>
                <input type="text" name="designation" onChange={(e) => setEmpFormData({...empFormData,designation:e.target.value})} />
                <br/>
                <label>Salary</label>
                <input type="text" name="salary" onChange={(e) => setEmpFormData({...empFormData,salary:e.target.value})} />
                <br/><br/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Employeeform;