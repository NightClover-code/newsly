//importing components
import Header from '../components/Header';
import Footer from '../components/Footer';
//main layout
const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="main__layout">
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
