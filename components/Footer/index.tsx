//importing utils
import Link from 'next/link';
//footer
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__top">
          <div className="footer__logo">
            <Link href="/">
              <div className="logo__container">
                <img src="./images/logo-footer.svg" alt="footer-logo" />
              </div>
            </Link>
            <p>
              The best platform to stay up-to-date with what's going on in the
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
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M28.344 5.30167e-08H1.65459C0.740662 0.000457817 -0.000228829 0.741806 5.30167e-08 1.65596V28.3454C0.000457817 29.2593 0.741806 30.0002 1.65596 30H28.344C29.2584 30.0002 29.9998 29.2591 30 28.3447C30 28.3445 30 28.3443 30 28.344V1.65459C29.9995 0.740662 29.2582 -0.000228829 28.344 5.30167e-08V5.30167e-08Z"
                    fill="white"
                    fillOpacity="0.3"
                    className="first__path"
                  />
                  <path
                    d="M20.7129 30V18.3985H24.624L25.21 13.8575H20.7129V10.9653C20.7129 9.65359 21.077 8.75981 22.958 8.75981H25.3418V4.70929C24.9271 4.65413 23.5041 4.53076 21.8484 4.53076C18.3913 4.53076 16.0254 6.64014 16.0254 10.5156V13.8575H12.1289V18.3985H16.0254V30H20.7129Z"
                    fill="#00252B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="icon__container linkedin__icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.380157 10.0303H6.81105V29.3783H0.380157V10.0303Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  d="M3.63808 0.703125C1.43829 0.703125 0 2.1476 0 4.04617C0 5.90286 1.39549 7.38853 3.55362 7.38853H3.5955C5.83832 7.38853 7.23404 5.90286 7.23404 4.04617C7.19215 2.1476 5.83832 0.703125 3.63808 0.703125Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  d="M22.5963 9.57617C19.1842 9.57617 17.6552 11.4514 16.8006 12.77V10.0303H10.3695V29.3783H16.8004V18.5735C16.8004 17.9951 16.8423 17.4177 17.0121 17.0041C17.4769 15.8489 18.5351 14.6523 20.3116 14.6523C22.6387 14.6523 23.5695 16.4266 23.5695 19.0276V29.3783H30V18.2844C30 12.3415 26.8272 9.57617 22.5963 9.57617V9.57617Z"
                  fill="white"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
            <div className="icon__container twitter__icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M9.37616 27.1937C20.6976 27.1937 26.8886 17.8144 26.8886 9.68126C26.8886 9.41484 26.8831 9.14956 26.8712 8.88566C28.0729 8.01683 29.1175 6.93261 29.9415 5.69848C28.8387 6.18874 27.6517 6.51856 26.4068 6.66756C27.6776 5.90539 28.6533 4.70009 29.1134 3.26317C27.9241 3.96813 26.6071 4.48037 25.205 4.75708C24.0818 3.56072 22.4826 2.8125 20.712 2.8125C17.3131 2.8125 14.5567 5.56893 14.5567 8.96669C14.5567 9.44986 14.6107 9.91952 14.7162 10.3702C9.60069 10.1127 5.06448 7.66366 2.02904 3.93929C1.50055 4.84887 1.19568 5.90562 1.19568 7.03309C1.19568 9.16833 2.28241 11.0536 3.93471 12.1564C2.92489 12.1253 1.9764 11.8481 1.14716 11.3867C1.14624 11.4125 1.14624 11.4377 1.14624 11.4652C1.14624 14.4461 3.26775 16.935 6.08438 17.499C5.5671 17.6397 5.02282 17.7155 4.46137 17.7155C4.06541 17.7155 3.67951 17.6766 3.30437 17.6045C4.08807 20.0501 6.36041 21.8296 9.05435 21.8795C6.94772 23.5307 4.29383 24.5142 1.40969 24.5142C0.913469 24.5142 0.423203 24.4858 -0.0585938 24.4291C2.66533 26.175 5.90013 27.194 9.37639 27.194"
                    fill="white"
                    fillOpacity="0.3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="copyright">&copy; Copyright 2021, newsly Inc.</div>
          <div className="privacy__policy">Terms of Use & Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
