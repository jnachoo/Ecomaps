const { Router } = require('express');
const router = Router();
const bodyParser = require('body-parser');
const CryptoJS = require("crypto-js");

// (B) SECRET KEY
var key = "ASECRET";


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

router.post("/registro",jsonParser, (req, res) =>{
    let email = req.body.email;
    let nombre = req.body.nombre;
    let rut = req.body.rut;
    let telefono = req.body.telefono;
    let fechaNac = req.body.fechaNac;
    let region = req.body.region;
    let comuna = req.body.comuna;
    let contrasenya = CryptoJS.AES.encrypt(req.body.contrasenya, key).toString();
    //console.log("datos: " +req.body.contrasenya, contrasenya)
    let idTipo = 1;
    

    let sql1 = `select * FROM usuario WHERE email ='${email}'`;
    connection.query(sql1, (error, results, fields) =>{
        if(error) throw error;
        else{
            if(results==""){
                let sql2 = `insert into Usuario values ('${email}', '${nombre}', '${rut}', '${telefono}', '${fechaNac}', '${region}', '${comuna}', '${contrasenya}', ${idTipo})`;
                connection.query(sql2, function(error, results, fields){
                    if(error) throw error;
                    else {
                        res.json({"id":1});
                    }
                })

            }else res.json({"id":2});
        }
    })
})

router.post("/iniciosesion",jsonParser,(req, res) => {
    let email=req.body.email;
    let contrasenya=req.body.contrasenya
    let contraEncriptada;
    connection.query("select * from usuario where email=?",[email],function(error,results,fields){  
        if (error) throw error;
        if(results=="") res.json({"id":1});
        else{
            contraEncriptada=results[0].contrasenya
            //console.log(contrasenya,contraEncriptada);
            let decrypted = CryptoJS.AES.decrypt(contraEncriptada, key);
            let contraDesencriptada = decrypted.toString(CryptoJS.enc.Utf8);
            //console.log(contrasenya,contraDesencriptada);
            if (contraDesencriptada!=contrasenya){
                connection.query("select * from usuario where contrasenya=?",[contrasenya],function(error,results,fields){  
                    if (error) throw error;
                    if(results=="") res.json({"id":2});
                });
            }
            else{
                connection.query("select * from usuario where  email=? and contrasenya=?",[email,contraEncriptada],function(error,results,fields){  
                    if (error) throw error;
                    if(results!="") {
                        
                        const token = jwt.sign({id: results[0].idTipo}, 'secretkey');
                        return res.status(200).json({"id":3,"token":token, "resultados":results});
                    }
                });
            }
            
        }
    });
    
});

router.post('/cambiarclave', jsonParser,(req,res)=>{
    let email = req.body.email;
    if(req.body.contrasenya==req.body.recontrasenya){
        res.json({"id":3});
    }
    else{
        let recontrasenya=CryptoJS.AES.encrypt(req.body.recontrasenya, key).toString();
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
    }
    
})

//Modificar
// Obtener puntos de reciclaje
router.get('/puntosReciclaje', (req, res) =>{
    let sql = 'select * from PuntoReciclaje';
    connection.query(sql, (error, results, fields) =>{
        if(error) throw error;
        else{
            res.json(results);
        }
    })
})
//Actualizar un usuario
router.put('/actualizarusuario', jsonParser,(req,res)=>{
    const nombre = req.body.nombre;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const region = req.body.region;
    const comuna = req.body.comuna;
    console.log(nombre,email,telefono,region,comuna)
    let sql = `update Usuario set nombre='${nombre}', telefono='${telefono}', region='${region}', comuna='${comuna}' where email='${email}'`;

    connection.query(sql, (error, results, fields) =>{
        if(error) throw error;
        else{
            if(results.affectedRows==0) res.json({id: 2});
            else res.json({id: 1});
        }
    });
});
//Eliminar un usuario
router.delete('/eliminarusuario',verifyToken ,(req, res) =>{
    const nombre = req.body.nombre;
    let sql = `delete from PuntoReciclaje where nombre='${nombre}'`;
    connection.query(sql, (error, results, fields) =>{
        if(error) throw error;
        else{
            res.json({status: "punto eliminado"})
        }
    })
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
    next();
}