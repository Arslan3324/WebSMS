import React from 'react'
export class Studentdata extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state ={FirstName:"",LastName:"",DOB:"",FatherName:"",Address:"",Email:"",MobileNo:"",ClassId:0,Age:0,RollNo:0}
        this.handle = this.handle.bind(this)
        this.submit = this.submit.bind(this)
    }
    handle(e)
    {
            const {name,value}= e.target
            this.setState({
                [name]:value
            })
    }

    async submit(){
 


        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "StudentID": this.state.RollNo,
  "firstName": this.state.FirstName,
  "lastName": this.state.LastName,
  "fatherName": this.state.FatherName,
  "dob": this.state.DOB,
  "classID": this.state.ClassId,
  "address": this.state.Address,
  "phoneNumber": this.state.MobileNo,
  "email": this.state.Email,
  "age": this.state.Age
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

if((this.state.FirstName!="")&&(this.state.LastName!="")&&(this.state.FatherName!="")&&(this.state.DOB!="")&&(this.state.ClassId!=0)&&(this.state.Address!="")&&(this.state.MobileNo!="")&&(this.state.Email!="")&&(this.state.Age!=0)&&(this.state.RollNo!="")){

fetch("http://localhost:3001/api/postStudents", requestOptions)
  .then(response => response.text())
  .then(result => alert('Successfully Added: ',this.state.FirstName))
  .catch(error => console.log('error', error));
}
else{
    alert("Please Fill All the Entries")
}
        
        // const requestOptions = {
        //     method:'POST',
        //     headers:{'Content-Type':'application/json'},
        //     body : JSON.stringify({
        //         "StudentID": this.state.RollNo,
        //         "firstName": this.state.firstName,
        //         "lastName": this.state.lastName,
        //         "fatherName": this.state.fatherName,
        //         "dob": this.state.dob,
        //         "addres:": this.state.Address,
        //         "phoneNumber": this.state.phoneNumber,
        //         "email": this.state.email,
        //         "age": this.state.age,  
        //       })
        
        // }

        // const response = await fetch('http://localhost:3001/api/postStudents',requestOptions);
        // const data = await response.json();
        // console.log(data.RollNo)       
   

    }
    render()
    {
        return (

           <div className="container">
              <div className="p-3 mb-2 border border-primary" style={{fontSize:"25px"}}>
                   Student
               </div>
                <div class="border border-primary">
                   <h4 className='mt-3 ms-2'>Personal Information</h4>
                    
                    <form className="ms-2 row">
                        <div class="form-group col-4" >
                        <input type="text" class="form-control" id="exampleInputText1" name="FirstName" placeholder="First Name" onChange={this.handle}/>
                        <br/>
                        <input type="text" class="form-control" id="exampleInputText2" name="LastName"  placeholder="Last Name"  onChange={this.handle}/>
                        <br/>
                        <input type="date" class="form-control" id="exampleInputText3" name="DOB" onChange={this.handle}/>
                        </div>  
                        <div class="form-group col-4" >
                        <input type="text" class="form-control" id="exampleInputText4"  name="FatherName" placeholder="Father Name"  onChange={this.handle}/>
                        <br/>
                        <input type="text" class="form-control" id="exampleInputText5"  name="Address" placeholder="Current Address"  onChange={this.handle}/>
                        <br/>
                        <input type="number" class="form-control" id="exampleInputText6" name="Age"  placeholder="Age"  onChange={this.handle}/>
                        <br/>
                        </div>  
                    </form>
                    <div className='row'>
                    <div className="col-4 ms-3">
                    <h4 className='mt-3 ms-2'>Account Information</h4>
                    <form>
                    
                        <div className="form-group"> 
                        
                        <input type="email" class="form-control" id="exampleInputText7" name="Email" placeholder="Email Address"  onChange={this.handle}/>
                        <br/>
                        <input type="text" class="form-control" id="exampleInputText8" name="MobileNo" placeholder="Phone Number"  onChange={this.handle}/>
                        <br/>
                        
                        </div>
                    </form>
                    </div>
                    <div className="col-4 ms-3">
                    <h4 className='mt-3 ms-2'>School Details</h4>
                    <form>
                        <div className="form-group"> 
                        <input type="number" class="form-control" id="exampleInputText9" name="ClassId" placeholder="Class ID"  onChange={this.handle}/>
                
                        <br/>
                        <input type="number" class="form-control" id="exampleInputText10" name="RollNo" placeholder="Roll No"  onChange={this.handle}/>
                        <br/>
                        </div>
                    </form>
                    </div>
                    <br/>
                    </div>
                        <div className="d-flex justify-content-center">
                        <input type="button" value="Submit" onClick = {this.submit} className="btn btn-primary col-4" />
                        </div>
                                      
                    <br/><br/>
                    </div>
                    
                </div>
               
        )
    }
}