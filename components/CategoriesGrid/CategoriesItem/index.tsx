//props interface
interface CategoriesItemProps {
  title: string;
}
//item
const CategoriesItem: React.FC<CategoriesItemProps> = ({ children, title }) => (
  <div className="grid__item">
    <div className="logo__container">{children}</div>
    <div className="title">{title}</div>
  </div>
);

export default CategoriesItem;
