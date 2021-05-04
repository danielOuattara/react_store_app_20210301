

import React, { Component } from 'react';

class Counter extends Component {
    state = {  // includes all data the components need !
        count: 0,
        // imageUrl: "https://picsum.photos/300",
    } 

    styles = {
        fontSize: "20px",
        fontWeight: "bold",
        color: "magenta",
        margin: "25px 50px 100px 100px"
    }

    render() { 

        return ( 
            <div>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span className="badge badge-primary m-3">{this.formatCount()}</span>
                <br/>
                <span className={this.getDynamicClass()}>{this.formatCount()}</span>
                <br/>
                <button className="btn btn-secondary btn-sm m-3">Increment</button>
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