import React, { Component, Fragment } from "react"

import { TableauxArray1, TableauxArray2, TableauxArray3 } from "./ImagesContainer"

class Tableaux extends Component {

    constructor(props) {
        super(props)
        this.state = {
            TheTableauxToShow: TableauxArray1[0].image,
            TheTitleToShow: TableauxArray1[0].title,
            TheDescriptionToShow: TableauxArray1[0].description,
            AllTableauxInRow1: [],
            AllTableauxInRow2: [],
            AllTableauxInRow3: [],
        }
        this.handelClose = this.handelClose.bind(this)
        this.sowOneTableau = this.sowOneTableau.bind(this)
    }

    componentDidMount() {
        let ArrayContainer1 = [];
        let ArrayContainer2 = [];
        let ArrayContainer3 = [];
        TableauxArray1.map((tableau) => {
            ArrayContainer1.push(<OneTableaux
                onSowOneTableau={this.sowOneTableau}
                TableauxUrl={tableau.image}
                Title={tableau.title}
                Description={tableau.description}
            />)
        })
        this.setState({
            AllTableauxInRow1: ArrayContainer1,
        })
        // ########################################
        TableauxArray2.map((tableau) => {
            ArrayContainer2.push(<OneTableaux
                onSowOneTableau={this.sowOneTableau}
                TableauxUrl={tableau.image}
                Title={tableau.title}
                Description={tableau.description} />)
        })
        this.setState({
            AllTableauxInRow2: ArrayContainer2,
        })
        // ########################################
        TableauxArray3.map((tableau) => {
            ArrayContainer3.push(<OneTableaux
                onSowOneTableau={this.sowOneTableau}
                TableauxUrl={tableau.image}
                Title={tableau.title}
                Description={tableau.description} />)
        })
        this.setState({
            AllTableauxInRow3: ArrayContainer3,
        })
    }

    handelClose() {
        document.querySelector(".tableaux-presentation-container").style.display = "none";
    }

    sowOneTableau(childData) {
        this.setState({
            TheTableauxToShow: childData.TableauxUrl,
            TheDescriptionToShow: childData.Description,
            TheTitleToShow: childData.Title
        })
        document.querySelector(".tableaux-presentation-container").style.display = "flex";
        document.querySelector(".the-tableaux").scrollTop = 0;
    }

    render() {
        return (
            <Fragment>
                <div id="tableaux-container">
                    <div className="tableaux-presentation-container">
                        <div className="close-the-tableaux" onClick={this.handelClose}
                        >
                        </div>
                        <div onScroll={(e) => console.log(e.target.scrollTop)} className="the-tableaux">
                            <h2> {this.state.TheTitleToShow}</h2>
                            <img src={this.state.TheTableauxToShow} />
                            <div className="the-tableaux-description">
                                <p>
                                    {this.state.TheDescriptionToShow}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tableaux-grid">
                        <div className="tableaux-rows">
                            {this.state.AllTableauxInRow1}
                            <div className='tableaux-rows-bottom'>
                            </div>
                        </div>
                        <div className="tableaux-rows">
                            {this.state.AllTableauxInRow2}
                            <div className='tableaux-rows-bottom'>
                            </div>
                        </div>
                        <div className="tableaux-rows">
                            {this.state.AllTableauxInRow3}
                            <div className='tableaux-rows-bottom'>
                            </div>
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
        this.handelSow = this.handelSow.bind(this)
    }
    handelSow() {
        this.props.onSowOneTableau({
            TableauxUrl: this.props.TableauxUrl,
            Description: this.props.Description,
            Title: this.props.Title
        })
    }

    render() {
        return (
            <div className="tableaux-container"
                onClick={this.handelSow}>
                <h3>
                    {this.props.Title}
                </h3>
                <img src={this.props.TableauxUrl} alt="" width="100%" />
                <p className="tableaux-description">
                    {this.props.Description}
                </p>
            </div>
        )
    }
}




export default Tableaux
