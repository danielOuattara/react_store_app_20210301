

import React, { Component } from 'react';
class Counter extends Component {

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    state = {  // includes all data the components need !
        count: 1,
    };

    handleIncrement() {
        console.log("button Clicked" ,this)
    }

    handleIncrement2 = () => {
        console.log("button Clicked" ,this)
    }

    render() { 

        return ( 
            <div>
                <span className={this.getDynamicClass()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-3">Increment</button>
                <br/>
                <span className={this.getDynamicClass()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement2} className="btn btn-secondary btn-sm m-3">Increment</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count
    }

    getDynamicClass = () => {
        let classeDyn = " m-3 badge badge-";
        classeDyn += this.state.count === 0 ? "warning" : "primary";
        return classeDyn;
    }

}


 
export default Counter ;