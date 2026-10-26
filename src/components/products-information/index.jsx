import React from 'react'
import './index.scss'

function ProdutcsInformation() {
    return (
        <div>
            <div className="row mb-3 productSection">
                <div className="col-lg-6">
                    <div className="productTitle">
                        <h2><b>Desarrollo software</b></h2>
                    </div>
                    <div className="productSection">
                        <p>Eterux ofrece diferentes servicios de desarrollo software, actualmente nuestro portafolio de servicio software incluye desarrollo web
                        para la creación de landing pages, Ecommerce y páginas de servicios. Desarrollo de aplicaciones móviles según los requerimientos del cliente y
                        aplicaciones desktop (de escritorio).
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 imgContainer">
                    <div className="productImg">
                        <img src="images/logo_4.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="row mb-3 productSection">
            <div className="col-lg-6 imgContainer">
                    <div className="productImg">
                        <img src="images/logo_4.png" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="productTitle">
                        <h2><b>Desarrollo Hardware</b></h2>
                    </div>
                    <div className="productSection">
                        <p>Eterux ofrece diferentes servicios de desarrollo software, actualmente nuestro portafolio de servicio software incluye desarrollo web
                        para la creación de landing pages, Ecommerce y páginas de servicios,
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-6">
                    <div className="productTitle">
                    <h2><b>Soluciones a la medida</b></h2>
                    </div>
                    <h3>¿Tienes una idea tecnológica? materialízala con nosotros</h3>
                    <div className="productSection">
                        <p>En Eterux ofrecemos a todas las personas la posibilidad de materializar sus ideas, no importa si se trata de un desarrollo especial para personas,
                            empresas, o un grupo u población especial, con tecnología todo es posible. <br/>
                            Ponte en contacto con nosotros y busquemos la mejor forma de materializar tu idea juntos.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 imgContainer">
                    <div className="productImg">
                        <img src="images/logo_4.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdutcsInformation
