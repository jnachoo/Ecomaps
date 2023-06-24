const router = require('express').Router()
const conexion = require('./config/conexion')

// usuario
router.post('/inicioSesion', (req, res) =>{
    const email = req.body.email;
    const contrasenya = req.body.contrasenya;

    let sql = `select * from Usuario where email='${email}' and contrasenya='${contrasenya}'`;
    conexion.query(sql, (error, results, fields) => {
        if (error) throw error;
        else{
            res.json(results);
        }
    })
});

router.post('/registro', (req, res) =>{
    const email = req.body.email;
    const nombre = req.body.nombre;
    const rut = req.body.rut;
    const telefono = req.body.telefono;
    const fechaNac = req.body.fechaNac;
    const region = req.body.region;
    const comuna = req.body.comuna;
    const contrasenya = req.body.contrasenya;
    const idTipo = 1;

    console.log(req.body)

    let sql1 = `select * from Usuario where email='${email}'`;
    conexion.query(sql1, (error, results, fields) =>{
        if(error) throw error;
        else{
            if(results.length==0){
                let sql2 = `insert into Usuario values ('${email}', '${nombre}', '${rut}', '${telefono}', '${fechaNac}', '${region}', '${comuna}', '${contrasenya}', ${idTipo})`;
                conexion.query(sql2, (error, results, fields) =>{
                    if(error) throw error;
                    res.json({message:true});
                })

            }else{
                res.json({message: false});
            }
        }
    })
})


router.put('/usuario/:email', (req,res)=>{
    const email = req.body.email;
    const telefono = req.body.telefono;
    const region = req.body.region;
    const comuna = req.body.comuna;
    const contrasenya = req.body.contrasenya;
    let sql = `update Usuario set telefono='${telefono}', region='${region}', comuna='${comuna}', contrasenya='${contrasenya}' where email='${email}'`;

    conexion.query(sql, (error, results, fields) =>{
        if(error) throw error;
        else{
            res.json({status: "cambios realizados"})
        }
    });
});

// puntos de reciclaje
router.get('/puntosReciclaje', (req, res) =>{
    let sql = 'select * from PuntoReciclaje';
    conexion.query(sql, (error, results, fields) =>{
        if(error) throw error;
        else{
            res.json(results);
        }
    })
})

router.delete('/puntosReciclaje/:nombre', (req, res) =>{
    const nombre = req.body.nombre;
    let sql = `delete from PuntoReciclaje where nombre='${nombre}'`;
    conexion.query(sql, (error, results, fields) =>{
        if(error) throw error;
        else{
            res.json({status: "punto eliminado"})
        }
    })
});

// publicaciones
router.get('/publicaciones', (req, res) =>{
    let sql = 'select * from Publicacion';
    conexion.query(sql, (error, results, fields) =>{
        if(error) throw error;
        else{
            res.json(results);
        }
    })
})

module.exports = router