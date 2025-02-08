import React, { useState } from "react";
import GenericButton from "../../Components/Button";
import pottery03 from "../../Components/Images/pottery03.jpg";
import "./Search.css"; // Import CSS file

const Search = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      question: "What is Liliana made from?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac co ur icludin et tortor, id.",
    },
    {
      question: "What is so special about Liliana?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac co ur icludin et tortor, id.",
    },
    {
      question: "What is Liliana used for?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac co ur icludin et tortor, id.",
    },
  ];

  const logos = [
    "Restaurant",
    "&Organic",
    "Vintage",
    "Organic Cafe",
    "Company",
    "Retro Logo",
  ];

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="image-section">
          <img src={pottery03} alt="Liliana pottery" className="main-image" />
        </div>
  
        <div className="content-section">
          <h2 className="faq-title">FAQs</h2>
          <p className="faq-subtitle">
            Discover our fantastic early booking discounts & start planning your
            journey.
          </p>
  
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() =>
                  setActiveQuestion(activeQuestion === index ? null : index)
                }
              >
                {faq.question}
                <span className="dropdown-icon">
                  {activeQuestion === index ? "▲" : "▼"}
                </span>
              </div>
              {activeQuestion === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
  
          <GenericButton />
        </div>
      </div>
  
      <div className="logo-section">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Search;
