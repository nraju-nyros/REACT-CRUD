import React from 'react';

class Mapp extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			data:[
              
              {
              	id:1,
              	name:"siva",
              	city:"hyd",
              	age:22
              },
              {
              	id:2,
              	name:"ram",
              	city:"kkd",
              	age:23
              },
              {
              	id:2,
              	name:"raju",
              	city:"kkd",
              	age:24
              }
			]
		}
	}

	render(){
		return(
<div>   <h3> Data through from json by map function</h3>        
 <table className="table table-hover"><thead><tr><th>Name</th><th>City</th><th>Age</th></tr></thead></table>
               	{this.state.data.map((dynamicdata,i)=> 
               		<Content
               		key={i} componentData={dynamicdata} />)}
               </div>
			)
	}
}


class Content extends React.Component{
	render(){
		return(
			<div ><table className="table table-hover">
				<tbody>
				<tr>
				<td>{this.props.componentData.name}</td>
				<td>{this.props.componentData.city}</td>
				<td>{this.props.componentData.age}</td></tr></tbody></table>
			</div>
			)
	}
}
export default Mapp;

<ul>
    {this.state.data.map(function(user,i){
      return<li key={i}> {user.name}</li>
    })}
  </ul>



  