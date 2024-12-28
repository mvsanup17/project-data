import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import multer from "multer";
import studentsData from "./models/studentsData.js";
import employeeData from "./models/employeeData.js";
import imdbData from "./models/imdbData.js";
import medicalData from "./models/medicalData.js";
import clothesData from "./models/clothesData.js";
import collegeData from "./models/collegeData.js";
import techData from "./models/techData.js";
import stockData from "./models/stockData.js";
import imageData from "./models/imageData.js";
import { UserRouter } from "./routes/user.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
// import userData from "./models/userData.js";



dotenv.config();
const app = express();
app.use(bodyParser.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'))
app.use('/auth', UserRouter)

mongoose.connect('mongodb+srv://iamvsanup:3raLvtJYwOZ0FTVG@driveready.0udnccc.mongodb.net/DriveReady?retryWrites=true&w=majority')
.then(() => app.listen(6700))
.then(()=> 
    console.log("Connected to Database & Listening to localhost 6700")
)
.catch((err) => console.log(err));



//imgs
const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
      cb(null, 'public/imgData')
    },
    filename: (req,file,cb) =>{
      cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
  
const upload = multer({
    storage:storage
})

app.post('/uploadimg', upload.single('file'),(req, res) => {
    imageData.create({image: req.file.filename})
    .then(result => res.json(result))
    .catch(err => console.log(err))
    return res.send({msg: "Uploaded Successfully"})
})

app.get('/getimg',(req,res)=>{
    imageData.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


//students form
app.post('/addstudent',(req,res,next)=>{
    console.log(req.body.stFormData)
    const {name,rollno,branch,college} = req.body.stFormData
    const stform = new studentsData({
        name,
        rollno,
        branch,
        college,
    })
    try{
        stform.save()
    }catch(err){
        console.log(err)
    }
    return res.send({message:"Data Stored Successfully"})
})

app.get('/getstudent', async (req, res) => {
    try {
        const studentdata = await studentsData.find();
        res.status(200).json({ studentdata });
    } catch (err) {
        console.error("Error fetching student data:", err);
        res.status(500).send({ message: "Failed to fetch student data" });
    }
});

app.put('/updatestud/:id', async (req, res) => {
    const _id = req.params.id;
    const { name, rollno, branch, college } = req.body;
    
    try {
        const stud = await studentsData.findByIdAndUpdate(_id, {
            name,
            rollno,
            branch,
            college
        });
        res.status(200).send({ msg: "Updated" });
    } catch (err) {
        console.error("Error updating student data:", err);
        res.status(500).send({ message: "Failed to update student data" });
    }
});

app.delete('/deleteuser/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const studentdata = await studentsData.findByIdAndDelete(_id);
        if (!studentdata) {
            return res.status(404).send({ msg: "Unable to delete - student not found" });
        }
        res.status(200).send({ msg: "Deleted" });
    } catch (err) {
        console.error("Error deleting student data:", err);
        res.status(500).send({ message: "Failed to delete student data" });
    }
});

//employee form
app.post('/addemployee',(req,res,next)=>{
    console.log(req.body.empFormData)
    const {name,age,gender,designation,salary} = req.body.empFormData
    const empform = new employeeData({
        name,
        age,
        gender,
        designation,
        salary
    })
    try{
        empform.save()
    }catch(err){
        console.log(err)
    }
    return res.send({message:"Data Stored Successfully"})
})

app.get('/getemployee', async (req, res) => {
    try {
        const employeedata = await employeeData.find();
        res.status(200).json({ employeedata });
    } catch (err) {
        console.error("Error fetching employee data:", err);
        res.status(500).send({ message: "Failed to fetch employee data" });
    }
});

app.put('/updateemp/:id', async (req, res) => {
    const _id = req.params.id;
    const { name, age, gender, designation, salary } = req.body;
    
    try {
        const emp = await employeeData.findByIdAndUpdate(_id, {
            name,
            age,
            gender,
            designation,
            salary
        });
        res.status(200).send({ msg: "Updated" });
    } catch (err) {
        console.error("Error updating employee data:", err);
        res.status(500).send({ message: "Failed to update employee data" });
    }
});

app.delete('/deleteemp/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const employeedata = await employeeData.findByIdAndDelete(_id);
        if (!employeedata) {
            return res.status(404).send({ msg: "Unable to delete - employee not found" });
        }
        res.status(200).send({ msg: "Deleted" });
    } catch (err) {
        console.error("Error deleting employee data:", err);
        res.status(500).send({ message: "Failed to delete employee data" });
    }
});


//imdb form
app.post('/addimdb',(req,res,next)=>{
    console.log(req.body.imdbFormData)
    const {name,release,genre,rating} = req.body.imdbFormData
    const imdbform = new imdbData({
        name,
        release,
        genre,
        rating
    })
    try{
        imdbform.save()
    }catch(err){
        console.log(err)
    }
    return res.send({message:"Data Stored Successfully"})
})

app.get('/getimdb', async (req, res) => {
    try {
        const imdbdata = await imdbData.find();
        res.status(200).json({ imdbdata });
    } catch (err) {
        console.error("Error fetching movie data:", err);
        res.status(500).send({ message: "Failed to fetch movie data" });
    }
});

app.put('/updateimdb/:id', async (req, res) => {
    const _id = req.params.id;
    const { name, release, genre, rating } = req.body;
    
    try {
        const imdb = await imdbData.findByIdAndUpdate(_id, {
            name,
            release,
            genre,
            rating
        });
        res.status(200).send({ msg: "Updated" });
    } catch (err) {
        console.error("Error updating movie data:", err);
        res.status(500).send({ message: "Failed to update movie data" });
    }
});

app.delete('/deleteimdb/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const imdbdata = await imdbData.findByIdAndDelete(_id);
        if (!imdbdata) {
            return res.status(404).send({ msg: "Unable to delete - movie not found" });
        }
        res.status(200).send({ msg: "Deleted" });
    } catch (err) {
        console.error("Error deleting movie data:", err);
        res.status(500).send({ message: "Failed to delete movie data" });
    }
});



//medical form
app.post('/addmed',(req,res,next)=>{
    console.log(req.body.medFormData)
    const {name,symptom,medication} = req.body.medFormData
    const medform = new medicalData({
        name,
        symptom,
        medication
    })
    try{
        medform.save()
    }catch(err){
        console.log(err)
    }
    return res.send({message:"Data Stored Successfully"})
})

app.get('/getmed', async (req, res) => {
    try {
        const meddata = await medicalData.find();
        res.status(200).json({ meddata });
    } catch (err) {
        console.error("Error fetching medical data:", err);
        res.status(500).send({ message: "Failed to fetch medical data" });
    }
});

app.put('/updatemed/:id', async (req, res) => {
    const _id = req.params.id;
    const { name, symptom, medication} = req.body;
    
    try {
        const medical = await medicalData.findByIdAndUpdate(_id, {
            name,
            symptom,
            medication
        });
        res.status(200).send({ msg: "Updated" });
    } catch (err) {
        console.error("Error updating medical data:", err);
        res.status(500).send({ message: "Failed to update medical data" });
    }
});

app.delete('/deletemed/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const meddata = await medicalData.findByIdAndDelete(_id);
        if (!meddata) {
            return res.status(404).send({ msg: "Unable to delete - medical not found" });
        }
        res.status(200).send({ msg: "Deleted" });
    } catch (err) {
        console.error("Error deleting medical data:", err);
        res.status(500).send({ message: "Failed to delete medical data" });
    }
});



//clothes form
app.post('/addcloth',(req,res,next)=>{
    console.log(req.body.clothFormData)
    const {name,brand,gender,price,size} = req.body.clothFormData
    const clothform = new clothesData({
        name,
        brand,
        gender,
        price,
        size
    })
    try{
        clothform.save()
    }catch(err){
        console.log(err)
    }
    return res.send({message:"Data Stored Successfully"})
})

app.get('/getcloth', async (req, res) => {
    try {
        const clothdata = await clothesData.find();
        res.status(200).json({ clothdata });
    } catch (err) {
        console.error("Error fetching clothes data:", err);
        res.status(500).send({ message: "Failed to fetch clothes data" });
    }
});

app.put('/updatecloth/:id', async (req, res) => {
    const _id = req.params.id;
    const { name, brand, gender,price, size} = req.body;
    
    try {
        const cloth = await clothesData.findByIdAndUpdate(_id, {
            name,
            brand,
            gender,
            price,
            size
        });
        res.status(200).send({ msg: "Updated" });
    } catch (err) {
        console.error("Error updating clothes data:", err);
        res.status(500).send({ message: "Failed to update clothes data" });
    }
});

app.delete('/deletecloth/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const clothdata = await clothesData.findByIdAndDelete(_id);
        if (!clothdata) {
            return res.status(404).send({ msg: "Unable to delete - clothes not found" });
        }
        res.status(200).send({ msg: "Deleted" });
    } catch (err) {
        console.error("Error deleting clothes data:", err);
        res.status(500).send({ message: "Failed to delete clothes data" });
    }
});



//college form
app.post('/addclg',(req,res,next)=>{
    console.log(req.body.clgFormData)
    const {name,state,course} = req.body.clgFormData
    const clgform = new collegeData({
        name,
        state,
        course
    })
    try{
        clgform.save()
    }catch(err){
        console.log(err)
    }
    return res.send({message:"Data Stored Successfully"})
})

app.get('/getclg', async (req, res) => {
    try {
        const clgdata = await collegeData.find();
        res.status(200).json({ clgdata });
    } catch (err) {
        console.error("Error fetching college data:", err);
        res.status(500).send({ message: "Failed to fetch college data" });
    }
});

app.put('/updateclg/:id', async (req, res) => {
    const _id = req.params.id;
    const { name,state,course} = req.body;
    
    try {
        const clg = await collegeData.findByIdAndUpdate(_id, {
            name,
            state,
            course
        });
        res.status(200).send({ msg: "Updated" });
    } catch (err) {
        console.error("Error updating college data:", err);
        res.status(500).send({ message: "Failed to update college data" });
    }
});

app.delete('/deleteclg/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const clgdata = await collegeData.findByIdAndDelete(_id);
        if (!clgdata) {
            return res.status(404).send({ msg: "Unable to delete - college not found" });
        }
        res.status(200).send({ msg: "Deleted" });
    } catch (err) {
        console.error("Error deleting college data:", err);
        res.status(500).send({ message: "Failed to delete college data" });
    }
});



//tech form
app.post('/addtech',(req,res,next)=>{
    console.log(req.body.techFormData)
    const {name,color,feature,price} = req.body.techFormData
    const techform = new techData({
        name,
        color,
        feature,
        price
    })
    try{
        techform.save()
    }catch(err){
        console.log(err)
    }
    return res.send({message:"Data Stored Successfully"})
})

app.get('/gettech', async (req, res) => {
    try {
        const techdata = await techData.find();
        res.status(200).json({ techdata });
    } catch (err) {
        console.error("Error fetching tech data:", err);
        res.status(500).send({ message: "Failed to tech college data" });
    }
});

app.put('/updatetech/:id', async (req, res) => {
    const _id = req.params.id;
    const { name,color,feature,price} = req.body;
    
    try {
        const tech = await techData.findByIdAndUpdate(_id, {
            name,
            color,
            feature,
            price
        });
        res.status(200).send({ msg: "Updated" });
    } catch (err) {
        console.error("Error updating tech data:", err);
        res.status(500).send({ message: "Failed to update tech data" });
    }
});

app.delete('/deletetech/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const techdata = await techData.findByIdAndDelete(_id);
        if (!techdata) {
            return res.status(404).send({ msg: "Unable to delete - tech not found" });
        }
        res.status(200).send({ msg: "Deleted" });
    } catch (err) {
        console.error("Error deleting tech data:", err);
        res.status(500).send({ message: "Failed to delete tech data" });
    }
});



//stockform
app.post('/addstock',(req,res,next)=>{
    console.log(req.body.stkFormData)
    const {name,sector,market,price} = req.body.stkFormData
    const stockform = new stockData({
        name,
        sector,
        market,
        price
    })
    try{
        stockform.save()
    }catch(err){
        console.log(err)
    }
    return res.send({message:"Data Stored Successfully"})
})

app.get('/getstock', async (req, res) => {
    try {
        const stockdata = await stockData.find();
        res.status(200).json({ stockdata });
    } catch (err) {
        console.error("Error fetching stocks data:", err);
        res.status(500).send({ message: "Failed to get stocks data" });
    }
});

app.put('/updatestock/:id', async (req, res) => {
    const _id = req.params.id;
    const { name,sector,market,price} = req.body;
    
    try {
        const stock = await stockData.findByIdAndUpdate(_id, {
            name,
            sector,
            market,
            price
        });
        res.status(200).send({ msg: "Updated" });
    } catch (err) {
        console.error("Error updating stocks data:", err);
        res.status(500).send({ message: "Failed to update stocks data" });
    }
});

app.delete('/deletestock/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const stockdata = await stockData.findByIdAndDelete(_id);
        if (!stockdata) {
            return res.status(404).send({ msg: "Unable to delete - stock not found" });
        }
        res.status(200).send({ msg: "Deleted" });
    } catch (err) {
        console.error("Error deleting stock data:", err);
        res.status(500).send({ message: "Failed to stock tech data" });
    }
});
