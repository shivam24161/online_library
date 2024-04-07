import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";
export default class Detail extends Component {
  render() {
    var img=this.props.book.cover_edition_key;
    var author=this.props.book.author_name;
    var title=this.props.book.title;
    var first_publish_year=this.props.book.first_publish_year;
    var pages=this.props.book.number_of_pages_median;
    var edition_count=this.props.book.edition_count;
    var first_sentence=this.props.book.first_sentence;
    var publisher=this.props.book.publisher;
    var language=this.props.book.language;
    console.log(this.props.book)
    return (
        <>
            <Navbar/>
            <div className="card">
            
           <img src={`https://covers.openlibrary.org/b/olid/${img}-M.jpg`} alt="Avatar" className='detailImg'/>
            <h1>{title}</h1>
            <span><i>by:</i> </span>
            {author.length > 1 ? <span className="author">No author found</span>:<span className="author">{author}</span>}
            <p>No. of Edition:  <i>{edition_count}</i></p>
            {language === undefined ? <h5>Language : English </h5> : <h5>Language: {language}</h5>}
            
            <table align="center" className='table'>
                <tbody>
                    <tr>
                        <th>Publish Date</th>
                        <th>Publisher</th>
                        <th>Pages</th>
                    </tr>
                    <tr>
                        <td>{first_publish_year}</td>
                        <td>{publisher.length > 1 ? "Publisher" : publisher}</td>
                        <td>{pages === undefined ? "Not found": pages }</td>
                    </tr>
                </tbody>
            </table>
            
            {first_sentence === undefined ?<p><i>First sentence:  </i>First sentence not found</p> : <p>First Sentence: <b><i>{first_sentence}</i></b></p>}
            <a href={`https://openlibrary.org/works/${img}`} className="bookDetails">See full Details on Google</a>
            <button><Link to="/" target="_blank">Go back</Link></button>
            </div>
        </>
    )
  }
}
