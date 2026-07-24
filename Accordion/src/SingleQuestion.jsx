import React ,{useState}from 'react'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai';
import './App.css'
const SingleQuestion = ({question,answer}) => {
  const [showInfo,setShowInfo] = useState(false);
  return (
    <article>
      <header className='answer-container'>
        <h5>{question}</h5>
        <button className='question-btn' onClick = {()=> setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
      </header>
      {showInfo && <p>{answer}</p>}
    </article>
  )
}

export default SingleQuestion
