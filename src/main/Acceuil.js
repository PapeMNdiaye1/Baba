import React, { Component, Fragment } from "react"


class Acceuil extends Component {
    render() {
        return (
            <Fragment>
                <div id="acceuil-container">
                    <div className="background-container">

                    </div>
                    <div className="text-in-acceuil-background">
                    </div>
                    <p className="text-in-acceuil">
                        Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Molestias voluptates assumenda
                        nostrum voluptas sapiente.
                        Sequi at facere sapiente.
                        Deleniti totam optio velit dolor sunt deserunt,
                        provident similique aperiam numquam placeat.
                    </p>
                    <div className="social-networks-container">
                        <div className="social-networks">
                            <div className="social-networks-icons twitter">
                                <i class="fab fa-twitter"></i>
                            </div>
                            <div className="social-networks-link">
                                twitter</div>
                        </div>
                        <div className="social-networks">
                            <div className="social-networks-icons">
                                <i class="fab fa-facebook-square"></i>
                            </div>
                            <div className="social-networks-link">
                                facebook
                            </div>
                        </div>
                        <div className="social-networks">
                            <div className="social-networks-icons">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <div className="social-networks-link">
                                whatsapp
                            </div>
                        </div>
                        <div className="social-networks">
                            <div className="social-networks-icons">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div className="social-networks-link">
                                mail
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Acceuil;