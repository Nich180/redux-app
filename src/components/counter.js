import React from "react";
import { connect } from 'react-redux';

class Counter extends React.Component {
    
//this.props.dispatch is acquired from the connect()
//which injects the the dispatch() via props
//use dispatch to make an action on the store
    
    increment = () => {
      this.props.dispatch({ type: 'INCREMENT' })
    };

    decrement = () => {
      this.props.dispatch({ type: 'DECREMENT' })
    };
    
    render(){
        return(
            <div className="counter"> 
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>Negative button</button>
                    <span className="count">{this.props.count}</span>
                    <button onClick={this.increment}>Negative button</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state.count
});

export default connect(mapStateToProps)(Counter);
//swap default component to connect()([componentname])
//connects this to the redux store
//provide data using mapStateToProps
//export a new component which is called connectCounter