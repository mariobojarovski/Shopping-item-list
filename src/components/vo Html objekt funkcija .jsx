
import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
     };
    render() { 
        let classes = this.getBadgeClasses();

        return(
        <React.Fragment>
            <span  className={this.getBadgeClasses()}> {this.formCount()} </span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
        ) ;
    }

    getBadgeClasses() {
        let classes = "badge m2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formCount(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;  