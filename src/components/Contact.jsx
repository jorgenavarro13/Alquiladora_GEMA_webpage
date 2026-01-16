const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <header className="section-header">
                    <h1>Contacta con Nosotros</h1>
                    <p>Estamos listos para ayudarte a planificar tu evento</p>
                    <div className="header-underline"></div>
                </header>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Información de Contacto</h2>
                        
                        <div className="contact-item">
                            <span className="contact-icon">📧</span>
                            <div>
                                <h4>Correo Electrónico</h4>
                                <a href="mailto:alquiladoragema@gmail.com">alquiladoragema@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">📱</span>
                            <div>
                                <h4>Teléfono</h4>
                                <a href="tel:+527711656878">771-165-6878</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">📍</span>
                            <div>
                                <h4>Ubicación</h4>
                                <p>Pachuca, Hidalgo, México</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <h2>Envía tu Solicitud</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    placeholder="Tu nombre" 
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    placeholder="Tu correo" 
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="tel" 
                                    placeholder="Tu teléfono" 
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    placeholder="Cuéntanos sobre tu evento" 
                                    rows="5"
                                    className="form-textarea"
                                ></textarea>
                            </div>
                            <button type="submit" className="form-submit">Solicitar Cotización</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;