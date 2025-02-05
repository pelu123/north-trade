import { useState } from "react";
import propiedades from "../../mocks/properties.json";
import { Properties } from "../../types";
import { Collapse, Box, Typography } from "@mui/material";
import "./propiedades.css";

export default function CardsPropiedades() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="propiedades-cards-section">
      <div className="propiedades-cards-container">
        {propiedades.map((property: Properties) => (
          <div
            className="propiedades-card"
            key={property.id}
            style={{
              backgroundImage: `url(${property.image})`,
            }}
            onClick={() => handleCardClick(property.id)}
          >
            {/*Title only visible if the card is not expanded*/}
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
                {/* Maping the features array to a list */}
                {property.features.map((feauture, index) => (
                  <Typography key={index}> - {feauture}</Typography>
                ))}
              </Box>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
}
