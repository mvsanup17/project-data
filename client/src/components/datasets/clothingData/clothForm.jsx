import { useState } from "react";
import axios from "axios";

const Clothesform = () =>{
    const [clothFormData, setClothFormData] = useState({
        'name': '',
        'brand': '',
        'gender': '',
        'price': '',
        'size':''
    })

    const handleSub=(e)=>{
        e.preventDefault();
        console.log(clothFormData)
        axios.post('http://localhost:6700/addcloth',{clothFormData})
        .then((res)=>alert(res.data.message))
        window.location.reload()
    }

    return(
        <div>
            <h1>Clothes Form</h1>
            <br/>
            <form onSubmit={handleSub}>
                <label>Product Name</label>
                <input type="text" name="name" onChange={(e) => setClothFormData({...clothFormData,name:e.target.value})}/>
                <br/>
                <label>Brand</label>
                <input type="text" name="brand" onChange={(e) => setClothFormData({...clothFormData,brand:e.target.value})} />
                <br/>
                <label>Gender</label>
                <input type="text" name="gender" onChange={(e) => setClothFormData({...clothFormData,gender:e.target.value})} />
                <br/>
                <label>Price</label>
                <input type="text" name="price" onChange={(e) => setClothFormData({...clothFormData,price:e.target.value})} />
                <br/>
                <label>Available Size</label>
                <input type="text" name="size" onChange={(e) => setClothFormData({...clothFormData,size:e.target.value})} />
                <br/><br/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Clothesform;