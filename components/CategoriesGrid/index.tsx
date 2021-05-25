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
import CategoriesItem from './CategoriesItem';

//categoris grid
const CategoriesGrid: React.FC = () => {
  return (
    <div className="categories__grid">
      <CategoriesItem title="Business">
        <BusinessIcon />
      </CategoriesItem>
      <CategoriesItem title="Entertainement">
        <EntertainmentIcon />
      </CategoriesItem>
      <CategoriesItem title="General">
        <GeneralIcon />
      </CategoriesItem>
      <CategoriesItem title="Science">
        <ScienceIcon />
      </CategoriesItem>
      <CategoriesItem title="Health">
        <HealthIcon />
      </CategoriesItem>
      <CategoriesItem title="Technology">
        <TechnologyIcon />
      </CategoriesItem>
      <CategoriesItem title="Sports">
        <SportsIcon />
      </CategoriesItem>
    </div>
  );
};

export default CategoriesGrid;
