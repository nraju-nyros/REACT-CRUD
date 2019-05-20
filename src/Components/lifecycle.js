import React from 'react';

class Lifecycle extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         data: 0
      }
      this.setNew = this.setNew.bind(this);
   };
   setNew(){
      this.setState({data:this.state.data +1})
   }

   render(){
      return(
          <div>
             <button onClick={this.setNew}>Lifecycle</button>
             <Content myNumber={this.state.data}></Content>
          </div>
         );
   }
}

   class Content extends React.Component{
      componentWillMount(){
         console.log('Component Will Mount')
      }
      componetDidMount(){
         console.log('Component Did Mount')
      }
      componentWillReceiveProps(newProps){
         console.log('component will receive props')
      }
      shouldComponentUpdate(newProps,newState){
         return true;
      }
      componetWillUpdate(nextProps,nextState){
         console.log('Component Will Update');
      }
      componentDidUpdate(prevProps,prevState){
         console.log('Component Did Update');
      }
      componentWillUnmount(){
         console.log('Component will unmount');
      }

      render(){
         return(
            <div>
               <h3>{this.props.myNumber}</h3>
            </div>
            )
      }

   }
   

export default Lifecycle;