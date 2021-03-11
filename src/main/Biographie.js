import React, { Component, Fragment } from "react"


class Biographie extends Component {
    render() {
        return (
            <Fragment>
                <div id="biographie-container">
                    <div className="carte-container">
                        <div className="carte">
                            <h1>
                                Biographie
                            </h1>
                            <section>
                                Artiste plasticien en atelier de peinture depuis quatre années. Mon intérêt plastique est ce qui nous est proche, notre environnement, notre cadre et nos relations.
                                J'ai un baccalauréat en 2003, et depuis je poursuis ma recherche artistique dans différents domaines aussi variés que l'art figuratif et l'art abstrait.

                            </section>
                        </div>
                    </div>
                    <div className="carte-container">
                        <div className="carte">
                            <h1>
                                C.V
                            </h1>
                            <section>
                                2018 - 2021 : Atelier De Peinture
                                    <br />
                                <br />
                                <br />
                                2018 : Exposition Sargal Bay
                                    <br />
                                <br />
                                <br />
                                2014 - 2016 : Atelier De Peinture
                                    <br />
                                <br />
                                <br />
                                2010 - 2014 : Decoration
                                    <br />
                                <br />
                                <br />
                                2005 : Professeur a ENA
                                    <br />
                                <br />
                                <br />
                                2003 : Bacalauriat
                            </section>
                        </div>
                    </div>

                </div>

            </Fragment>
        )
    }
}




export default Biographie