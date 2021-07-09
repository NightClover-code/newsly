//importing utils & components
import Link from 'next/link';
import Image from 'next/image';
import { cloudinaryNotFoundURLs } from '../../utils';
import { MenuIcon } from '../Icons';
//importing types
import { CloudinaryURLs } from '../../interfaces';

//props interface
interface HeaderProps {
  images: CloudinaryURLs;
}

//header
const Header: React.FC<HeaderProps> = ({ images }) => (
  <header>
    <div className="container">
      <Link href="/" passHref>
        <div className="logo__container">
          <Image
            src={images ? images.logo : cloudinaryNotFoundURLs.logo}
            alt="logo"
            width="270"
            height="70"
          />
        </div>
      </Link>
      <nav>
        <div className="nav__list">
          <li className="list__item">Pricing</li>
          <li className="list__item">Contact</li>
          <li className="list__item">Services</li>
          <li className="list__item active">Learn</li>
        </div>
        <div className="auth__list">
          <div className="list__item">Sign In</div>
          <div className="button primary__button">Get Started</div>
        </div>
      </nav>
      <MenuIcon />
    </div>
  </header>
);

export default Header;
