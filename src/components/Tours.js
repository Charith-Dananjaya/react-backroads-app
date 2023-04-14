import Titile from './Titile';
import { toursList } from './data';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Titile title="Featured" subTitle="Tours" />

      <div className="section-center featured-center">
        {toursList.map((tour) => {
          const { id, image, date, title, text, location, duration, cost } =
            tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{duration}</p>
                  <p>from {cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
