import React, { useState } from 'react';

const Search = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      question: "What is Liliana made from?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac co ur icludin et tortor, id."
    },
    {
      question: "What is so special about Liliana?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac co ur icludin et tortor, id."
    },
    {
      question: "What is Liliana used for?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac co ur icludin et tortor, id."
    }
  ];

  const logos = [
    "Restaurant", "&Organic", "Vintage", "Organic Cafe", "Company", "Retro Logo"
  ];

  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
        <img 
          src="/api/placeholder/600/400" 
          alt="Liliana pottery" 
          style={styles.mainImage} 
        />
      </div>
      
      <div style={styles.contentSection}>
        <h2 style={styles.faqTitle}>FAQs</h2>
        <p style={styles.faqSubtitle}>
          Discover our fantastic early booking discounts & start planning your journey.
        </p>

        {faqData.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <div 
              style={styles.faqQuestion}
              onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
            >
              {faq.question}
              <span style={styles.dropdownIcon}>
                {activeQuestion === index ? '▲' : '▼'}
              </span>
            </div>
            {activeQuestion === index && (
              <div style={styles.faqAnswer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}

        <button style={styles.readMoreButton}>
          READ MORE &gt;
        </button>
      </div>

      <div style={styles.logoSection}>
        {logos.map((logo, index) => (
          <div key={index} style={styles.logoItem}>{logo}</div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  },
  imageSection: {
    width: '100%',
    marginBottom: '20px'
  },
  mainImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover'
  },
  contentSection: {
    padding: '0 20px'
  },
  faqTitle: {
    fontSize: '24px',
    marginBottom: '10px'
  },
  faqSubtitle: {
    color: '#666',
    marginBottom: '20px'
  },
  faqItem: {
    borderBottom: '1px solid #eee',
    marginBottom: '10px'
  },
  faqQuestion: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    cursor: 'pointer'
  },
  faqAnswer: {
    padding: '10px 0',
    color: '#666'
  },
  dropdownIcon: {
    fontSize: '12px'
  },
  readMoreButton: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    marginTop: '20px',
    cursor: 'pointer'
  },
  logoSection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    flexWrap: 'wrap'
  },
  logoItem: {
    color: '#999',
    fontSize: '14px'
  }
};

export default Search;