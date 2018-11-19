import React, { Component } from 'react';
import Counter from "./components/counter";
import './App.css';
import { createStore } from 'redux';
import { Provider } from "react-redux";


const initialState = {
    count: 42
}

function reducer(state = initialState, action) {
   switch (action.type){
       case "INCREMENT":
        return {
          count: state.count + 1  
        };
       case "DECREMENT":
        return {
          count: state.count - 1  
        };
       default:
        return state;
   }
}
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <Counter/>
      </Provider>
    );
  }
}

export default App;
