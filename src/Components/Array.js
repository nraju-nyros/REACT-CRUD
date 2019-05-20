import React from 'react';

class Arrayy extends React.Component{
    constructor(){
      super();
      this.state={
      	data:[]
      }
      this.setStateHandler = this.setStateHandler.bind(this);

    };

    setStateHandler(){
    	var item="hello ";
    	var item1=" world ";
    	var myArray = this.state.data.slice();
          myArray.push(item);
          myArray.push(item1);
          this.setState({data:myArray})
    	    
    	    
    };


    render(){
     return(
     	<div>
     	<button className="btn btn-sm btn-info"onClick={this.setStateHandler}> pushed to Array </button>
     	<h4>{this.state.data}</h4>

 
      	</div>

     	)

    }


}

export default Arrayy;