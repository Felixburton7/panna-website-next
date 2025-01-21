// src/components/FAQ.js
import React, { useState } from "react";

function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq">
      <button className="faq-question" onClick={toggleFAQ}>
        {question}
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

export default FAQ;
