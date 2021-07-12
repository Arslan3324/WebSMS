import React from 'react';
import { Teacherdata } from './Teacherdata';

export class Teacher extends React.Component{
    constructor()
    {
        super()
        this.callit = this.callit.bind(this)
        this.state = {flag:true, loading:true, data:[]}
    }
    async componentDidMount()
    {

      let url = await "http://localhost:3001/api/getAllTeachers"
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
          return
          (
            <div>
              <div className="p-3 mb-2 bg-info text-white" style={{fontSize:"25px"}}>
                Teacher 
                <input type="button" className="btn btn-secondary float-end" value="Create New" onClick={this.callit}/>
              </div>
              <br/>
              <br/>
              <input type="text"  Class="form-control" placeholder="Search " style={{width:'200px'}}/>
              <br/>
              <table class="table table-hover">
               <thead>
                <tr>
                 <th scope="col">EmployID</th>
                 <th scope="col">Class ID</th>
                 <th scope="col">Name</th>
                 <th scope="col">Subject</th>
                 <th scope="col">Phone No</th>
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
            <Teacherdata/>
        ) 
        }

        if(this.state.loading=false)
        {
          return(
            <div>
              <div className="p-3 mb-2 bg-info text-white" style={{fontSize:"25px"}}>
                Teacher 
                <input type="button" className="btn btn-secondary float-end" value="Create New" onClick={this.callit}/>
              </div>
              <br/>
              <br/>
              <input type="text"  Class="form-control" placeholder="Search " style={{width:'200px'}}/>
              <br/>
              <table class="table table-hover">
               <thead>
                <tr>
                 <th scope="col">EmployID</th>
                 <th scope="col">Class ID</th>
                 <th scope="col">Name</th>
                 <th scope="col">Subject</th>
                 <th scope="col">Phone No</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
           </table></div>     )
        }
        
        
    }

}