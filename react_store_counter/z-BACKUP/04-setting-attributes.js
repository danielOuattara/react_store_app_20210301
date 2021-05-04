
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
                <span style= {this.styles}>{this.formatCount()}</span>
                <br/>
                <span style= {{fontSize: 30, margin:"20px" }}>{this.formatCount()}</span>
                <br/>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count
    }
}


 
export default Counter ;