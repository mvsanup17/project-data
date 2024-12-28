import { useState } from "react";
import axios from "axios";

const Stockform = () =>{
    const [stkFormData, setStkFormData] = useState({
        'name': '',
        'sector': '',
        'market': '',
        'price': ''
    })

    const handleSub=(e)=>{
        e.preventDefault();
        console.log(stkFormData)
        axios.post('http://localhost:6700/addstock',{stkFormData})
        .then((res)=>alert(res.data.message))
        window.location.reload()
    }

    return(
        <div>
            <h1>Stocks Form</h1>
            <br/>
            <form onSubmit={handleSub}>
                <label>Company Name</label>
                <input type="text" name="name" onChange={(e) => setStkFormData({...stkFormData,name:e.target.value})}/>
                <br/>
                <label>Sector</label>
                <input type="text" name="sector" onChange={(e) => setStkFormData({...stkFormData,sector:e.target.value})} />
                <br/>
                <label>Market Capitialization</label>
                <input type="text" name="market" onChange={(e) => setStkFormData({...stkFormData,market:e.target.value})} />
                <br/>
                <label>Current Price</label>
                <input type="text" name="price" onChange={(e) => setStkFormData({...stkFormData,price:e.target.value})} />
                <br/><br/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Stockform;