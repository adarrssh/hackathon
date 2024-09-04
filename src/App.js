import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { useState } from 'react';
import data from './components/Hackthon/dataArr'
import ChallengeDetails from './components/Challenges/ChallengeDetails';
import ResponsiveAppBar from './components/Home/AppBar';
import Details from './components/Hackthon/Details';

function App() {

  const [hackathonArr, setHackathonArr] = useState(data)

  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<Home hackathonArr={hackathonArr} setHackathonArr={setHackathonArr} />} />
        <Route exact path="/edit" element={<ChallengeDetails />} />
        <Route exact path="/details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
