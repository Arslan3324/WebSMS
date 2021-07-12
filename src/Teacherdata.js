import React from 'react'
export class Teacherdata extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={empID:0,TeacherName:"",classID:0,Subject:"",PhoneNumber:""}
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
    async submit()
    {
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "empID": this.state.empID,
  "TeacherName": this.state.TeacherName,
  "classID": this.state.classID,
  "Subject": this.state.Subject,
  "PhoneNumber": this.state.PhoneNumber
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

if((this.state.empID!=0)&&(this.state.TeacherName!="")&&(this.state.classID!=0)&&(this.state.Subject!="")&&(this.state.PhoneNumber=""))
{
    fetch("http://localhost:3001/api/postTeachers", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
else{
    alert("Please Fill All the Entries")
}
    }
    render()
    {
        return (

           <div className="container">
              <div className="p-3 mb-2 border border-primary" style={{fontSize:"25px"}}>
                   Teacher
               </div>
                <div class="border border-primary">
                   <h4 className='mt-3 ms-2'>Personal Information</h4>
                    
                    <form className="ms-2 row">
                        <div class="form-group col-4" >
                        <input type="text" class="form-control" id="exampleInputText1" name="TeacherName" placeholder="Name"/>
                        <br/>
                        <input type="number" class="form-control" id="exampleInputText2" name="PhoneNumber" placeholder="Mobile No"/>
                        </div>  
                    </form>
                    <div className='row'>
                    <div className="col-4 ms-3">
                    <h4 className='mt-3 ms-2'>School Information</h4>
                    <form>
                    
                        <div className="form-group"> 
                        
                        <input type="number" class="form-control" id="exampleInputText3"  name="empID" placeholder="Employ ID"/>
                        <br/>
                        <input type="number" class="form-control" id="exampleInputText4" name="classID" placeholder="Class ID"/>
                        <br/>
                        <input type="text" class="form-control" id="exampleInputText1"  name="Subject" placeholder="Subject"/>
                        <br/>
                        
                        </div>
                    </form>
                    <div className="d-flex justify-content-center">
                        <input type="button" value="Submit" onClick = {this.submit} className="btn btn-primary col-4" />
                        </div>
                    </div>
                    
                    
                    <br/>
                    </div>
                    </div>
                </div>
               
        )
    }
}