
const express = require("express");
const res = require("express/lib/response");
const app = express();
const db = require("./dbcon")
// const path = require('path');
const cors = require('cors');
app.use(express.urlencoded({
    extended:false,
}));

app.get("/login", (req, res) => {
    console.log('welcom from home page');
    // res.send('welcom from home page');
    const sql = " select * from login"
    db.query(sql, (err, result) => {
        if (err)
            console.log('error')
        else
            console.log(result) 
        res.send('result')
    })
})
app.get("/signup", (req, res) => {
    console.log('welcom from signup page');
    // res.send('welcom from home page');
    const sql = " select * from signup"
    db.query(sql, (err, result) => {
        if (err)
            console.log('error')
        else
            console.log(result) 
        res.send('result')
    })
})
app.get("/tweets", (req, res) => {
    console.log('welcom from tweet page');
    // res.send('welcom from home page');
    const sql = " select * from tweets"
    db.query(sql, (err, result) => {
        if (err)
            console.log('error')
        else
            console.log(result) 
        res.send('result')
    })
})
app.use(cors({
    // origin: 'http://127.0.0.1:5500',  
    origin: 'http://127.0.0.1:5501',  
    methods: ["GET","POST"],
    
  }))
app.post("/signup", (req, res) => {
    const Email = req.body.email;
    const pass = req.body.password;
    let sql = `INSERT INTO signup (Email,Password) VALUES ('${Email}','${pass}')`;
     db.query(sql,(err,result)=>{
        if(err) throw err;
        res.status(200).json("Hello")
    })
})
    
    app.post("/login",(req, res) => {
        const email = req.body.email;
        const pass = req.body.password;
        let sql = 'SELECT * FROM signup WHERE email = ?'
     db.query(sql,[email],(err,result)=>{
             console.log(result)
            if(err) throw err;
            res.status(200).json("hi") ;
        
        })
    })  
    app.post("/tweets",(req, res) => {
        const email = req.body.email;
        const pass = req.body.password;
        let sql = "select tweets.id, user.email,tweets.text FROM tweets INNER JOIN user ON  user_id='1'"
     db.query(sql,[email],(err,result)=>{
             console.log(result)
            if(err) throw err;
            res.status(200).json("hi") ;
        
        })
    })  
        app.listen(3000, () => {
            console.log(`Example app listening on port 3000`);
        })