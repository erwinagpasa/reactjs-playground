import React, {useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import ListItems from "./ListItems";
import Loading from "./Loading";

function App() {

  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setStudentList(response.data)
      setLoading(true);

    }).catch((err)=>{
      console.log(err);
    });
    },[]);

    console.log(studentList);
    console.log(loading);

  return (
    <div className="App">
      <div>
        {
        loading ? studentList.map((studentList, index) => {
          return <ListItems key={index} studentList={studentList} /> 
          }) : <Loading />
          }
      </div>
     
    </div>
  );
}

export default App;
