import React from 'react';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
export class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            countS:0,
            loading: true
        }
        this.state={
            countT:0,
            loading1:true
        }
        
    }
    
    
    async componentDidMount(){

        let url = await "http://localhost:3001/api/getCountStudents"
        let data = await fetch(url);
        let JSON = await data.json();
        await this.setState({countS:JSON[0].count})
        await console.log("I was here")
        await this.setState({loading:false})
       
        let url1 = await "http://localhost:3001/api/getCountTeachers"
        let data1 = await fetch(url1);
        let JSON1 = await data1.json();
        await this.setState({countT:JSON1[0].count})
        await console.log("I was here")
        await this.setState({loading1:false})

    }
    
    
    render()
    {
        if(this.state.loading){
            return(

                <div class="container ">
                    <div className="row offset-1 p-2">
                        <div class="p-3 mb-2 border border-primary col-5  ms-2 rounded " style={{height:"150px", width:"400px",fontSize:"40px"}}>
                            <h2>Student</h2>
                           <div>
                               <ion-icon name="person-add"></ion-icon>
                           </div>
                           <h1 style={{position:'relative',top:"-90px",right:'-250px',fontSize:'60px'}}>{this.state.countS}</h1>
                        </div>
                        <div class="p-3 mb-2 border border-primary col-5 ms-2 rounded" style={{height:"150px", width:"400px",fontSize:"40px"}}>
                           <h2>Teacher</h2>
                           <div >
                               <ion-icon name="people"></ion-icon>
                            </div>
                            <h1 style={{position:'relative',top:"-90px",right:'-250px',fontSize:'60px'}}>1+</h1>
                        </div>
                    </div>
                    <div className="row offset-1 p-2">
                        <div class="p-3 mb-2  border border-primary col-5 ms-2 rounded" style={{height:"150px", width:"400px",fontSize:"40px"}}>
                        <h2>Attendence</h2>
                        <div >
                            <ion-icon name="checkbox-outline"></ion-icon>
                        </div>
                        <h1 style={{position:'relative',top:"-90px",right:'-250px',fontSize:'60px'}}>1+</h1>
                         </div>
                        <div class="p-3 mb-2  border border-primary  col-5 ms-2 rounded" style={{height:"150px", width:"400px",fontSize:"40px"}}>
                        <h2>Class</h2>
                        <div ><ion-icon name="laptop"></ion-icon></div>
                        <h1 style={{position:'relative',top:"-90px",right:'-250px',fontSize:'60px'}}>1+</h1>
                        </div>
                       
                    </div>
                           
        
            </div>
                )
                
        }

        else{


            return(

                <div class="container ">
                    <div className="row offset-1 p-2">
                        <div class="p-3 mb-2 border border-primary col-5  ms-2 rounded " style={{height:"150px", width:"400px",fontSize:"40px"}}>
                            <h2>Student</h2>
                           <div>
                               <ion-icon name="person-add"></ion-icon>
                           </div>
                           <h1 style={{position:'relative',top:"-90px",right:'-250px',fontSize:'60px'}}>{this.state.countS}+</h1>
                        </div>
                        <div class="p-3 mb-2 border border-primary col-5 ms-2 rounded" style={{height:"150px", width:"400px",fontSize:"40px"}}>
                           <h2>Teacher</h2>
                           <div >
                               <ion-icon name="people"></ion-icon>
                            </div>
                            <h1 style={{position:'relative',top:"-90px",right:'-250px',fontSize:'60px'}}>{this.state.countT}+</h1>
                        </div>
                    </div>
                    <div className="row offset-1 p-2">
                        <div class="p-3 mb-2  border border-primary col-5 ms-2 rounded" style={{height:"150px", width:"400px",fontSize:"40px"}}>
                        <h2>Attendence</h2>
                        <div >
                            <ion-icon name="checkbox-outline"></ion-icon>
                        </div>
                        <h1 style={{position:'relative',top:"-90px",right:'-250px',fontSize:'60px'}}>1+</h1>
                         </div>
                        <div class="p-3 mb-2  border border-primary  col-5 ms-2 rounded" style={{height:"150px", width:"400px",fontSize:"40px"}}>
                        <h2>Class</h2>
                        <div ><ion-icon name="laptop"></ion-icon></div>
                        <h1 style={{position:'relative',top:"-90px",right:'-250px',fontSize:'60px'}}>1+</h1>
                        </div>
                       
                    </div>
                           
        
            </div>
                )
            
        }
    }
}