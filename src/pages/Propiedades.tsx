import headerRural from '../assets/headerRural.png'
import '../pages/Pages.css'
import '../components/Propiedades/propiedades.css'
import CardsSlider from '../components/Propiedades/CardsSlider'


export default function Propiedades() {
    return (
        <>
        <div>
            <section
            className="propiedades-main-section"
            style={{backgroundImage: `url(${headerRural})`}}>
                <div className='propiedades-header-container'>
                    <h1 className='propiedades-header-title'>
                        Aquí encontraras las propiedades y campos que tenemos a disposicion para tí.
                    </h1>
                    <p className='propiedades-header-description'>
                        Conoce las propiedades y campos que ofrecen servicios y beneficios para
                        tus actividades rurales.
                    </p>
                </div>
            </section>
            <div className='propiedades-cards-section'>
                <CardsSlider properties={[]} />
            </div>
        </div>
        </>
    )
}