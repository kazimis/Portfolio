import React from "react";
import { slidersData } from "./data";
import nav_bg from "./img/background.png";

const Carousel = () => {
  // const [index, setIndex] = useState(0);
  const indices = Array.from(Array(slidersData.length).keys());
  console.log(indices);
  const isActive = (id) => {
    if (id === 1) {
      return (
        <div className="carousel-caption">
          <h1 className="display-2">Personal Projects</h1>
          <button type="button" className="btn btn-primary btn-lg">
            Recent Projects
          </button>
        </div>
      );
    }
  };

  return (
    <div
      id="slides"
      className="carousel carousel-fade"
      data-ride="carousel"
      data-interval="4000"
    >
      <ul className="carousel-indicators">
        {indices.map((index) => {
          return (
            <li
              key={index}
              data-target="#slides"
              data-slide-to={`${index}`}
              className={index === 0 ? "active" : ""}
            ></li>
          );
        })}
      </ul>
      <div className="carousel-inner">
        {slidersData.map((data, index) => {
          const { image, id, title } = data;
          return (
            <div
              key={index}
              className={index === 0 ? "carousel-item active" : "carousel-item"}
            >
              {/* <img
                className="carousel-img"
                key={id}
                src={nav_bg}
                alt="sliderImage"
              /> */}
              <div className="carousel-caption">
                <h1 className="display-2">Personal Projects</h1>
                <h3>{title}</h3>
                <button type="button" className="btn btn-primary btn-lg">
                  Recent Projects
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Carousel;
// if (id === 1) {
//   <div className="carousel-caption">
//     <h1 className="display-2">Personal Projects</h1>
//     <button type="button" className="btn btn-primary btn-lg">
//       Recent Projects
//     </button>
//   </div>;
// }
