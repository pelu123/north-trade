import { useBoxContext } from '../../context/InfoBoxContext'
import '../components.css'


export default function InfoBox() {
    const {  isOpen, selectedProperty, closeBox } = useBoxContext();

    if(!isOpen || !selectedProperty) return null;

    return (
        <div className="info-box-container" >           
            <div  className="info-box" >
                <img src={selectedProperty.image} alt="propiedad" className='info-box-img' />
                <button onClick={closeBox}>
                    x
                </button>
                <h2 className='info-box-title'>{selectedProperty.name}</h2>       
                <p className='info-box-description'>{selectedProperty.description}</p>
            </div>           
        </div>
    )
}