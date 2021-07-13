import React from 'react';
import { Studentdata } from './studentdata';

export class Student extends React.Component{
    constructor()
    {
        super()
        this.callit = this.callit.bind(this)
        this.state = {flag:true, loading:true, data:[]}
       
    }

    async componentDidMount(){

      let url = await "http://localhost:3001/api/getAllStudents"
      let data = await fetch(url);
      let JSON = await data.json();
      this.setState({data:JSON})
      this.setState({loading:false})

     

  }

    callit()
    {
        this.setState({flag:false})
    }
    render()
    {
        if((this.state.flag==true)&&(this.state.loading))
        {
            return(
                <div>
                    <div className="p-3 mb-2 bg-info text-white" style={{fontSize:"25px"}}>
                        Student <input type="button" className="btn btn-secondary float-end" value="Create New" onClick={this.callit}/>
                    </div>
                    <br/>
                    <br/>
                    <input type="text"  Class="form-control" placeholder="Search " style={{width:'200px'}}/>
                    <br/>
             <table class="table table-hover">
             <thead>
               <tr>
                 <th scope="col">Student ID</th>
                 <th scope="col">First Name</th>
                 <th scope="col">Last Name</th>
                 <th scope="col">Fathers Name</th>
                 <th scope="col">Date of Birth</th>
                 <th scope="col">Class</th>
                 <th scope="col">Address</th>
                 <th scope="col">Phone</th>
                 <th scope="col">Email</th>

               </tr>
             </thead>
             <tbody>
              
             </tbody>
           </table></div>
         )
        }
        if(this.state.flag==false)
        {
            return(
                <Studentdata/>
            )
        }
        if(this.state.loading==false){

          return(

            <div>
                <div className="p-3 mb-2 bg-info text-white" style={{fontSize:"25px"}}>
                    Student <input type="button" className="btn btn-secondary float-end" value="Create New" onClick={this.callit}/>
                </div>
                <br/>
                <br/>
                <input type="text"  Class="form-control" placeholder="Search " style={{width:'200px'}}/>
                <br/>
         <table class="table table-hover">
         <thead>
           <tr>
             <th scope="col">Student ID</th>
             <th scope="col">First Name</th>
             <th scope="col">Last Name</th>
             <th scope="col">Fathers Name</th>
             <th scope="col">Date of Birth</th>
             <th scope="col">Class</th>
             <th scope="col">Address</th>
             <th scope="col">Phone</th>
             <th scope="col">Email</th>

           </tr>
         </thead>
         <tbody>
          
          {

            this.state.data.map((itm)=>(
              <tr>
                <td>
                  {itm.StudentID}
                </td>

                <td>
                  {itm.firstName}
                </td>

                <td>
                  {itm.lastName}
                </td>

                <td>
                  {itm.fatherName}
                </td>

                <td>
                  {itm.dob}
                </td>

                <td>
                  {itm.classID}
                </td>

                <td>
                  {itm.address}
                </td>

                <td>
                  {itm.phoneNumber}
                </td>

                <td>
                  {itm.email}
                </td>
              </tr>

            ))


          }
          
         </tbody>
       </table></div>
     )
        }
        
        
    }

}