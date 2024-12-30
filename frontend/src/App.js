import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  const [username, setUserName] = useState('');
  useEffect(()=>{
    getNames();
  },[])

  const getNames = async () => {
    const response = await axios.get('/names');
    console.log(response);
    setUserName(response.data)
  }

  return (
   <div>
    Hello {username}
   </div>
  );
}

export default App;
