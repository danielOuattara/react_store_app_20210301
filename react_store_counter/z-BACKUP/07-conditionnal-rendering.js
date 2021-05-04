

import React, { Component } from 'react';

class Counter extends Component {
    state = {  // includes all data the components need !
        count: 0,
        // imageUrl: "https://picsum.photos/300",
        tags: ["tag 1", "tag 2", "tag 3"],
        items: ["item 1", "item 2", "item 3"],
        carts: ["cart 1", "cart 2", "cart 3"],
        voitures: ["car 1"],
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
               
                <ul>
                    { this.state.tags.map( tag => <li key={tag}>{tag}</li>)}
                </ul>

                <ul>
                    { this.cart.map( item => <li key={item.id}> {item.name}, {item.color}, {item.size}, {item.quantity}</li>)}
                </ul>

                <div>
                    {this.itemsRendering()};
                </div>

                <div>
                    {this.cartRendering()}
                </div>

                <div>
                    {this.state.voitures.length === 0 && "Please choose a car !"}
                    {this.voitureRendering()}
                </div>

            </div>
        );
    }

    itemsRendering = () => {
        let output;
        if (this.state.items.length === 0) {
            output = <p>There is no Tag </p>
        } else {
            output = <ul> {this.state.items.map( item => <li key={item}> {item} </li>)}</ul>
        }
        return output;
    }

    cartRendering = () => {
        return  this.state.items.length === 0 ? 
            <p>Cart is empty</p> 
             : 
            <ul> {this.state.carts.map( cart => <li key={cart}> {cart} </li>)}</ul> 
    }

    voitureRendering = () => {
        return <ul> {this.state.voitures.map( car => <li key={car}> {car} </li>)}</ul> 
    }

}


 
export default Counter ;