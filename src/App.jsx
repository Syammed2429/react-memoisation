import './App.css';
import { useState, useMemo } from 'react';
import { MemoPost } from './components/Post/Post';
import Navbar from './components/Navbar/Navbar';

// const UseTimer = () => {

// }


function App() {

  const [timer, setTimer] = useState(0)

  useMemo(() => {
    setInterval(() => {
      return setTimer(prev => prev + 1)
    }, 1000);
  }, []);


  return (
    <div className="App">
      <h1
        className="text-warning"
        style={{
          position: 'absolute',
          right: '30px',
          top: '50px',

        }}>Count : {timer}</h1>
      <MemoPost />
      <Navbar />
    </div >
  );
}

export default App;
