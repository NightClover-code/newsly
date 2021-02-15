interface CategoriesItemProps {
  title: string;
  imgSource: string;
}
//grid item component
const CategoriesItem: React.FC<CategoriesItemProps> = ({
  imgSource,
  title,
}) => {
  return (
    <div className="grid__item">
      <div className="logo__container">
        <img src={`./images/${imgSource}.svg`} alt={imgSource} />
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

export default CategoriesItem;
