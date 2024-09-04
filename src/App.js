import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { useState } from 'react';
import data from './components/Hackthon/dataArr'

function App() {

  const [hackathonArr,setHackathonArr] = useState(data)

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home hackathonArr={hackathonArr} setHackathonArr={setHackathonArr} />} />
      </Routes>
    </div>
  );
}

export default App;
