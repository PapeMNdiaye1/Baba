import React, { Component, Fragment } from "react"

class Atelier extends Component {
    render() {
        return (
            <Fragment>
                <div id="atelier">
                    <div className="works">
                        <div className="works-poster travaux-annexes">
                            <h1>
                                Travaux annexes
                            </h1>
                        </div>
                        <div className="works-description-container">
                            <p className="works-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Enim labore odio vero animi, commodi neque eum atque
                                lore molestias maxime possimus
                                impedit, consequuntur, sequi vitae.
                                impedit, consequuntur, sequi vitae.
                                impedit, consequuntur, sequi vitae.
                                impedit, consequuntur, sequi vitae.
                            </p>
                        </div>
                    </div>
                    <div className="works">
                        <div className="works-poster portraits-et-autres">
                            <h1>
                                Portraits et autres
                            </h1>
                        </div>
                        <div className="works-description-container">
                            <p className="works-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Enim labore odio vero animi, commodi neque eum atque
                                lore molestias maxime possimus
                            </p>
                        </div>
                    </div>
                    <div className="works">
                        <div className="works-poster art-abstrait">
                            <h1>
                                Art Abstrait
                            </h1>
                        </div>
                        <div className="works-description-container">
                            <p className="works-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Enim labore odio vero animi, commodi neque eum atque
                                lore molestias maxime possimus
                                impedit, consequuntur, sequi vitae.
                                impedit, consequuntur, sequi vitae.
                                impedit, consequuntur, sequi vitae.
                                impedit, consequuntur, sequi vitae.
                            </p>

                        </div>
                    </div>

                    <h2>Contacts</h2>
                    <br />
                    <div className="contact-container">
                        <div className="social-networks">
                            <div className="social-networks-icons twitter">
                                <i class="fab fa-twitter"></i>
                            </div>
                            <div className="social-networks-link">
                                <a href="https://twitter.com/aruline" target="_blank">
                                    Aruline
                                </a>
                            </div>
                        </div>
                        <div className="social-networks">
                            <div className="social-networks-icons">
                                <i class="fab fa-facebook-square"></i>
                            </div>
                            <div className="social-networks-link">
                                <a href="https://web.facebook.com/BabaSyartwork/" target="_blank">
                                    BabaSyartWork
                                </a>
                            </div>
                        </div>
                        <div className="social-networks">
                            <div className="social-networks-icons">
                                <i class="fab fa-whatsapp">
                                </i>
                            </div>
                            <div className="social-networks-link">
                                +221 78 295 81 52
                            </div>
                        </div>
                        <div className="social-networks">
                            <div className="social-networks-icons">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div className="social-networks-link">
                                baba-sy@outlook.com
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Atelier