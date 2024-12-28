import { useState } from "react";
import axios from "axios";

const Techform = () =>{
    const [techFormData, setTechFormData] = useState({
        'name': '',
        'color': '',
        'feature': '',
        'price': ''
    })

    const handleSub=(e)=>{
        e.preventDefault();
        console.log(techFormData)
        axios.post('http://localhost:6700/addtech',{techFormData})
        .then((res)=>alert(res.data.message))
        window.location.reload()
    }

    return(
        <div>
            <h1>Tech Devices Form</h1>
            <br/>
            <form onSubmit={handleSub}>
                <label>Name</label>
                <input type="text" name="name" onChange={(e) => setTechFormData({...techFormData,name:e.target.value})}/>
                <br/>
                <label>Color</label>
                <input type="text" name="color" onChange={(e) => setTechFormData({...techFormData,color:e.target.value})} />
                <br/>
                <label>Features</label>
                <input type="text" name="feature" onChange={(e) => setTechFormData({...techFormData,feature:e.target.value})} />
                <br/>
                <label>Price</label>
                <input type="text" name="price" onChange={(e) => setTechFormData({...techFormData,price:e.target.value})} />
                <br/><br/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Techform;