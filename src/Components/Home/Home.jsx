import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
export default function Home() {
  let[news,setNews]=useState([]);
  let [getInputText,setGetInputText]=useState('')
  let dated = new Date();
  let date = dated.getDate();
  let month = dated.getMonth();
  let year = dated.getFullYear()
  let formula = year +"-"+ month+"-"+date;
  console.log(month)
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=${formula}&sortBy=publishedAt&apiKey=665574fb544d4aaab8f9c96309f3adb3`)
    .then(res => res.json())
    .then(res => {
      setNews(res.articles)
    })
  },[])
  // 2023-12-28
  let getInput=(e)=>{
    setGetInputText(e.target.value)
  }
  let searchNews=()=>{
    showSearchNews(getInputText)
  }
  let showSearchNews=(name)=>{
    fetch(`https://newsapi.org/v2/everything?q=${name}&from=2023-12-28&sortBy=publishedAt&apiKey=665574fb544d4aaab8f9c96309f3adb3`)
    .then(res => res.json())
    .then(res => {
      setNews(res.articles)
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
      <input className="form-control me-2" onChange={getInput} type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-light" onClick={searchNews} >Search</button>
      </div>
    </div>
  </div>
</nav>
      <div className="cards">
        {
          news.map((data,i)=>{
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
