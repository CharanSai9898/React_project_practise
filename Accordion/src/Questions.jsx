import React from 'react'
import './App.css';
import SingleQuestion from './SingleQuestion'

const Questions = ({questions}) => {
  return (
    <section className="container">
      <div className='container-sub'>
        <h1>Questions</h1>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
    </section>
  );
}

export default Questions
