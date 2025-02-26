import React, { useState } from "react";

import GenericButton from "../../Components/Button";
import qa01 from "../../Components/Images/qa01.jpg";

import "./Questions.css";

const Questions = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      question: "What courses/trainings have I done?",
      answer:
        "I have completed several courses to enhance my skills, including The Complete Python Bootcamp by Udemy (2024), Advanced React by Meta (2023), React Js 35-hour course (2023), Web Development | HTML-CSS-SASS 38-hour course (2023), and UX Design: From Concept to Prototype (2021).",
    },
    {
      question: "Do I have certifications?",
      answer:
        "Yes, I have obtained the AWS Certified Cloud Practitioner certification (2024), demonstrating my knowledge of cloud computing fundamentals.",
    },
    {
      question: "What is my level of English?",
      answer:
        "My English proficiency is at a C1 level. I achieved the TOEFL iBT - CEFR Level C1 certification in 2020 and previously obtained the IGCSE English Certification in 2017.",
    },
    {
      question: "Check out my walkthrough of Redux code",
      answer: (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_ggpUsMmzIE?si=Xd6neSEiJ3s27XQs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ),
    },
    {
      question:
        "Check out my walkthrough of a MERN (MongoDB, Express, React.js, Node.js) project",
      answer: (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NpYvNChbdcw?si=ay7zXsyjNsJ3finI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ),
    },
  ];

  const logos = ["React Js", "HTML", "JavaScript", "CSS", "Git", "SQL"];

  return (
    <>
      <div className="qa-container">
        <div className="content-wrapper">
          <div className="image-section">
            <img src={qa01} alt="pciture" className="main-image" />
          </div>

          <div className="content-section">
            <h2 className="faq-title">Q&A</h2>
            <p className="faq-subtitle">
              Combining creativity and logic to build user-friendly
              applications.
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

            <GenericButton
              text="LinkedIn"
              to="https://www.linkedin.com/in/camila-riboldi/"
            />
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
      <div className="parallax-image"></div>
    </>
  );
};

export default Questions;
