import "./ClientSection.css";
const ClientsSection = () => {
  const communityCards = [
    {
      id: 1,
      icon: "/images/Icon.png",
      title: "Membership Organizations",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 2,
      icon: "/images/Icon (1).png",
      title: "National Associations",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 3,
      icon: "/images/Icon (2).png",
      title: "Clubs And Groups",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <section className="clients-section">
      {/* Our Clients */}
      <div className="clients">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="client-logos">
          <img src="/images/Logo.png" alt="Client Logo" />
          <img src="/images/Logo (1).png" alt="Client Logo" />
          <img src="/images/Logo (2).png" alt="Client Logo" />
          <img src="/images/Logo (3).png" alt="Client Logo" />
          <img src="/images/Logo (4).png" alt="Client Logo" />
          <img src="/images/Logo (5).png" alt="Client Logo" />
          <img src="/images/Logo (6).png" alt="Client Logo" />
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
