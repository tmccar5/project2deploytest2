import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AllPosts from './Components/AllPosts';

function App() {
  const [title, setTitle]= useState('')
  const [body, setBody] = useState('')
  const [blogPosts, setBlogPosts] = useState([])

  const grabPosts = async () => {
    const posts = await fetch('/blog')
    const cleanPosts = await posts.json()
    setBlogPosts(cleanPosts)
  }

  const save = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        body: body
      })
    };
    const data = await fetch('/blog', requestOptions)
    const cleanData = await data.json()
    console.log('We saved!', cleanData)
    grabPosts()
  }

  useEffect(()=> {
    grabPosts()
  },[])

  console.log('blogPosts', blogPosts)
  return (
    <div className="App">
     <h1> Add a post !!!!</h1>

      <div className="formContainer">
          <p style={{textAlign: 'left'}}>Title</p>
          <input onChange={(e)=>{setTitle(e.target.value)}}style={{display: 'block'}}></input>
          <p style={{textAlign: 'left'}}>Body</p>
          <textarea onChange={(e)=>{setBody(e.target.value)}} style={{display: 'block'}}></textarea>
          <button className={'saveButton'} onClick={save}>Save</button>
      </div>

      <AllPosts posts={blogPosts}/>
    </div>
  );
}

export default App;
