const express=require("express");
const app=express();
const path=require("path");
const axios = require("axios");

const ejs=require("ejs");

const ejsmate=require("ejs-mate")

app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

app.engine("ejs",ejsmate);
app.use(express.static(path.join(__dirname,"/public")));


app.get("/",(req,res)=>{
    res.render("index.ejs")
   
})

app.post("/predict", async (req,res)=>{
    try {
        const message = req.body.message;
        const response = await axios.post(
            "http://localhost:5000/predict",
            new URLSearchParams({ message }).toString(),
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );
        return res.render("predict.ejs", { mess: response.data ,message});
    } catch (error) {
        console.error(error?.response?.data || error.message);
        return res.status(500).send("Prediction service error");
    }
})
app.listen(3000,()=>console.log("listening"))
