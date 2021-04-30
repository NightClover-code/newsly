//articles item
const ArticlesItem: React.FC = () => {
  return (
    <div className="articles__item">
      <div className="image__container">
        <img src="./images/random.png" alt="random-pic" />
      </div>
      <div className="text__content">
        <h1>How this Nonprofit Raised $26,000 in 24 hours on Giving Tuesday</h1>
        <p className="description">
          How did they do it? That's what we wanted to know, so we chatted with
          Kimberly to get the inside scoop on CCS' #GivingTuedayEfforts.
        </p>
        <div className="news__type">
          <div className="custom__button">Article</div>
        </div>
        <span className="author">by Bansilal Brata</span>
      </div>
    </div>
  );
};

export default ArticlesItem;
