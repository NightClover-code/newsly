//importing components
import {
  BusinessIcon,
  EntertainmentIcon,
  GeneralIcon,
  HealthIcon,
  ScienceIcon,
  SportsIcon,
  TechnologyIcon,
} from '../Icons';
//categoris grid
const CategoriesGrid: React.FC = () => {
  return (
    <div className="categories__grid">
      <div className="grid__item">
        <div className="logo__container">
          <BusinessIcon />
        </div>
        <div className="title">Business</div>
      </div>
      <div className="grid__item">
        <div className="logo__container">
          <EntertainmentIcon />
        </div>
        <div className="title">Entertainement</div>
      </div>
      <div className="grid__item">
        <div className="logo__container">
          <GeneralIcon />
        </div>
        <div className="title">General</div>
      </div>
      <div className="grid__item">
        <div className="logo__container">
          <ScienceIcon />
        </div>
        <div className="title">Science</div>
      </div>
      <div className="grid__item">
        <div className="logo__container">
          <HealthIcon />
        </div>
        <div className="title">Health</div>
      </div>
      <div className="grid__item">
        <div className="logo__container">
          <TechnologyIcon />
        </div>
        <div className="title">Technology</div>
      </div>
      <div className="grid__item">
        <div className="logo__container">
          <SportsIcon />
        </div>
        <div className="title">Sports</div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
