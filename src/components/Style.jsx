
import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
     };

    //  style={
    //     fontSize:20,
    //     fontWeight:'bold'
     };

    render() { 
        return(
        <React.Fragment>
         //    style={this.style} KOMENTAR
            <span style={{fontsize:30}} className="badge badge-primary m-2"> {this.formCount()} </span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
        ) ;
    }

    formCount(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;  