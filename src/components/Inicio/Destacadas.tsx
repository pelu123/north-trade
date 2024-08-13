import "./destacadas.css"
import properties from "../../mocks/properties.json"

type Properties = {
    "id": number,
    "name": string,
    "location": string,
    "surface": string,
    "detailed location": string,
    "description": string,
    "rainy regime": string,
    image: string
}

export default function Destacadas() {
    
    return (
        <>           
            <div className="destacadas-cards-container">
                <div className="destacadas-card">
                {properties.map((property: Properties) => (
                    <div className="destacadas-card-content" key={property.id}>
                        <div className="destacadas-card-image">
                            <img src={property.image}  />                            
                        </div>
                        <div className="destacadas-card-info">
                            <h2 className="destacadas-card-title">{property.name}</h2>
                            <p>{property.location}</p>                            
                            <p>{property.surface}</p>
                        </div>
                        <div className="card-button">
                            <button>Más información</button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        
        </>
    )
}