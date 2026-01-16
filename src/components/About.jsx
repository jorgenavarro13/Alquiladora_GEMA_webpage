const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <header className="section-header">
                    <h1>Sobre Nosotros</h1>
                    <div className="header-underline"></div>
                </header>

                <div className="about-content">
                    <div className="about-text">
                        <h2>Alquiladora GEMA</h2>
                        <p>Desde 2020, somos líderes en el ramo de alquiler de equipos y servicios para eventos especiales. Nos especializamos en transformar tus celebraciones en momentos inolvidables.</p>
                        
                        <h3>Nuestra Misión</h3>
                        <p>Proporcionar soluciones integrales de calidad para fiestas infantiles, eventos corporativos, bodas y celebraciones de todo tipo, garantizando excelencia en cada detalle.</p>
                    </div>

                    <div className="about-highlights">
                        <div className="highlight-card">
                            <span className="highlight-icon">🎯</span>
                            <h4>Profesionalismo</h4>
                            <p>Servicio confiable y de calidad</p>
                        </div>
                        <div className="highlight-card">
                            <span className="highlight-icon">🚀</span>
                            <h4>Rapidez</h4>
                            <p>Entrega y montaje eficiente</p>
                        </div>
                        <div className="highlight-card">
                            <span className="highlight-icon">💎</span>
                            <h4>Variedad</h4>
                            <p>Amplio catálogo de opciones</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;