import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  let[sportsNews,setSportsNews]=useState([]);
  let dated = new Date();
  let date = dated.getDate();
  let month = dated.getMonth();
  let year = dated.getFullYear()
  let formula = year +"-"+ month+"-"+date;
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=politician&from=${formula}&sortBy=publishedAt&apiKey=665574fb544d4aaab8f9c96309f3adb3`)
    .then(res => res.json())
    .then(res => {
      setSportsNews(res.articles)
      console.log(res.articles)
    })
  },[])
  let getInputText=(e)=>{
    showSearchNews(e.target.value)
  }
  let showSearchNews=(news)=>{
    fetch(`https://newsapi.org/v2/everything?q=${news}&from=2023-12-28&sortBy=publishedAt&apiKey=665574fb544d4aaab8f9c96309f3adb3`)
    .then(res => res.json())
    .then(res => {
      setSportsNews(res.articles)
      console.log(res.articles)
    })
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg suff ">
  <div className="container-fluid">
    <Link className="navbar-brand home" to={'/'}>News</Link>
    <button className="navbar-toggler bttns" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa-solid fa-bars navbar-toggler-icon"></i>    
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
            <Link className='nav-link  abc' to={'/'}>HOME</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link abc' to={'/about'}>SPORTS</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link abc' to={'/login'}>POLITICIAN</Link>
        </li>
      </ul>
      <div className="d-flex searchBar" role="search">
      <input className="form-control me-2" onChange={getInputText}  type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-light" onClick={showSearchNews} >Search</button>
      </div>
    </div>
  </div>
</nav>
<div className="cards">
  {
    sportsNews.map((data,i)=>{
      if(data.urlToImage){
        if(data.title){
          if(data.description){
            if(data.url){
              return(
      <div className="card" key={i}>
         <img src={`${data.urlToImage}`} className="card-img-top" alt="..." />
         <div className="card-body">
           <h5 className="card-title">{`${data.title}`}</h5>
           <p className="card-text">{`${data.description}`}</p>
           <Link to={`${data.url}`} className='btn btn'>Learn More</Link>
         </div>
       </div>
              )
            }
          }
        }
      }
    })
  }
</div>
    </div>
  )
}
