import React, {Component} from 'react';
import {
    RegistrationContainer,
    RegistrationFormBox,
    RegistrationImg,
    RegistrationImgBox,
    RegistrationImgCover
} from "./styles";

import Businessman from "../../assets/images/businessman.jpg";
import Driver from "../../assets/images/driver.jpg";
import RegistrationForm from "../../components/RegistrationForm";


class Registration extends Component {
    constructor(props) {
        super(props);

        this.state={
            driver:true
        }

    }
    render() {
        return (
            <RegistrationContainer className={"bg-white"}>
                <RegistrationImgBox>
                <RegistrationImg src={this.state.driver?Driver:Businessman} alt={"businessman"}/>
                    <RegistrationImgCover className={"img-main-color-cover"}/>
                </RegistrationImgBox>
                {/*</RegistrationImg>*/}
                <RegistrationFormBox>
                    <RegistrationForm/>
                </RegistrationFormBox>

            </RegistrationContainer>
        );
    }
}

export default Registration;