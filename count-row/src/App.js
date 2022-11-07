import React, {useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import ListItems from "./ListItems";
import Loading from "./Loading";

const App = () =>{

  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setUserList(response.data)
      setLoading(true);
    }).catch((err)=>{
      console.log(err);
    });
    },[]);
    
  
  let counter = 0;
    for (const obj of userList) {
      if (obj.userId === 4) counter++;
    }
  
  const count = (counter);
    
  return (
   <div>

    <p>{count} items has the ID of 4</p>
        {
        loading ? userList.map((userList, index) => {
          return <ListItems key={index} userList={userList} /> 
          }) : <Loading />
          }
      </div>

  );
}

export default App;
