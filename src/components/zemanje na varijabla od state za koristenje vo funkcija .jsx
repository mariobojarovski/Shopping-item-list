
import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
     };
    //  constructor(){
    //      super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    //  }
    handleIncrement = () => {
        console.log('Increment Clicked',this);//za da zemesh nekoja varijabla od state mora da se povika arrow function
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
