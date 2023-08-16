import React, { useEffect, useState } from 'react';
import axios from 'axios'

const FetchData = () => {
    const [posts, setPosts] = useState({});
    const [id, setId] = useState(1);
    const [btnClick, setBtnClick] = useState(1);

    const dataHandeler = () => {
        setBtnClick(id);
    };

    useEffect(()=> {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            setPosts(res.data);
        })
        .catch(err => console.log(err))
    } , [btnClick]);
  return (
    <div>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)}/>
        <button onClick={dataHandeler}>FetchData</button>
        <h1>{posts.title}</h1>
      {/* {
        posts.map((x) =>
        <div key={x.id}>
         <h2>{x.title}</h2> 
         <p>{x.body}</p>
        </div>)
      } */}
    </div>
  )
}

export default FetchData;
