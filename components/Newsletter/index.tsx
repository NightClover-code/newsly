//importing utils & types
import Image from 'next/image';
import { CloudinaryURLs } from '../../interfaces';
//props interface
interface NewsletterProps {
  images: CloudinaryURLs;
}
//newsletter
const Newsletter: React.FC<NewsletterProps> = ({
  images: { iconQuotes, avatar, iconDot },
}) => (
  <section className="newsletter__section">
    <h1>Make online news accessible for everyone with our support</h1>
    <div className="testimonial">
      <div className="illustration__container">
        <div className="quotes">
          <Image width="46" height="46" src={iconQuotes} alt="quotes" />
        </div>
        <p>
          It honestly felt like using newsly expanded our team by another
          member.
        </p>
      </div>
      <div className="testimonial__author">
        <div className="avatar__container">
          <Image
            src={avatar}
            alt="testimonial-avatar"
            width="100"
            height="100"
            objectFit="cover"
          />
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
              <Image src={iconDot} alt="dot-icon" width="5" height="5" />
            </div>
            <li>Free to get Started</li>
            <div className="dot__container">
              <Image src={iconDot} alt="dot-icon" width="5" height="5" />
            </div>
            <li>Cancel Anytime</li>
          </ul>
        </div>
      </form>
    </div>
  </section>
);

export default Newsletter;
