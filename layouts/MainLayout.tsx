//importing components
import Header from '../components/Header';
import Footer from '../components/Footer';
//importing types
import { CloudinaryURLs } from '../interfaces';

//props interface
interface MainLayoutProps {
  images: CloudinaryURLs;
}

//main layout
const MainLayout: React.FC<MainLayoutProps> = ({ children, images }) => {
  return (
    <div className="app__container">
      <Header images={images} />
      {children}
      <Footer images={images} />
    </div>
  );
};

export default MainLayout;
