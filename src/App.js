import logo from './logo.svg';
import './App.css';
import './index.css'
import Slot from './Slot';
import { useState } from 'react';

const App = () => {

  const [num, incNum] = useState(10);
  const count = () => {
    if (num > 0) {
      incNum(num - 1);
    }
  }
  var nowTime = new Date().toLocaleTimeString();
  const [currentTime, updateTime] = useState(nowTime);
  const time = () => {
    updateTime(new Date().toLocaleTimeString())
  }
  return (
    <>
      <h1 className='heading_style'> 🎰 Welcome To Slot Machine Game 🎰</h1>
      <div className='slotMachine'>
        <Slot x="❤️" y="❤️" z="❤️" />
        <Slot x="🤑" y="😎" z="😋" />
        <Slot x="❤️" y="❤️" z="😊" />
        <Slot x="👻" y="👻" z="👻" />
        <Slot x="😴" y="🐟" z="🍔" />
      </div>
      <h1 className='number'>{num}</h1>
      <button onClick={count}>Click Me</button>
      <h1 className='number'>{currentTime}</h1>
      <button onClick={time}>Show Time</button>
    </>
  )
}

export default App;
