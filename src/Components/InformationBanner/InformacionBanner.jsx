import './InformationBanner.css'; 

const InformationBanner = ({ title, description, benefits }) => {
  return (
    <section className="info-banner">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div className="benefit" key={index}>
            <img src={benefit.icon} alt={benefit.title} />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
      <button className="read-more-btn">Read More</button>
    </section>
  );
};

export default InformationBanner;