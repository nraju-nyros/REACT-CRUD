import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component{
    constructor(props){
    	super(props);
    	this.state = { data:'raju'};
    	this.updateState=this.updateState.bind(this);
    	this.clearInput=this.clearInput.bind(this);

    }
    updateState(e){
      this.setState({data: e.target.value})
    }
    

    clearInput(){
    	this.setState({data:''});
    	ReactDOM.findDOMNode(this.refs.myInput).focus();
     
    }
    render(){
    	return(
              <div><br/>
              <input value={this.state.data} onChange={this.updateState} ref="myInput"/>
              <button className="btn btn-sm btn-success" onClick={this.clearInput}>CLEAR</button>
              <h4>input name:{this.state.data}</h4>
              </div>
    		)
    }

}

export default User;