const Services = () => {
    const services = [
        {
            id: 1,
            icon: '🪑',
            title: 'Mesas y Sillas',
            description: 'Amplia variedad de mesas y sillas para cualquier tipo de evento. Diferentes estilos y capacidades.'
        },
        {
            id: 2,
            icon: '⛺',
            title: 'Carpas',
            description: 'Carpas de diferentes tamaños para eventos al aire libre. Protección y elegancia garantizadas.'
        },
        {
            id: 3,
            icon: '🎡',
            title: 'Juegos de Fiesta',
            description: 'Inflables, juegos y entretenimiento para fiestas infantiles y eventos familiares.'
        },
        {
            id: 4,
            icon: '🍽️',
            title: 'Vajillas',
            description: 'Completos sets de vajillas, cristalería y cubiertos para servicios de comida.'
        },
        {
            id: 5,
            icon: '👨‍💼',
            title: 'Preparación de Servicios',
            description: 'Nuestro equipo se encarga del montaje y desmontaje profesional de tu evento.'
        },
        {
            id: 6,
            icon: '✨',
            title: 'Decoración',
            description: 'Elementos decorativos y accesorios para personalizar tu celebración.'
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <header className="section-header">
                    <h1>Nuestros Servicios</h1>
                    <p>Ofrecemos una amplia gama de servicios de alquiler para eventos y ocasiones especiales</p>
                    <div className="header-underline"></div>
                </header>

                <div className="services-grid">
                    {services.map(service => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;
