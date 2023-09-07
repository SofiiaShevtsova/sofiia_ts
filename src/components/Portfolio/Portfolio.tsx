import { useContext } from "react";
import { AppContext } from "../../App";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import photo from "../../images/experience.jpg";

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
            <div>
              <img src={photo} alt="logo" className="carousel-image" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={photo} alt="logo" className="carousel-image" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src={photo} alt="logo" className="carousel-image" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={photo} alt="logo" className="carousel-image" />
              <p className="legend">Legend 4</p>
            </div>
          </Carousel>
        </div>
      </section>
    )
  );
};
