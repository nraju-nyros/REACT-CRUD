import React from 'react';
import ReactDOM from 'react-dom';

class Component2 extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			data:[]
		}
		this.setHandler = this.setHandler.bind(this);
	}
	setHandler(){
		var item = "helooo ";
		var item1 = " world ";
		var myArray= this.state.data.slice();
		    myArray.push(item);
		    myArray.push(item1);
		    this.setState({data:myArray});
		    var mydiv=document.getElementById('mydiv');
		    ReactDOM.findDOMNode(mydiv).style.color = 'green';
	};
	render(){
		return(
           <div><button onClick={this.setHandler}>setState</button> 

             <h3 id="mydiv">{this.state.data}</h3>
           </div>
          
			)
	}
}

export default Component2;