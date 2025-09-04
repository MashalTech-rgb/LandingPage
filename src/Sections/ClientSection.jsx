import "../Styles/ClientSection.css";
import { communityCards, clientLogos } from "../Common/Content";

const ClientsSection = () => {
  return (
    <section className="clients-section">
      {/* Our Clients */}
      <div className="clients">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="client-logos">
          {clientLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Client Logo ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Community System */}
      <div className="community-section">
        <h2>
          Manage your entire community <br /> in a single system
        </h2>
        <p>Who is Nextcent suitable for?</p>

        <div className="cards">
          {communityCards.map((card) => (
            <div key={card.id} className="card">
              <div className="icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
