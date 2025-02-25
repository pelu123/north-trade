import '../components.css'

export default function InteractiveMap() {
    return (
        <div className="map-container">
            <h2 className="map-title">Si desea encontrarnos, puedes ubicarnos a través de nuestro mapa interactivo</h2>
            <iframe 
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.515496254884!2d-65.40456872537116!3d-24.777795907404876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3b9e351a061%3A0x925e8086ecbf3feb!2sNORTH%20TRADE%20Negocios%20Inmobiliarios!5e0!3m2!1ses!2sar!4v1739915938629!5m2!1ses!2sar" 
            width="550" 
            height="400" 
            allowFullScreen 
            loading="lazy" ></iframe>
        </div>
    )
}