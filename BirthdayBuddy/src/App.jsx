import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PersonProfile from "./Pages/PersonProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/person/:id" element={<PersonProfile />} />
    </Routes>
  );
}

export default App;
