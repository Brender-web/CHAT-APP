import React from 'react'
import '../styles/main.css'
import Male from '../assets/male.png'

function Card(props) {
  return (
    <div className='container'>

        <div className='profile-img'>
            <img src={props.prof_img} id='profile-pic'/>
        </div>

        <div className="content">
            <div className="top-content">
                <h4 id='chat-name'>{props.chat_name}</h4>
                <h6 id='last-seen'>{props.chat_time}</h6>

            </div>
            <div className="bottom-content">
                <p id='chat-content'>{props.chat_content}</p>
                <h6 id='chat-number'>{props.chat_number}</h6>

            </div>
        </div>
      
    </div>
  )
}

export default Card
