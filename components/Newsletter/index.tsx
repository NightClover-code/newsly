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
        <form>
          <div className="email__container">
            <input
              type="email"
              className="email__input"
              placeholder="Enter your email..."
            />
            <div className="button primary__button">Get Started</div>
          </div>
          <div className="newsletter__details">
            <ul>
              <li>Easy to use</li>
              <div className="dot__container">
                <img src="./images/icon-dot.png" alt="dot-icon" />
              </div>
              <li>Free to get Started</li>
              <div className="dot__container">
                <img src="./images/icon-dot.png" alt="dot-icon" />
              </div>
              <li>Cancel Anytime</li>
            </ul>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
