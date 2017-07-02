import React, { Component } from 'react';
import Counter from './Counter'
import './App.css';
import counterData from './counterData';

class App extends Component {
    getCounterComponents() {
        return counterData.map(function(counter) {
            return <Counter
                        imageURL={counter.imageURL}
                        item={counter.item}
                        initialquantity={counter.quantity}
                        key={counter.id}
                        unitprice={counter.unitprice}
                    />
        });
    }

  render() {
    return (

      <div className="App">
          <h1>Overpriced Coffee Co</h1>
          <p>Where purchases are enforced by punishment of death</p>
        {this.getCounterComponents()}
      </div>
    );
  }
}

export default App;
