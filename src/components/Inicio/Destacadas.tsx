import "./destacadas.css";
import properties from "../../mocks/properties.json";
import { useState, useEffect } from "react";


type Properties = {
  id: number;
  name: string;
  location: string;
  surface: string;
  "detailed location": string;
  description: string;
  image: string;
};

export default function Destacadas() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const updateSlidesToShow = () => {
    if (window.innerWidth <= 500) {
      setSlidesToShow(2);
    } else if (window.innerWidth <= 700) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  }

    useEffect(() => {
      updateSlidesToShow();
      window.addEventListener("resize", updateSlidesToShow);
      return () => window.removeEventListener("resize", updateSlidesToShow);
    }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
    prevIndex === properties.length - slidesToShow ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? properties.length - slidesToShow : prevIndex - 1
    )
  }
 
  return (
    <div >      
      <div
        className="destacadas-cards-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {properties.concat(properties).map((property: Properties, index) => (
          <div
            className="destacadas-card"
            key={index}
            style={{ flex: `0 0 ${100 / slidesToShow}%` }}
          >
            <div className="destacadas-card-image">
              <img src={property.image} alt={property.name} />
            </div>
            <div className="destacadas-card-info">
              <h2 className="destacadas-card-title">{property.name}</h2>
              <p>{property.location}</p> <p>{property.surface}</p>
            </div>
            <div className="card-button">
              <button>Más información</button>
            </div>
          </div>
        ))}
      </div>
      <div className="destacadas-slider-buttons">
        <button className="prev-button" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next-button" onClick={nextSlide}>
          &#10095;
        </button>
        </div>
    </div>
  );
}

