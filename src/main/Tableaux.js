import React, { Component, Fragment } from "react"

import image0 from "./Images/1590098684498-2042443623[21808].jpg"
import image1 from "./Images/eE4cYLEA.jpeg"
import image2 from "./Images/IMG_20180214_105003_edit.jpg"
import image3 from "./Images/IMG_20180214_105555_edit.jpg"

// let TableauxArray = [
//     {
//         image: './Images/1590098684498-2042443623[21808].jpg', title: 'title1', description: 'description1',
//         image: './Images/1590098684498-2042443623[21808].jpg', title: 'title2', description: 'description2',
//         image: './Images/1590098684498-2042443623[21808].jpg', title: 'title3', description: 'description3',
//         image: './Images/1590098684498-2042443623[21808].jpg', title: 'title4', description: 'description4',
//         image: './Images/1590098684498-2042443623[21808].jpg', title: 'title5', description: 'description5',
//         image: './Images/1590098684498-2042443623[21808].jpg', title: 'title6', description: 'description6',
//     },
// ]

class Tableaux extends Component {


    render() {
        return (
            <Fragment>
                <div id="tableaux-container">
                    <div className="tableaux-presentation-container">
                        <div className="close-the-tableaux">
                        </div>
                        <div className="the-tableaux">
                            <h2>title</h2>
                            <img src={image3} />
                            <div className="the-tableaux-description">

                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Natus corporis delectus
                                    blanditiis porro perferendis tempore nam deleniti
                                    reprehenderit accusamus quia. Provident, consequuntur eius
                                    aliquam rem aut sunt dignissimos. Alias, ullam.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="tableaux-grid">
                        <div className="tableaux-rows">
                            <OneTableaux TableauxUrl={image0} />
                            <OneTableaux TableauxUrl={image1} />
                            <OneTableaux TableauxUrl={image0} />
                            <OneTableaux TableauxUrl={image1} />
                            <OneTableaux TableauxUrl={image0} />
                            <OneTableaux TableauxUrl={image1} />
                            <OneTableaux TableauxUrl={image0} />
                            <OneTableaux TableauxUrl={image1} />
                        </div>
                        <div className="tableaux-rows">
                            <OneTableaux TableauxUrl={image1} />
                            <OneTableaux TableauxUrl={image0} />
                            <OneTableaux TableauxUrl={image1} />
                            <OneTableaux TableauxUrl={image0} />
                            <OneTableaux TableauxUrl={image1} />
                            <OneTableaux TableauxUrl={image0} />
                        </div>
                        <div className="tableaux-rows">
                            <OneTableaux TableauxUrl={image3} />
                            <OneTableaux TableauxUrl={image2} />
                            <OneTableaux TableauxUrl={image3} />
                            <OneTableaux TableauxUrl={image2} />
                            <OneTableaux TableauxUrl={image3} />
                            <OneTableaux TableauxUrl={image2} />
                            <OneTableaux TableauxUrl={image3} />
                            <OneTableaux TableauxUrl={image2} />
                            <OneTableaux TableauxUrl={image3} />
                            <OneTableaux TableauxUrl={image2} />
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }
}




class OneTableaux extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tableaux-container">
                <h3>Titre</h3>
                <img src={this.props.TableauxUrl} alt="" width="100%" />
                <p className="tableaux-description">
                    description sadad
                </p>
            </div>
        )
    }
}




export default Tableaux 
