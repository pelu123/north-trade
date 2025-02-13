import { useState } from "react";
import properties from "../../mocks/properties.json";
import { Properties } from "../../types";
import { Collapse, Box, Typography } from "@mui/material";
import "./propiedades.css";

export default function CardsPropiedades() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="propiedades-cards-container">
      <div className="propiedades-grid-container">
        {properties.map((property: Properties) => (
          <div
            className="propiedades-card"
            key={property.id}
            style={{
              backgroundImage: `url(${property.image})`,
            }}
            onClick={() => handleCardClick(property.id)}
          >
            {/* Título solo visible si la card no está expandida */}
            {expandedId !== property.id && (
              <div className="propiedades-card-title">{property.name}</div>
            )}
            {/* Contenido expandido */}
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
                {/* Mapear el array de características a una lista */}
                {property.features.map((feature, index) => (
                  <Typography key={index}> - {feature}</Typography>
                ))}
              </Box>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
}
