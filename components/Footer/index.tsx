//importing utils
import Link from 'next/link';
import Image from 'next/image';
import { cloudinaryNotFoundURLs } from '../../utils';
//importing types
import { CloudinaryURLs } from '../../interfaces';
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '../Icons';

//props interface
interface FooterProps {
  images: CloudinaryURLs;
}

//footer
const Footer: React.FC<FooterProps> = ({ images }) => (
  <footer>
    <div className="container">
      <div className="footer__top">
        <div className="footer__logo">
          <Link href="/" passHref>
            <div className="logo__container">
              <Image
                src={
                  images ? images.logoFooter : cloudinaryNotFoundURLs.logoFooter
                }
                alt="footer-logo"
                width="220"
                height="70"
              />
            </div>
          </Link>
          <p>
            The best platform to stay up-to-date with {`what's`} going on in the
            world.
          </p>
        </div>
        <div className="footer__lists">
          <div className="left__list">
            <ul>
              <li className="list__head">Help</li>
              <li>Support</li>
              <li>KnowledgeBase</li>
              <li>Tutorials</li>
            </ul>
            <ul>
              <li className="list__head">Features</li>
              <li>Screen Sharing</li>
              <li>iOS & Android Apps</li>
              <li>File Sharing</li>
              <li>User Management</li>
              <li>Fundraising</li>
            </ul>
          </div>
          <div className="right__list">
            <ul>
              <li className="list__head">Company</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Our Customers</li>
            </ul>
            <ul>
              <li className="list__head">Contact Us</li>
              <li>info@newsly.com</li>
              <li>1-888-569-423</li>
              <li>3500 Barkal Street</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="social__media">
          <div className="icon__container facebook__icon">
            <FacebookIcon />
          </div>
          <div className="icon__container linkedin__icon">
            <LinkedInIcon />
          </div>
          <div className="icon__container twitter__icon">
            <TwitterIcon />
          </div>
        </div>
        <div className="copyright">&copy; Copyright 2021, newsly Inc.</div>
        <div className="privacy__policy">Terms of Use & Privacy Policy</div>
      </div>
    </div>
  </footer>
);

export default Footer;
