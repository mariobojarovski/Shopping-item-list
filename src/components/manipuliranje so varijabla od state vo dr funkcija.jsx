
import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
     };
    handleIncrement = () => {
        console.log('Increment Clicked',this);
        this.setState({ count: this.state.count+1 })//da moze da se editira vo state
    };
    render() { 
        let classes = this.getBadgeClasses();

        return(
        <React.Fragment>
            <span  className={this.getBadgeClasses()}> {this.formCount()} </span>
            <button onClick={this.handleIncrement}className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
        ) ;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formCount(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;