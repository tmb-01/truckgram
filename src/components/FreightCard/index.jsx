import React, {Component} from 'react';
import {
    Card,
    CardBody,
    CardBodyDateOfAction,
    CardBodyDescriptionOfFreight,
    CardBodyDirectionOfFreight,
    CardBodyInfo,
    CardBodyNameOfFreight,
    CardBodyPriceOfFreight,
    CardBodySizeOfFreight,
    CardBodyTypeAndAmountOfVehicle,
    CardBodyVolumeOfFreight,
    CardBodyWeightOfFreight,
    CardBookmark,
    CardFooter,
    CardHeader,
    CardOwnerFullName,
    CardOwnerImg,
    CardOwnerInfo,
} from "./styles";

import Track from "../../assets/icons/track.svg"
import MyMap from "../FreightSearch/index2";


// import Avatar from "../../assets/images/avatar.jpg"

class FreightCard extends Component {

    constructor() {
        super();
        this.state = {
            color: ""
        }
    }

    // constructor(props) {
    //     super(props)
    //
    //
    // }

    render() {
        const {avatar, firstName, lastName, bookmark, nameOfFreight, currency, price, from, to, weight, volume, typeOfVehicle, amountOfVeicle, dateOfAction, description, dateOfPost} = this.props.cardInfo

        const changeColorOn = () => {
            this.setState({
                color: "main-color"
            })
        }
        const changeColorOff = () => {
            this.setState({
                color: ""
            })
        }

        return (
            <Card onMouseOut={changeColorOff} onMouseOver={changeColorOn}>
                <CardHeader>
                    <CardBodyNameOfFreight>
                        <p className={"mb-0 " + this.state.color}>{nameOfFreight}</p>
                    </CardBodyNameOfFreight>
                    {/*<CardOwnerInfo>*/}
                    {/*<CardOwnerImg className={"main-border-color"}>*/}
                    {/*    <img src={avatar} alt="avatar"/>*/}
                    {/*</CardOwnerImg>*/}
                    {/*<CardOwnerFullName>*/}
                    {/*    <p className={"mb-0"}>{firstName + " " + lastName}</p>*/}
                    {/*</CardOwnerFullName>*/}
                    {/*</CardOwnerInfo>*/}
                    <CardBookmark className={"main-color"}>

                        <button>
                            <i className="far fa-thumbs-down main-color" style={{"transform": "rotateY(180deg)"}}/>
                        </button>
                        <button>
                            {bookmark ? <i className="fas fa-bookmark main-color"/> :
                                <i className="far fa-bookmark main-color"/>}
                        </button>
                    </CardBookmark>
                </CardHeader>
                <CardBody>
                    {/*<CardBodyNameOfFreight>*/}
                    {/*    <p className={"mb-0"}>{nameOfFreight}</p>*/}
                    {/*</CardBodyNameOfFreight>*/}
                    <CardBodyDirectionOfFreight>
                        <p className={"mb-0"}>
                            <div>
                                <img src={from.flag} alt=""/>
                                <div>{from.cityName}</div>
                            </div>
                            <div className={"mx-2"}>-></div>
                            <div>
                                <img src={to.flag} alt=""/>
                                <div>{to.cityName}</div>
                            </div>

                        </p>
                        {/*<div id={"map"} className={"map"}>*/}
                        {/*    <i className="fas fa-caret-up"/>*/}
                        {/*    <div id={"map"} className={"map-page"}>*/}
                        {/*        <MyMap/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </CardBodyDirectionOfFreight>
                    <CardBodyInfo>
                        <CardBodyPriceOfFreight>
                            <p className={"mb-0  mr-4"}>
                                {/*<div><i className="far fa-money-bill-alt main-color"/></div>*/}
                                <div className={"currency main-bg-color"}>{currency}</div>
                                <div>{price}</div>

                            </p>
                        </CardBodyPriceOfFreight>
                        <CardBodyWeightOfFreight>
                            <p className={"mb-0 mr-4"}>
                                <i className="fas fa-weight-hanging main-color"/>
                                {/*<i className="fas fa-balance-scale main-color"/>*/}
                                {weight + "t"}
                            </p>
                        </CardBodyWeightOfFreight>
                        <CardBodyVolumeOfFreight>
                            <p className={"mb-0 mr-4"}>
                                <i className="fas fa-ruler main-color" style={{"transform": "rotateY(180deg)"}}/>
                                {volume + "m"}<sup>3</sup>
                            </p>
                        </CardBodyVolumeOfFreight>
                        <CardBodyDateOfAction>
                            <p className={"mb-0 mr-4"}>
                                <i className="far fa-calendar-alt  main-color"/>
                                {dateOfAction}
                            </p>
                        </CardBodyDateOfAction>
                        <CardBodyTypeAndAmountOfVehicle>
                            <p className={"mb-0"}>

                                <div>
                                    <i className="fas fa-truck main-color"/>
                                </div>
                                <div>
                                    {typeOfVehicle}
                                </div>
                                <div className={"main-bg-color"}>
                                    {amountOfVeicle}
                                </div>
                            </p>
                        </CardBodyTypeAndAmountOfVehicle>
                    </CardBodyInfo>
                    <CardBodyDescriptionOfFreight>
                        <p className={"mb-0"}>
                            {description}
                        </p>
                    </CardBodyDescriptionOfFreight>
                </CardBody>
                <CardFooter>
                    <p className={"mb-0"}>{dateOfPost}</p>
                </CardFooter>
                <hr className={"mb-0"}/>
            </Card>
        );
    }
}

export default FreightCard;