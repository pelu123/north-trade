import React, { useState, useEffect } from "react";
import CardsPropiedades from "./CardsPropiedades";
import { useMediaQuery, useTheme } from "@mui/material";
import { Properties } from "../../types";
import "./propiedades.css";

//Breakpoints for responsiveness
const BREAKPOINTS = {
    xs: 550,
    sm: 750,
    md: 850,
}

interface SliderProps {
    properties: Properties[]
}

const CardsSlider: React.FC<SliderProps> = ({ properties }) => {
    const theme = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(6);

    // Use useMediaQuery from Material UI to get the breakpoints
    const isXs = useMediaQuery(theme.breakpoints.down(BREAKPOINTS.xs))
    const isSm = useMediaQuery(theme.breakpoints.down(BREAKPOINTS.sm))
    const isMd = useMediaQuery(theme.breakpoints.down(BREAKPOINTS.md))

    useEffect(() => {
        if (isXs) {
            setCardsToShow(2)
        } else if (isSm) {
            setCardsToShow(3)
        } else if (isMd) {
            setCardsToShow(4)
        } else {
            setCardsToShow(6)
        }
    }, [isXs, isSm, isMd])

    useEffect(() => {
        const maxIndex = Math.max(0, properties.length - cardsToShow)
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex)
        }
    }, [cardsToShow, properties.length, currentIndex])

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, properties.length - cardsToShow))
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }


    return (
        <>
        <div className="propiedades-slider-container">
            <button className="propiedades-prev-button" onClick={handlePrev} disabled={currentIndex === 0}>
                &#10094;
            </button>
            <div className="propiedades-slider-content">
               <CardsPropiedades />
            </div>            
            <button className="propiedades-next-button" onClick={handleNext}>
                &#10095;
            </button>
        </div>
        </>
    )

}

export default CardsSlider;