//importing utils
import Link from 'next/link';

//header
const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <div className="logo__container">
            <img src="./images/logo.svg" alt="logo" />
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#008379"
          className="menu__icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
