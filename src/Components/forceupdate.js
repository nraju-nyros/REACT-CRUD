import React from 'react';

class ForceUpdate extends React.Component {
   constructor() {
      super();
      this.state = {random:Math.random()};
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   };
   forceUpdateHandler() {
      this.setState({random:Math.random()});
   };
   render() {
      return (
         <div>
            <button className="btn btn-sm btn-success" onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>{this.state.random}</h4>
         </div>
      );
   }
}
export default ForceUpdate;