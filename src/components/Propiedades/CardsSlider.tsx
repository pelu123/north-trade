import React, { useState, useEffect } from "react";
import CardsPropiedades from "./CardsPropiedades";
import { Properties } from "../../types";
import "./propiedades.css";


interface SliderProps {
    properties: Properties[]
}

const CardsSlider: React.FC<SliderProps> = ({ properties }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(6);

    // Defining the breakpoints for the slider
    useEffect(() => {
        const handleReasize = () => {
            const windowWidth = window.innerWidth
            if (windowWidth >= 550) {
                setCardsToShow(2)
            } else if (windowWidth >= 750) {
                setCardsToShow(3)
            } else if (windowWidth >= 850) {
                setCardsToShow(4)
            } else {
                setCardsToShow(6)
            }
        }

        window.addEventListener("resize", handleReasize)
        handleReasize()
        return () => window.removeEventListener("resize", handleReasize)
    }, [properties.length])


   

    useEffect(() => {
        const maxIndex = Math.max(0, properties.length - cardsToShow)
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex)
        }
    }, [cardsToShow, properties.length])

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, properties.length - cardsToShow))
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - cardsToShow, 0))
    }

    return (
        <>
        <div className="propiedades-slider-container">
            <button className="propiedades-prev-button" onClick={handlePrev} disabled={currentIndex === 0}>
                &#10094;
            </button>
            <div className="propiedades-slider-content">
               {properties.slice(currentIndex, currentIndex + cardsToShow).map((property, index) => (
                  <CardsPropiedades key={index} properties={[property]}/>  
                
               ))}
            </div>            
            <button className="propiedades-next-button" onClick={handleNext} disabled={currentIndex + cardsToShow >= properties.length}>
                &#10095;
            </button>
        </div>
        </>
    )

}

export default CardsSlider;