const express = require('express');
const db = require('../db')

const router = express.Router();


//post student data
router.post('/postStudents',async function(req,res,next){

    try{
        res.json(await db.postStudents(req.body));
    
    }
    catch(err){
        console.error('Error has occured',err.message);
        next(err);
    }
})

//get all students
router.get('/getAllStudents',async(req,res,next)=>{
try{
    let results = await db.smsDB.all()
    res.json(results)
}
catch(e){
    console.log(e);
    res.sendStatus(500);
}
});

//get count students
router.get('/getCountStudents',async(req,res,next)=>{
    try{
        let results = await db.countStudents.all()
        res.json(results)
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
    });




//TEACHERS

router.get('/getCountTeachers',async(req,res,next)=>{
    try{
        let results = await db.countTeachers.all()
        res.json(results)
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
    });



    router.get('/getAllTeachers',async(req,res,next)=>{
        try{
            let results = await db.getAllTeachers.all()
            res.json(results)
        }
        catch(e){
            console.log(e);
            res.sendStatus(500);
        }
        });



        //post teachers

        router.post('/postTeachers',async function(req,res,next){

            try{
                res.json(await db.postTeachers(req.body));
            
            }
            catch(err){
                console.error('Error has occured',err.message);
                next(err);
            }
        })

module.exports = router;