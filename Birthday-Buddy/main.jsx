import { createRoot } from "react-dom/client";
import BirthdayBuddy from "./simple projects/BirthdayBuddy";
import "./simple projects/BirthdayBuddy.css";
function App() {
  return (
    <div>
      <BirthdayBuddy></BirthdayBuddy>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
