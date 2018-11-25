import React, { Component } from 'react';
import './App.css';
import  ProductCard from './components/ProductCard/ProductCard';
import Switcher from './components/Switcher/Switcher';

class App extends Component {

  state = {
    products: [
      { name: 'Example Disc',
        serialNum: 'HDD1234EXAMPLESERIAL',
        photo: 'example_drive.jpg',
        description: 'Hard disk drive (HDD), hard disk, hard drive, or fixed disk,[b] is an electromechanical data storage device that uses magnetic storage to store and retrieve digital information using one or more rigid rapidly rotating disks (platters) coated with magnetic material. The platters are paired with magnetic heads, usually arranged on a moving actuator arm, which read and write data to the platter surfaces.[2] Data is accessed in a random-access manner, meaning that individual blocks of data can be stored or retrieved in any order and not only sequentially.',
        purchase: 44,
        sale: 48 },

      { name: 'Example Processor',
        serialNum: 'CPU14345EXAMPLESERIAL',
        photo: 'example_processor.jpg',
        description: 'A central processing unit (CPU) is the electronic circuitry within a computer that carries out the instructions of a computer program by performing the basic arithmetic, logic, controlling and input/output (I/O) operations specified by the instructions. The computer industry has used the term "central processing unit" at least since the early 1960s.',
        purchase: 120,
        sale: 134},
        
        { name: 'Example Memory',
        serialNum: 'Mem460432EXAMPLESERIAL',
        photo: 'example_memory.jpg',
        description: 'RAM is a form of computer data storage that stores data and machine code currently being used. A random-access memory device allows data items to be read or written in almost the same amount of time irrespective of the physical location of data inside the memory. In contrast, with other direct-access data storage media such as hard disks, CD-RWs, DVD-RWs and the older magnetic tapes and drum memory, the time required to read and write data items varies significantly depending on their physical locations on the recording medium, due to mechanical limitations such as media rotation speeds and arm movement.',
        purchase: 62,
        sale: 65},

        { name: 'Example Motherboard',
        serialNum: 'MB123054EXAMPLESERIAL',
        photo: 'example_motherboard.jpg',
        description: 'A Motherboard is the main printed circuit board (PCB) found in general purpose microcomputers and other expandable systems. It holds and allows communication between many of the crucial electronic components of a system, such as the central processing unit (CPU) and memory, and provides connectors for other peripherals. Unlike a backplane, a motherboard usually contains significant sub-systems such as the central processor, the chipset//s input/output and memory controllers, interface connectors, and other components integrated for general purpose use and applications.',
        purchase: 150,
        sale: 157}
    ],

    activeProduct: 
    { name: 'Example Disc',
      serialNum: 'HDD1234EXAMPLESERIAL',
      photo: 'example_drive.jpg',
      description: 'Hard disk drive (HDD), hard disk, hard drive, or fixed disk,[b] is an electromechanical data storage device that uses magnetic storage to store and retrieve digital information using one or more rigid rapidly rotating disks (platters) coated with magnetic material. The platters are paired with magnetic heads, usually arranged on a moving actuator arm, which read and write data to the platter surfaces.[2] Data is accessed in a random-access manner, meaning that individual blocks of data can be stored or retrieved in any order and not only sequentially.',
      purchase: 44,
      sale: 48 }
  }

  changeProductHandler = (event) => {

    let newProduct = this.state.products.filter((product)=>{
      return product.name === event.target.value;
    });
    this.setState({activeProduct: newProduct[0]});
  }


  render() {
    return (
      <div className="App">
        <h1>Product Analysis App</h1>
        <div className="topOfLayout">
            <Switcher
            list={this.state.products}
            selectValue={this.state.activeProduct.name}
            changed={this.changeProductHandler}
            />

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
