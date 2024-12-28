import { useState } from "react";
import axios from "axios";

const Medform = () =>{
    const [medFormData, setMedFormData] = useState({
        'name': '',
        'symptom': '',
        'medication': ''
    })

    const handleSub=(e)=>{
        e.preventDefault();
        console.log(medFormData)
        axios.post('http://localhost:6700/addmed',{medFormData})
        .then((res)=>alert(res.data.message))
        window.location.reload()
    }

    return(
        <div>
            <h1>Medical Form</h1>
            <br/>
            <form onSubmit={handleSub}>
                <label>Disease Name</label>
                <input type="text" name="name" onChange={(e) => setMedFormData({...medFormData,name:e.target.value})}/>
                <br/>
                <label>Symptoms</label>
                <input type="text" name="symptom" onChange={(e) => setMedFormData({...medFormData,symptom:e.target.value})} />
                <br/>
                <label>Medication</label>
                <input type="text" name="medication" onChange={(e) => setMedFormData({...medFormData,medication:e.target.value})} />
                <br/><br/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Medform;