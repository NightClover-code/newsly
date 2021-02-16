const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="logo__container">
          <img src="./images/logo.svg" alt="logo" />
        </div>
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
      </div>
    </header>
  );
};

export default Header;
