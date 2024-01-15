import logo from './logo.svg';
import './App.css';
import './index.css'
import Slot from './Slot';

const App =()=>{
  return(
    <>
    <h1 className='heading_style'> 🎰 Welcome To Slot Machine Game 🎰</h1>
    <div className='slotMachine'>
      <Slot x="❤️" y="❤️" z="❤️" />
      <Slot x="🤑" y="😎" z="😋" />
      <Slot x="❤️" y="❤️" z="😊" />
      <Slot x="👻" y="👻" z="👻" />
      <Slot x="😴" y="🐟" z="🍔" />
      </div>
    </>
  )
}

export default App;
