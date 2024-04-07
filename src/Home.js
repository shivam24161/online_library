import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";
export default class Home extends Component {
    
  render() {
    if(!this.props.flag)
    return <>
      <center><h2>Please Wait ! Data is loading ...</h2></center>
      <center><div className="loader"></div></center>
    </>
    return (
      <>
    <Navbar/>
    <div className='searchbox'>
      <input type="text" placeholder="Search box" className='input' id="text" onKeyUp={this.change}/><button id="btn" onClick={this.props.input}><i class="fa fa-search" aria-hidden="true"></i></button>
    </div>

    <div className="container">
    {/* Displaying the output */}
    {this.props.data.numFound === 0 ? <><h1 className='no-result'>No Result Found</h1><img src="https://cdn.dribbble.com/users/1785628/screenshots/5605512/media/097297f8e21d501ba45d7ce437ed77bd.gif" alt="gif" id="gif"/></>: 
      this.props.data.docs.map((i)=>{
        var z =i;
        var img=i.cover_edition_key;
        var author=i.author_name;
        var first_publish_year=i.first_publish_year;
        var edition_count=i.edition_count;
        var ebook_count_i=i.ebook_count_i;
        let key=i.key;
        let title=i.title;

      return <>
      <div id="list-th">
        <div className="book-read" id={key}>
          <div className="cover">
          {img === undefined ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPNssyZn91QkkhFqY5RDMQrFcQkWoFRTkKc-NZiZVsC-c7EnU8XYykeZCd5X5lPlkPN4I&usqp=CAU" alt="no_image"/> : 
         <img src={`https://covers.openlibrary.org/b/olid/${img}-M.jpg`} alt="Avatar"/>}
          </div>
          <div className="description">
            <p className="title"><span className='spantitle'>{title}</span><br />
            <span><i>by:</i> </span>
            {/* Checking if author is empty or not*/}
            {author === undefined ? " " : author.map((i)=>{
              return  <span className="author">{i} ,</span>
            }) }
            </p>
            <p className='published'>First published in: {first_publish_year}</p>
            <p>{edition_count} edition <span>-- {ebook_count_i} previewable</span></p>
            <Link to="/detail" id="viewfull" onClick={()=>this.props.read(z)}>Want to read</Link>
          </div>
        </div>
      </div>
        </>
      })}
      </div>

      </>
    )
  }
}