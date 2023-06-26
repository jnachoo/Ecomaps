const { Router } = require('express');
const router = Router();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

const jwt = require('jsonwebtoken');

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'Ecomaps'
});
connection.connect(function (err) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }
    console.log('Conexión establecida ' + connection.threadId);
});


router.post("/registro",jsonParser,(req, res) => {
    let email=req.body.email;
    let password=req.body.password;
    console.log(email, password);
    
    connection.query("INSERT INTO usuarios (email,password) VALUES (?,?)",
        [email,password],function(error,results,fields){
        if (error) throw error;
        const token = jwt.sign({id: results.id}, 'secretkey');
        return res.status(500).json({"token":token, "resultados":results});
    });
});
router.post("/iniciosesion",jsonParser,(req, res) => {
    let email=req.body.email;
    let contrasenya=req.body.contrasenya;
    console.log(email, contrasenya);

    connection.query("select * from usuario where email=?",[email],function(error,results,fields){  
        if (error) throw error;
        if(results=="") res.json({"id":1});
        else{
            connection.query("select * from usuario where contrasenya=?",[contrasenya],function(error,results,fields){  
                if (error) throw error;
                if(results=="") res.json({"id":2});
            });
        }
    });
    connection.query("select * from usuario where  email=? and contrasenya=?",[email,contrasenya],function(error,results,fields){  
        if (error) throw error;
        if(results!="") {
            
            const token = jwt.sign({id: results[0].idTipo}, 'secretkey');
            return res.status(200).json({"id":3,"token":token, "resultados":results});
        }
    })
});

router.post('/cambiarclave', jsonParser,(req,res)=>{
    const email = req.body.email;
    const contrasenya = req.body.contrasenya;
    const recontrasenya = req.body.recontrasenya;
    
    let sql = `select * FROM usuario WHERE email ='${email}'`;
    connection.query(sql, (error, results, fields)=>{
        if(error)throw error;
        else{
            if(results!=""){
                sql2 =`update Usuario set contrasenya='${recontrasenya}' where email='${email}'`;
                connection.query(sql2, (error,results,fields)=>{
                    if(error)throw error;
                    else res.json({"id":1});
                })
            }
            else res.json({"id":2});
        }
    })
})

router.get("/watefok",verifyToken,jsonParser,(req,res)=>{
    res.json(
        {
            id:1,
            descripcion:"hola"
        },
        {
            id:2,
            descripcion:"hola"
        },
        {
            id:3,
            descripcion:"hola"
        }
    );
});

module.exports = router;

function verifyToken(req,res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unathorized Request');
    }
    const token = req.headers.authorization.split(' ')[1]
    if (token == 'null'){
        return res.status(401).send('Unathorized Request');
    }
    const data = jwt.verify(token,'secretkey');
    req.idTipo=data.id;
    console.log(req.idTipo);
    next();
}