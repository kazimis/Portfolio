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
    <div>
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

            <footer className="slide-footer">
              <h2 style={{ color: "white" }}>Recent projects</h2>
              <div className="slide-info">
                <h3>{name}</h3>
              </div>
              <p style={{ color: "white", fontStyle: "italic" }}>{quote}</p>
              <button className="slide-btn">Read more </button>
            </footer>
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
