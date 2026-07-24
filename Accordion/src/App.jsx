import React, { useState } from "react";
import { data } from "./data";
import './App.css'

import Questions from "./Questions";

const App = () => {
  const [questions,setQuestions] = useState(data);

  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};

export default App;
