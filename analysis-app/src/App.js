import React, { Component } from 'react';
import './App.css';
import  ProductCard from './components/ProductCard/ProductCard'

class App extends Component {

  state = {
    products: [
      { name: 'Example Disc',
        photo: 'example_drive.jpg',
        description: 'Hard disk drive (HDD), hard disk, hard drive, or fixed disk,[b] is an electromechanical data storage device that uses magnetic storage to store and retrieve digital information using one or more rigid rapidly rotating disks (platters) coated with magnetic material. The platters are paired with magnetic heads, usually arranged on a moving actuator arm, which read and write data to the platter surfaces.[2] Data is accessed in a random-access manner, meaning that individual blocks of data can be stored or retrieved in any order and not only sequentially.',
        purchase: 44,
        sale: 48 },

      { name: 'Example Processor',
        photo: 'example_processor.jpg',
        description: 'A central processing unit (CPU) is the electronic circuitry within a computer that carries out the instructions of a computer program by performing the basic arithmetic, logic, controlling and input/output (I/O) operations specified by the instructions. The computer industry has used the term "central processing unit" at least since the early 1960s.',
        purchase: 120,
        sale: 134}  
    ],

    activeProduct: 
    { name: 'Example Disc',
      photo: 'example_drive.jpg',
      description: 'Hard disk drive (HDD), hard disk, hard drive, or fixed disk,[b] is an electromechanical data storage device that uses magnetic storage to store and retrieve digital information using one or more rigid rapidly rotating disks (platters) coated with magnetic material. The platters are paired with magnetic heads, usually arranged on a moving actuator arm, which read and write data to the platter surfaces.[2] Data is accessed in a random-access manner, meaning that individual blocks of data can be stored or retrieved in any order and not only sequentially.',
      purchase: 44,
      sale: 48 }
  }


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
            <ProductCard
            title={this.state.activeProduct.name}
            image={this.state.activeProduct.photo}
            description={this.state.activeProduct.description}
            price={this.state.activeProduct.sale}/>
        </div>
      </div>
    );
  }
}

export default App;
