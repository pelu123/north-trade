import { useState, useEffect } from "react";
import properties from '../../mocks/properties.json'
import { Properties } from "../../types";
import { Collapse, Box, Typography } from "@mui/material";
import "./propiedades.css";



export default function CardsPropiedades() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(6);

  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  //Defining the breakpoints for the slider
  useEffect(() => {
    const handleRezise = () => {
      const windowWidth = window.innerWidth
      if (windowWidth <= 550) {
        setCardsToShow(2)
      } else if (windowWidth <= 750) {
        setCardsToShow(3)
      } else if (windowWidth <= 850) {
        setCardsToShow(4)
      } else {
        setCardsToShow(6)
      }
    }

    window.addEventListener("resize", handleRezise)
  }, [properties.length])

  useEffect(() => {
    const maxIndex = Math.max(0, properties.length - cardsToShow)
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  })

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - cardsToShow, 0))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, properties.length - cardsToShow))
  }

  return (
    <div className="slider-container">
      <div 
      className="propiedades-cards-container"
      style={{
        transform: `translateX(-${currentIndex * 100 / cardsToShow}%)`,
        transition: 'transform 0.3s ease-in-out'
      }}
      >
        {properties.map((property: Properties) => (
          <div
            className="propiedades-card"
            key={property.id}
            style={{
              backgroundImage: `url(${property.image})`,
            }}
            onClick={() => handleCardClick(property.id)}
          >
            {/* Title only visible if the card is not expanded */}
            {expandedId !== property.id && (
              <div className="propiedades-card-title">{property.name}</div>
            )}
            {/* Expanded content */}
            <Collapse in={expandedId === property.id}>
              <Box
                sx={{
                  backgroundColor: "rgba(0, 0, 0)",
                  color: "white",
                  padding: "16px",
                  height: "100%",
                  borderRadius: "0 0 8px 8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {/* Mapping the features array to a list */}
                {property.features.map((feature, index) => (
                  <Typography key={index}> - {feature}</Typography>
                ))}
              </Box>
            </Collapse>
          </div>
        ))}
      </div>
      <div>
        <button
          className="propiedades-prev-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &#10094;
        </button>
        <button
          className="propiedades-next-button"
          onClick={handleNext}
          disabled={currentIndex + cardsToShow >= properties.length}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
