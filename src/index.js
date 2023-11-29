import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Navi from './component/layout/MainNavigation'
import PostList from './component/posts/PostList'
import PostDetail from './component/posts/PostDetail'
import About from './component/posts/About'
import thumImage from './images/jung.png'
import thumImage2 from './images/jung2.png'

const DUMMY_POSTS = [
  {
    id: 'm1',
    image : thumImage,
    title: 'A First Posting1',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'java'
  },
  {
    id: 'm2',
    image : thumImage2,
    title: 'A First Posting2',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'mysql'
  }, 
  {
    id: 'm3',
    image :  thumImage,
    title: 'A First Posting3',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'java'
  },
  {
    id: 'm4',
    image :  thumImage2,
    title: 'A First Posting4',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'mysql'
  }, 
  {
    id: 'm5',
    image :  thumImage,
    title: 'A First Posting5',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'java'
  },
  {
    id: 'm6',
    image :  thumImage,
    title: 'A First Posting6',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'mysql'
  }, 
  {
    id: 'm7',
    image :  thumImage2,
    title: 'A First Posting7',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'java'
  },
  {
    id: 'm8',
    image :  thumImage,
    title: 'A First Posting8',
    description: 'Some address 5, 12345 Some City',
    date: '11:09 PM - 1 Jan 2016',
    keyword : 'mysql'
  }, 
];

const Router = () =>{
 
  return(
    <BrowserRouter basename="/posts">
      <Navi />
      <Routes>
          {/* <Route path="/" element={<About />} /> */}
          <Route index element ={<PostList posts={DUMMY_POSTS} />} />
          <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
