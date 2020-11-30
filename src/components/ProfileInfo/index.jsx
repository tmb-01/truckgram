import React, {Component} from 'react';
import {ImgBg, ProfileBody, ProfileData, ProfileImg} from "./styles";

class ProfileInfo extends Component {
    render() {
        // const {profileImg, profileName} = this.props
        const {img,name,surname,job} = this.props.profileData;
        return (
            <ProfileBody>
                <ProfileImg className={"main-border-color"}>
                    <img src={img} alt=""/>
                </ProfileImg>
                <ImgBg/>
                <ProfileData
                    className={"main-bg-color"}
                >
                    <p>{name} {surname}</p>
                    <p>{job}</p>
                </ProfileData>
            </ProfileBody>
        );
    }
}
export default ProfileInfo;