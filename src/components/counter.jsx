
import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value:this.props.counter.value
     };
    handleIncrement = () => {
        console.log('Increment Clicked',this);
        this.setState({ value: this.state.value+1 })//da moze da se editira vo state
    };
    render() { 
        let classes = this.getBadgeClasses();

        return(
            <div>
            <span  className={this.getBadgeClasses()}> {this.formCount()} </span>
            <button
            onClick={()=>this.props.onIncrement(this.props.counter)}className="btn btn-secondary btn-sm">Increment</button>
            <button
             onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        ) ;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formCount(){
        const{value}=this.props.counter
        return value === 0 ? 'Zero' :value;
    }
}
 
export default Counter;  