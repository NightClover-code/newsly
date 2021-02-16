const Newsletter: React.FC = () => {
  return (
    <section className="newsletter__section">
      <h1>Make online news accessible for everyone with our support</h1>
      <div className="testimonial">
        <div className="illustration__container">
          <img src="./images/icon-quotes.svg" alt="quotes" />
          <p>
            It honestly felt like using newsly expanded our team by another
            member.
          </p>
        </div>
        <div className="testimonial__author">
          <div className="avatar__container">
            <img src="./images/avatar.jpg" alt="testimonial-avatar" />
          </div>
          <div className="author__info">
            <div className="username">Amir Reda</div>
            <div className="title">Executive Director at Rustol Company</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
