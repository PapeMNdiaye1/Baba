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
                        Artiste plasticien en atelier de peinture depuis quatre années. Mon intérêt plastique est ce qui nous est proche, notre environnement, notre cadre et nos relations. J'ai un baccalauréat en 2003, et depuis je poursuis ma recherche artistique dans différents domaines aussi variés que l'art figuratif et l'art abstrait.
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