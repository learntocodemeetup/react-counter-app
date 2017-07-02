import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.initialquantity,
            totalunitprice: 0.00
        };


    }

    itemCost(){
        console.log(typeof this.props.unitprice)
        return this.state.quantity * Number(this.props.unitprice)

    }

    handleUp(){
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    handleDown(){
        if (this.state.quantity > 0) {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }

    }


    render() {

        return (
            <div className="counter">
                <div className="image-name-combo">
                    <img src={process.env.PUBLIC_URL + "images/" + this.props.imageURL + ".svg"} />
                    <span className="item-text">{this.props.item}</span>
                </div>

                <button onClick={this.handleDown.bind(this)}> - </button>
                <span className="item-quantity">{this.state.quantity}</span>
                <button onClick={this.handleUp.bind(this)}> + </button>

                <p>Price ${this.itemCost().toFixed(2)}</p>




            </div>
        );
    }
}

export default Counter;
