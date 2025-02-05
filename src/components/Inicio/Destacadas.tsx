import "./destacadas.css";
import { useState, useEffect } from "react";
import properties from '../../mocks/properties.json'
import { Properties } from "../../types";
import { useBoxContext } from "../../context/InfoBoxContext";



export default function Destacadas() {

  const { openBox} = useBoxContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(6);


  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth <= 550){
        setCardsToShow(2)
      } else if (windowWidth <= 750){
        setCardsToShow(3)
      } else if (windowWidth <= 850){
        setCardsToShow(4)
      } else {
        setCardsToShow(6)
      }
    }
    

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize)
  }, [properties.length])

  useEffect(() => {
    const maxIndex = Math.max(0, properties.length - cardsToShow)
    if (currentIndex > maxIndex){
      setCurrentIndex(maxIndex)
    }
  }, [cardsToShow, properties.length])

  const nextSlide = () => {
    setCurrentIndex ((prevIndex) => Math.min(prevIndex + 1, properties.length - cardsToShow))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsToShow, 0))
  }

  return (
    <div className="destacadas-container">      
      <div
        className="destacadas-cards-container"
        style={{ 
          transform: `translateX(-${currentIndex * 100 / cardsToShow}%)`,
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        {properties.map((property: Properties, index: number) => (
          <div
            className="destacadas-card"
            key={`${property.id}-${index}`}
            style={{ 
              flex: `0 0 ${100 / cardsToShow}%`,
            }}
          >
            <div className="destacadas-card-image">
              <img src={property.image} alt={property.name} />
            </div>
            <div className="destacadas-card-info">
              <h2 className="destacadas-card-title">{property.name}</h2>
              <p>{property.location}</p> <p>{property.surface}</p>
            </div>
            <div className="card-button">
              <button onClick={() => openBox(property)}>Más información</button>
            </div>
          </div>
        ))}
      </div>
      <div className="destacadas-slider-buttons">
        <button 
        className="prev-button" 
        onClick={prevSlide} 
        disabled={currentIndex === 0}
        >
          &#10094;
        </button>
        <button 
        className="next-button" 
        onClick={nextSlide} 
        disabled={currentIndex + cardsToShow >= properties.length}
        >
          &#10095;
        </button>
        </div>
    </div>
  );
}

