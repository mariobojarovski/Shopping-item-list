import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
     };
    render() { 
        return(
        <React.Fragment>
            <span> {this.formCount()} </span>
            <button>Increment</button>
        </React.Fragment>
        ) ;
    }

    formCount(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;  