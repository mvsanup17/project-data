import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home/home.jsx";
import Dataset from "./components/datasets/dataset.jsx";
import About from "./components/about/about.jsx";
import Studentsdata from "./components/datasets/studentsData/studentsData.jsx";
import Studentsform from "./components/datasets/studentsData/studentsForm.jsx";
import Studentsedit from "./components/datasets/studentsData/studentsEdit.jsx";
import EmployeeData from "./components/datasets/employeeData/employeeData.jsx";
import Employeeform from "./components/datasets/employeeData/employeeForm.jsx";
import Empployeeedit from "./components/datasets/employeeData/employeeEdit.jsx";
import Imdbdata from "./components/datasets/imdbData/imdbData.jsx";
import Imdbform from "./components/datasets/imdbData/imdbForm.jsx";
import Imdbedit from "./components/datasets/imdbData/imdbEdit.jsx";
import Meddata from "./components/datasets/medicalData/medData.jsx";
import Medform from "./components/datasets/medicalData/medForm.jsx";
import Mededit from "./components/datasets/medicalData/medEdit.jsx";
import Clothesdata from "./components/datasets/clothingData/clothData.jsx";
import Clothesedit from "./components/datasets/clothingData/clothEdit.jsx";
import Clothesform from "./components/datasets/clothingData/clothForm.jsx";
import Collegedata from "./components/datasets/collegeData/clgData.jsx";
import Collegeform from "./components/datasets/collegeData/clgForm.jsx";
import Collegeedit from "./components/datasets/collegeData/clgEdit.jsx";
import Techdata from "./components/datasets/techData/techData.jsx";
import Techform from "./components/datasets/techData/techForm.jsx";
import Techedit from "./components/datasets/techData/techEdit.jsx";
import Stockdata from "./components/datasets/stockData/stockData.jsx";
import Stockform from "./components/datasets/stockData/stockForm.jsx";
import Stockedit from "./components/datasets/stockData/stockEdit.jsx";
// import Login from "./components/login/login.jsx";
import Profile from "./components/profile/profile.jsx";
// import Signup from "./components/signup/signup.jsx";
import Intropage from "./components/main/intropage.jsx";
import Files from "./components/profile/files.jsx";
// import Forgot from "./components/profile/forgotPasswd.jsx";
// import Reset from "./components/profile/resetPasswd.jsx";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Intropage/>}/>
            {/* <Route path='/login' element={<Login/>}/> */}
            {/* <Route path='/signup' element={<Signup/>}/> */}
            <Route path='/home' element={<Home/>}/>
            {/* <Route path='/forgot-password' element={<Forgot/>}/> */}
            {/* <Route path='/reset-password/:token' element={<Reset/>}/> */}
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/upload' element={<Files/>}/>
            <Route path='/datasets' element={<Dataset/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/students-data' element={<Studentsdata/>}/>
            <Route path='/students-form' element={<Studentsform/>}/>
            <Route path='/students-edit/:id' element={<Studentsedit/>}/>
            <Route path='/employee-data' element={<EmployeeData/>}/>
            <Route path='/employee-form' element={<Employeeform/>}/>
            <Route path='/employee-edit/:id' element={<Empployeeedit/>}/>
            <Route path='/imdb-data' element={<Imdbdata/>}/>
            <Route path='/imdb-form' element={<Imdbform/>}/>
            <Route path='/imdb-edit/:id' element={<Imdbedit/>}/>
            <Route path='/medical-data' element={<Meddata/>}/>
            <Route path='/medical-form' element={<Medform/>}/>
            <Route path='/medical-edit/:id' element={<Mededit/>}/>
            <Route path='/clothes-data' element={<Clothesdata/>}/>
            <Route path='/clothes-form' element={<Clothesform/>}/>
            <Route path='/clothes-edit/:id' element={<Clothesedit/>}/>
            <Route path='/college-data' element={<Collegedata/>}/>
            <Route path='/college-form' element={<Collegeform/>}/>
            <Route path='/college-edit/:id' element={<Collegeedit/>}/>
            <Route path='/tech-data' element={<Techdata/>}/>
            <Route path='/tech-form' element={<Techform/>}/>
            <Route path='/tech-edit/:id' element={<Techedit/>}/>
            <Route path='/stocks-data' element={<Stockdata/>}/>
            <Route path='/stocks-form' element={<Stockform/>}/>
            <Route path='/stocks-edit/:id' element={<Stockedit/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
