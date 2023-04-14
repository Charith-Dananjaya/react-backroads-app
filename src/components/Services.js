import Titile from './Titile';
import { servicesList } from './data';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Titile title="Our" subTitle="services" />
      <div className="section-center services-center">
        {servicesList.map((service) => {
          const { serviceIcon, serviceTitle, serviceText, id } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={serviceIcon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{serviceTitle}</h4>
                <p className="service-text">{serviceText}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
