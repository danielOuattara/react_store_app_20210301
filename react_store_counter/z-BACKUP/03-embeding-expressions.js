

import React, { Component } from 'react';

class Counter extends Component {
    state = {  // includes all data the components need !
        count: 1
    } 
    render() { 
        return ( 
            <div>
                <span className=" m-4">{this.state.count}</span>
                <br/>
                <span className=" m-4">{this.formatCount()}</span>
                <br/>
                <button>Increment</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count
    }
}


 
export default Counter ;