import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
//import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
//import Viewuser from './Components/Viewuser.js';



class App extends React.Component{
        constructor(props){
          super(props);
          this.state ={data:[],
            _id:'',
            name:'',
            email:'',
            phone:'',
            password:'',
            name_err_status:true,
            name_err_message:'',
            email_err_status:true,
            email_err_message:'',
            password_err_status:true,
            password_err_message:'',
            phone_err_status:true,
            phone_err_message:'',
            

          }

            this.getUsers= this.getUsers.bind(this);
            this.handleChange=this.handleChange.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
            this.delete_users=this.delete_users.bind(this);
        };

       
      getUsers = () =>{
        fetch('http://10.90.90.110:4000/getUsers',{method:'GET'})

        .then((response) =>{
          if(response.ok) return response.json();
           throw new Error('Request failed.');
        }) 
      
        .then((myJson)=>{
          var res = JSON.stringify(myJson);
          var result = JSON.parse(res)
          this.setState({data: result.data});
          console.log(result)
        }) 
      
        .catch(function(error){
          console.log(error);
        });
        
      };
    

      componentDidMount() {
        this.getUsers();
      }


      handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value,
          [e.target.name + '_err_status']: false,
        });
   
      }


      handleSubmit (s){
          s.preventDefault();
          const name = this.state.name;
          const email = this.state.email;
          const phone = this.state.phone;
          const password = this.state.password;

          const data={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            password:this.state.password
          }
          
          var i=1;
            i;
          if (name===''){
            i=0;
            this.setState({name_err_message:'please enter Your name'})
          }

          if(email===''){
            i=0;
            this.setState({email_err_status:'please enter your email'})
          }
          
          if(password===''){
            i=0;
            this.setState({password_err_message:'please enter Your password'})
          }

          if(phone===''){
            i=0;
            this.setState({phone_err_message:'Please enter your phone'})
          }

          
          else{ i=1

              fetch("http://10.90.90.110:4000/createUser",{method:"POST",headers: {'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json'},dataType:'json', body:JSON.stringify(data)})

              .then((response) =>{
                if(response.ok) return response.json();
                throw new Error('Request failed.');
              })
            
              .then((myJson)=>{
                var res = JSON.stringify(myJson);
                var result = JSON.parse(res);
                console.log('result.message',result.message);
                document.getElementById("error_msg").innerHTML = result.message;

                if(result.status===200)
                  {
           
                   document.getElementById("error_msg").innerHTML = "<span class='err_2'>"+result.message+"</span>";
                   this.getUsers();
                   return;

                  }
                  else{
                       document.getElementById("error_msg").innerHTML = "<span class='err_3'>"+result.message+"</span>";
                      }
                  console.log(result)

              })

              .catch(function(error){
                console.log(error);
              });
          }
      }


      delete_users(phone) {
          var data = {phone:phone};
          console.log(data);
          var x = confirm("Are you sure you want to delete?");
            
          if (x){
            fetch('http://10.90.90.110:4000/deleteUser', {method: 'POST',headers: {'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json'},dataType:'json', body:JSON.stringify(data)})
              
              .then(function(response) {
                return response.json();
              })   
            
              .then(function(myJson) {
                var res = JSON.stringify(myJson);
                var y = JSON.parse(res);
      
                if(y.status===200) { 
                   
                  document.getElementById("error_msg").innerHTML= "<span class='err_4'>"+y.message+"";
                  this.getUsers();
                }
                else{
                   document.getElementById("error_msg").innerHTML = y.message;
                }
              }.bind(this))
              
          } 
          else {
               return false ;
          }
      };

  render(){
    return(
      <div className="container" align="center">
              <h3 align="center"> Signup form </h3>
        <form className="form-horizontal" id="form"  >
       
          <div className="form-group">
            <div className="col-sm-4">    
                <input  type="text" name="name" className="form-control"  id="name" placeholder="Enter your Name" value={this.state.name} onChange={this.handleChange}/> <span id="message1"></span>
            </div><p>{this.state.name_err_status ? this.state.name_err_message : ''}</p>
          </div>
             
          <div className="form-group">
            <div className="col-sm-4"> 
              <input  type="email" name="email" className="form-control" id="email" placeholder="Enter your E-Mail " value={this.state.email} onChange={this.handleChange}/>
            </div><p>{this.state.email_err_status ? this.state.email_err_status : ''}</p>
          </div>
              
          <div className="form-group"> 
            <div className="col-sm-4"> 
                  <input  type="password" name="password" className="form-control" id="password"  placeholder="Enter your Password " value={this.state.password} onChange={this.handleChange}/>
            </div><p>{this.state.password_err_status ? this.state.password_err_message : ''}</p>
          </div>
               
          <div className="form-group">
            <div className="col-sm-4"> 
                <input  type="text" name="phone" id="phone"   className="form-control" placeholder="Enter your Phone Number " value={this.state.phone} onChange={this.handleChange}/>
            </div><p>{this.state.phone_err_status ? this.state.phone_err_message : ''}</p>
          </div>

          <div className="form-group">
            <div className="col-sm-4"> 
                <input type="button" className="btn btn-success" id="submitDetails" onClick={this.handleSubmit}  name="submitDetails" value="Submit " />
            </div>
          </div>
        
            <p id="error_msg"> </p>
        </form>
   
        <div>
          <table className="table table-bordered">
            <tbody>
              {this.state.data ? this.state.data.map((person, index) => 
              <tr key={index} data={person}>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td><a className="btn-sm btn-info" href="view_user.html">view</a></td>
                <td><a className="btn-sm btn-danger remove" onClick={() => this.delete_users(person.phone)}>delete</a></td>
              </tr>):"No User Data Found"}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
        
}



        
        

export default App;