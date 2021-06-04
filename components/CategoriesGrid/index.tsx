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

//props interface
interface CategoriesGridInterface {
  gridRef: React.MutableRefObject<HTMLDivElement | null>;
}

//categories grid
const CategoriesGrid: React.FC<CategoriesGridInterface> = ({ gridRef }) => (
  <div className="categories__grid" ref={gridRef}>
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

export default CategoriesGrid;
