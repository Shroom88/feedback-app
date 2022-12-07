import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are u sure bout dat?")) {
      const newFeedback = feedback.filter((e) => e.id !== id);
      setFeedback(newFeedback);
    }
  };
  return (
    <div className="container">
      <Header bgColor="rgba(0,0,0,0.4)" textColor="#ffffff" />
      <FeedbackForm />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;
