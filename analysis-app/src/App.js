import React, { Component } from 'react';
import './App.css';
import  ProductCard from './components/ProductCard/ProductCard';
import Switcher from './components/Switcher/Switcher';
import Chart from './components/Chart/Chart';

class App extends Component {

  state = {
    products: [
      { name: 'Example Disc',
        serialNum: 'HDD1234EXAMPLESERIAL',
        photo: 'example_drive.jpg',
        description: 'Hard disk drive (HDD), hard disk, hard drive, or fixed disk,[b] is an electromechanical data storage device that uses magnetic storage to store and retrieve digital information using one or more rigid rapidly rotating disks (platters) coated with magnetic material. The platters are paired with magnetic heads, usually arranged on a moving actuator arm, which read and write data to the platter surfaces.[2] Data is accessed in a random-access manner, meaning that individual blocks of data can be stored or retrieved in any order and not only sequentially.',
        qtyBought: [45,60,33,47,55,41,20,74,50,66,116,84],
        qtySold: [40,57,40,30,24,14,50,43,38,60,143,152],
        purchase: 44,
        sale: 48 },

      { name: 'Example Processor',
        serialNum: 'CPU14345EXAMPLESERIAL',
        photo: 'example_processor.jpg',
        description: 'A central processing unit (CPU) is the electronic circuitry within a computer that carries out the instructions of a computer program by performing the basic arithmetic, logic, controlling and input/output (I/O) operations specified by the instructions. The computer industry has used the term "central processing unit" at least since the early 1960s.',
        qtyBought: [120,145,177,94,87,89,115,93,134,163,212,172],
        qtySold: [93,115,160,101,79,85,111,90,90,207,193,277],
        purchase: 120,
        sale: 134},
        
        { name: 'Example Memory',
        serialNum: 'Mem460432EXAMPLESERIAL',
        photo: 'example_memory.jpg',
        description: 'RAM is a form of computer data storage that stores data and machine code currently being used. A random-access memory device allows data items to be read or written in almost the same amount of time irrespective of the physical location of data inside the memory. In contrast, with other direct-access data storage media such as hard disks, CD-RWs, DVD-RWs and the older magnetic tapes and drum memory, the time required to read and write data items varies significantly depending on their physical locations on the recording medium, due to mechanical limitations such as media rotation speeds and arm movement.',
        qtyBought: [24,16,17,10,33,16,22,9,13,27,50,35],
        qtySold: [14,18,7,16,22,19,25,13,15,21,40,62],
        purchase: 62,
        sale: 65},

        { name: 'Example Motherboard',
        serialNum: 'MB123054EXAMPLESERIAL',
        photo: 'example_motherboard.jpg',
        description: 'A Motherboard is the main printed circuit board (PCB) found in general purpose microcomputers and other expandable systems. It holds and allows communication between many of the crucial electronic components of a system, such as the central processing unit (CPU) and memory, and provides connectors for other peripherals. Unlike a backplane, a motherboard usually contains significant sub-systems such as the central processor, the chipset//s input/output and memory controllers, interface connectors, and other components integrated for general purpose use and applications.',
        qtyBought: [340,410,380,270,296,313,444,490,390,414,510,460],
        qtySold: [320,382,400,310,284,320,352,410,433,365,551,590],
        purchase: 150,
        sale: 157}
    ],

    activeProduct: 
    { name: 'Example Disc',
      serialNum: 'HDD1234EXAMPLESERIAL',
      photo: 'example_drive.jpg',
      description: 'Hard disk drive (HDD), hard disk, hard drive, or fixed disk,[b] is an electromechanical data storage device that uses magnetic storage to store and retrieve digital information using one or more rigid rapidly rotating disks (platters) coated with magnetic material. The platters are paired with magnetic heads, usually arranged on a moving actuator arm, which read and write data to the platter surfaces.[2] Data is accessed in a random-access manner, meaning that individual blocks of data can be stored or retrieved in any order and not only sequentially.',
      qtyBought: [45,60,33,47,55,41,32,74,50,66,104,84],
      qtySold: [40,57,40,30,24,14,50,43,38,60,143,152],
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
        <Chart
          data={this.state.activeProduct.qtyBought}
          chartTitle={'Annual purchase chart'}/>
        <Chart
          data={this.state.activeProduct.qtySold}
          chartTitle={'Annual sales chart'}/>
      </div>
    );
  }
}

export default App;
