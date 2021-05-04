

import React, { Component } from 'react';

class Counter extends Component {
    state = {  // includes all data the components need !
        count: 0,
        // imageUrl: "https://picsum.photos/300",
        tags: ["tag1", "tag2", "tag3"],
    } 

    styles = {
        fontSize: "20px",
        fontWeight: "bold",
        color: "magenta",
        margin: "25px 50px 100px 100px"
    }

    cart = [ 
        { id: 1 , name: "jean",   color: "blue",       size: 3,    quantity: 2 },
        { id: 2 , name: "tShirt", color: "lightgreen", size: "XL", quantity: 1 },
        { id: 3 , name: "shoes",  color: "blue",       size: "XL", quantity: 1 },
    ]
    

    render() { 

        return ( 
            <div>
                {/* <img src={this.state.imageUrl} alt=""/> */}
               
                <span className={this.getDynamicClass()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm m-3">Increment</button>
                <ul>
                    { this.state.tags.map( tag => <li key={tag}>{tag}</li>)}
                </ul>

                <ul>
                    { this.cart.map( item => <li key={item.id}> {item.name}, {item.color}, {item.size}, {item.quantity}</li>)}
                </ul>

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