import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Product Analysis App</h1>
        <div className="topOfLayout">
          <div className="products">
            <p>Choose a product:</p>
              <ul>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
              </ul>  
          </div>
          <div className="details">
            <h3>Product Title</h3>
            <p>Product Image</p>
            <p>Product Description</p>
            <p>Product current price</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
