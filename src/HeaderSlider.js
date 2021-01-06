import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { slidersData } from "./data";

const HeaderSlider = () => {
  const [people, setPeople] = useState(slidersData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    index < 0
      ? setIndex(lastIndex)
      : index > lastIndex
      ? setIndex(0)
      : setIndex(index);
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 8000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div>
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        } else if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <div key={id} className={`slide ${position}`}>
            <img src={image} alt={name} className="slide-img" />
            {/* <footer> */}
            <div className="slide-info">
              <h4>{name}</h4>
            </div>
            <p>{quote}</p>
            <button className="slide-btn">Read more </button>
            {/* </footer> */}
          </div>
        );
      })}
      <button className="prev">
        <FiChevronLeft onClick={() => setIndex(index - 1)} />
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
