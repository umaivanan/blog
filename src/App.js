
import BlogNav from '../src/components/BlogNav'
import React from 'react';


import '/home/ukijaffna/Documents/blog/src/App.css'
import Posts from '/home/ukijaffna/Documents/blog/src/components/posts.js'
import Posts1 from '/home/ukijaffna/Documents/blog/src/components/post1.js'
import Posts2 from '/home/ukijaffna/Documents/blog/src/components/post2.js'
import Posts3 from '/home/ukijaffna/Documents/blog/src/components/post3.js'
function App() {
  return (<div>
    <BlogNav/>
    <Posts/>
    <Posts1/>
    <Posts2/>
    <Posts3/>
  </div>
   
  )
};

export default App;
