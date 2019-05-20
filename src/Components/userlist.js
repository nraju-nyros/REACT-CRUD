import React from 'react';
class Userlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

     handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <div>
        <h4>list of data using map</h4>
       
        <form onSubmit={this.handleSubmit}>
         
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          /><br/>
          <button className="btn btn-sm btn-info">
            Add
          </button><br/> <p>Total users {this.state.items.length } </p>
           <TodoList items={this.state.items} />
          
        </form>
      </div>
    );
  }

 
}

class TodoList extends React.Component {
  render() {
    return (
    	<div>
      <ul className="list" >
          {
          	this.props.items.map(item=>(
                <li key={item.id}>{item.text}</li>
          		))
          }


      
        
      </ul></div>
    );
  }
}

export default Userlist;
