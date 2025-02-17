import AnimatedGif from '../AnimatedGif';
import GenericButton from '../Button';
import './InformationBanner.css'; 

const InformationBanner = ({ title, description, benefits }) => {
  return (
    <section className="info-banner">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div className="benefit" key={index}>
            <AnimatedGif />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
      <GenericButton text="Check Projects" to="/projects" />
    </section>
  );
};

export default InformationBanner;