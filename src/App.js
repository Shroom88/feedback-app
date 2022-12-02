import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <div className="container">
      <Header bgColor="rgba(0,0,0,0.4)" textColor="#ffffff" />
      <FeedbackList feedback={feedback} />
    </div>
  );
}

export default App;
