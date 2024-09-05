import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { useState } from 'react';
import data from './components/Hackthon/dataArr'
import AddChallengeDetails from './components/Challenges/AddChallengeDetails';
import ResponsiveAppBar from './components/Home/AppBar';
import Details from './components/Hackthon/Details';
import EditChallengeDetails from './components/Challenges/EditChallengeDetails';

function App() {

  const [hackathonArr, setHackathonArr] = useState(data)

  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<Home hackathonArr={hackathonArr} setHackathonArr={setHackathonArr} />} />
        <Route exact path="/add" element={<AddChallengeDetails hackathonArr={hackathonArr} setHackathonArr={setHackathonArr} />} />
        <Route exact path="/details/:id" element={<Details hackathonArr={hackathonArr} setHackathonArr={setHackathonArr} />} />
        <Route exact path="/edit/:id" element={<EditChallengeDetails hackathonArr={hackathonArr} setHackathonArr={setHackathonArr} />} />
      </Routes>
    </>
  );
}

export default App;
