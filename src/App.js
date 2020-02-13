//import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React,{Component} from 'react'
import { ProductsList } from './Components/productsList';
import './mystyle.css'

class App extends Component
{
  constructor()
  {
    super();
    this.state={products:[{id:123,name:'Tulsi',price:600},
    {id:124,name:"Doopam",price:200},
    {id:125,name:"Basma",price:100},
    {id:126,name:"Haladi",price:300},
    {id:1000,name:"karpuram",price:"5000"},
    {id:1002,name:"Cow Dung",price:500}],searchValue:''};
  }
  render()
  {
    const {products,searchValue}=this.state;
    const filteredProducts = products.filter(product=>product.name.toLowerCase().includes(searchValue.toLowerCase()));
    return(
      <div className="App">
      <h1 className="shri-gopala-logo"><q>Shri-Gopala</q></h1>
      <div>
        <input 
        type="search" 
        placeHolder="Search Products" 
        className="search-bar" 
        onChange={e=>{this.setState({searchValue:e.target.value})}}/>
      </div>
        <ProductsList  products={filteredProducts}>
       
        </ProductsList>
      </div>
    )
  }
}
export default App;