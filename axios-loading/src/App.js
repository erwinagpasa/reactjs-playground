import React, {useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import ListItems from "./ListItems";
import Loading from "./Loading";

function App() {

  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUserList(response.data)
      setLoading(true);

    }).catch((err)=>{
      console.log(err);
    });
    },[]);

    console.log(userList);
    console.log(loading);

  return (
    <div className="App">
      <div>
        {
        loading ? userList.map((userList, index) => {
          return <ListItems key={index} userList={userList} /> 
          }) : <Loading />
          }
      </div>
     
    </div>
  );
}

export default App;
