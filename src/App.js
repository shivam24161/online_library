import React, { Component } from 'react'
import './App.css';
import Home from './Home';
import Detail from './Detail';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Navbar';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       flag:false,
       data:[],
       img:'',
       text:'',
    }
  }
  // Rendering the details first time
  componentDidMount(){
      fetch(`https://openlibrary.org/search.json?q=ramayan&mode=ebooks&has_fulltext=true`)
      .then((res)=>res.json())
      .then((json)=>{
        this.setState({
          data:json,
          flag:true,
        })
      })
  }
  
  // Rendering the search result
  inputBoxValue=(event)=>{
    let text=document.querySelector("#text").value;
    this.setState({
      flag:false
    })
    fetch(`https://openlibrary.org/search.json?q=${text}&mode=ebooks&has_fulltext=true`)
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({
        data:json,
        flag:true
      })
    })
  }
  
  // Getting detail of book
  readMore=(event)=>{
    this.setState({
      bookData:event
    })
  }

  render() {
    return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home data={this.state.data} flag={this.state.flag} input={this.inputBoxValue} read={this.readMore}/>}/>
          <Route path="/detail" element={<Detail book={this.state.bookData}/>}/>    
          <Route path="/navbar" element={<Navbar/>}/>   
      </Routes>
      </BrowserRouter>

      </>
    )
  }
}
