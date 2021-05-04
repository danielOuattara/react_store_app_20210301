
import React, { Component } from 'react';
class Counter extends Component {

    state = {
        count: 0,
    };

    handleIncrement = () => {
        this.setState({ 
            count: this.state.count +1
        })
    }

    render() { 

        return ( 
            <div>
                <span className={this.getDynamicClass()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-3">Increment</button>
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