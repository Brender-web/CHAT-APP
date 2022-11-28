import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar />
    <Card
    prof_img = 'src\assets\woman.png'
    chat_name = "Philadelphia"
    chat_time = "2:00"
    chat_content= 'Hey,how are you all doing'
    chat_number= '10'
    />

<Card
    prof_img = 'src\assets\women3.png'
    chat_name = "Viola"
    chat_time = "3:30"
    chat_content= 'How did you find it'
    chat_number= '7'
    />
    <Card
    prof_img = 'src\assets\woman2.png'
    chat_name = "Brender"
    chat_time = "3:50"
    chat_content= 'I found it on internet'
    chat_number= '16'
    />
   
    </div>
)
}

export default App
