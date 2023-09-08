import { useContext } from "react";
import { AppContext } from "../../App";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Portfolio = () => {
  const { userInfo } = useContext(AppContext);
  return (
    userInfo && (
      <section id={userInfo.navigation[3][1]}>
        <div className="carousel-box">
          <h2 className="title">{userInfo.navigation[3][0]}</h2>

          <Carousel
            autoPlay={true}
            stopOnHover={true}
            centerMode={true}
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
          >
            {userInfo &&
              userInfo.portfolio.map((project) => (
                <div key={project.name}>
                  <img
                    src={project.imageURL}
                    alt="logo"
                    className="carousel-image"
                  />
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <p className="legend">{project.name}</p>
                  </a>
                </div>
              ))}
          </Carousel>
        </div>
      </section>
    )
  );
};
