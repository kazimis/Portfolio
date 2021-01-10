import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { slidersData } from "./data";

const HeaderSlider = () => {
  const [slideData, setSlideData] = useState(slidersData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slideData.length - 1;
    index < 0
      ? setIndex(lastIndex)
      : index > lastIndex
      ? setIndex(0)
      : setIndex(index);
  }, [index, slideData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 8000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div className="slideContainer">
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        eligendi dolorum aspernatur deserunt veritatis in error alias ad ratione
        sapiente sequi officia, animi impedit amet velit ipsum vel est
        temporibus.
      </p> */}
      {slideData.map((data, dataIdx) => {
        const { id, image, name, title, quote } = data;
        let position = "nextSlide";
        if (dataIdx === index) {
          position = "activeSlide";
        } else if (
          dataIdx === index - 1 ||
          (index === 0 && dataIdx === slideData.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <div key={id} className={`slide ${position}`}>
            <img src={image} alt={name} className="slide-img" />

            <div className="slide-footer">
              <h2 style={{ fontSize: "3vw" }}>Recent projects</h2>
              <h3 style={{ fontSize: "2vw" }}>{name}</h3>
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "1.5vw",
                }}
              >
                {quote}
              </p>
              <button className="slide-btn">Explore </button>
            </div>
          </div>
        );
      })}
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </div>

    // // <section className="section">
    // <>

    // </>
    // </section>
  );
};

export default HeaderSlider;
