const mysql = require('mysql')

const pool  = mysql.createPool({

connectionLimit:10,
password:'',
user:'root',
database:'sms',
host:'localhost',
port:'3306'


});

// let connection = mysql.createConnection({host:'localhost',user:'root',password:'',database:"sms"})



 async function postStudents(studentRecord){

   try{
    const result = await pool.query('INSERT INTO students (StudentID,firstName,lastName,fatherName,dob,classID,address,phoneNumber,email,age) VALUES (?,?,?,?,?,?,?,?,?,?)',
    [studentRecord.StudentID,studentRecord.firstName,studentRecord.lastName,studentRecord.fatherName,studentRecord.dob,studentRecord.classID,studentRecord.address,studentRecord.phoneNumber,studentRecord.email,studentRecord.age]);

    let message ='Success';
    return {message}
   }
    
   catch{
       let message = "Error"
       return {message}
       
}
    
}


let countStudents = {};

countStudents.all = ()=>{

    return new Promise((resolve, reject)=>{
    
    
        pool.query('Select count(StudentID) as count from students', (err, result) =>{
    
            if(err){
                return reject(err);
            }
    
            return resolve(result)
    
        })
    
    })    
    
    
    
    };



let smsDB = {};


smsDB.all = ()=>{

return new Promise((resolve, reject)=>{


    pool.query('Select * from students', (err, result) =>{

        if(err){
            return reject(err);
        }

        return resolve(result)

    })

})    



};



//TEACHERS

let countTeachers = {};

countTeachers.all = ()=>{

    return new Promise((resolve, reject)=>{
    
    
        pool.query('Select count(empID) as count from teachers', (err, result) =>{
    
            if(err){
                return reject(err);
            }
    
            return resolve(result)
    
        })
    
    })    
    
    
    
    };




    let getAllTeachers = {};


    getAllTeachers.all = ()=>{
    
    return new Promise((resolve, reject)=>{
    
    
        pool.query('Select * from teachers', (err, result) =>{
    
            if(err){
                return reject(err);
            }
    
            return resolve(result)
    
        })
    
    })    
    
    
    
    };



    //POST TEACHERS

    
 async function postTeachers(teacherRecord){

    try{
     const result = await pool.query('INSERT INTO teachers (empID,TeacherName,classID,Subject,PhoneNumber) VALUES (?,?,?,?,?)',
     [teacherRecord.empID,teacherRecord.TeacherName,teacherRecord.classID,teacherRecord.Subject,teacherRecord.PhoneNumber]);
 
     let message ='Success';
     return {message}
    }
     
    catch{
        let message = "Error"
        return {message}
        
 }
     
 }
    


module.exports = {smsDB,countStudents,postStudents,countTeachers,getAllTeachers,postTeachers};