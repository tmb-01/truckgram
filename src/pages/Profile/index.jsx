import React, {Component, useContext, useState} from 'react';
import {
    ContactBox, ContactEdit, ContactEditBox, ContactIcon, ContactInput, ContactInputSave, ContactName, Label,
    ProfilePage,
    ProfilePageAvatar, ProfilePageAvatarBox,
    ProfilePageContactInfo,
    ProfilePageFullName, ProfilePageFullNameBox,
    ProfilePageUserInfo
} from "./styles";
import Avatar from "../../assets/images/avatar.jpg"

import UzbekLang from "../../languages/uzbek/profilePage.json"
import RussainLang from "../../languages/russian/profilePage.json"
import {LangContext} from "../../App";
import {SelectDropdown} from "../../components/FormPostFreight/styles";


function Profile() {



    const isLangUz = useContext(LangContext)

    const lang = isLangUz ? UzbekLang : RussainLang;

    const [editImage, setEditImage] = useState(false)
    const [editFullName, setEditFullName] = useState(false)
    const [editOccupation, setEditOccupation] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [editPhoneNumber, setEditPhoneNumber] = useState(false)
    const [editTelegram, setEditTelegram] = useState(false)

    const [occupation, setOccupation] = useState("")

    const [userInfo, setUserInfo] = useState({
        avatar: Avatar,
        name: "Maraim",
        surName: "Tukhtasunov",
        occupation: "driver",
        email: "maraimtuxtasunov@gmail.com",
        phoneNumber: "+998 (94) 410-76-44",
        telegram: "@tmb_01"
    })


    return (
        <ProfilePage>
            <ProfilePageUserInfo>

                <ProfilePageAvatarBox>
                    <ProfilePageAvatar>
                        <img src={Avatar} alt=""/>
                        <Label htmlFor="avatar" className={"fa-edit far"}/>

                        <input type="file"
                               className={"d-none"}
                               id="avatar" name="avatar"
                               accept="image/png, image/jpeg"/>
                    </ProfilePageAvatar>
                </ProfilePageAvatarBox>
                <ProfilePageFullNameBox>
                    <ProfilePageFullName>
                        <ContactEdit className={"fa-edit ".concat(editFullName ? "fas" : "far")}
                                     // style={{fontSize: "20px"}}
                                     onClick={() => setEditFullName(true)}/>
                        {editFullName ?
                            <ContactEditBox>
                                <ContactInput type={"text"} defaultValue={userInfo.name}/>
                                <ContactInput type={"text"} defaultValue={userInfo.surName}
                                              style={{borderLeft: "1px solid var(--main-color)"}}/>
                                <ContactInputSave onClick={() => setEditFullName(false)}>{lang.save}</ContactInputSave>
                            </ContactEditBox> :
                            <h1>{userInfo.name} {userInfo.surName}</h1>}
                    </ProfilePageFullName>
                    <ProfilePageFullName>
                        <ContactEdit className={"fa-edit ".concat(editOccupation ? "fas" : "far")}
                                     // style={{fontSize: "20px"}}
                                     onClick={() => setEditOccupation(true)}/>
                        {editOccupation ?
                            <ContactEditBox>
                                {/*<ContactInput type={"text"} defaultValue={userInfo.occupation}/>*/}
                                <SelectDropdown name="occupation" id="occupation"
                                                style={{border: 0, width: "200px"}}
                                                onChange={(e) => setOccupation(e.target.value)}
                                                value={occupation}
                                >
                                    <option value="driver">{lang.driver}</option>
                                    <option value="businessman">{lang.businessman}</option>
                                </SelectDropdown>
                                <ContactInputSave
                                    onClick={(e) => {
                                        setEditOccupation(false)
                                        setUserInfo(prevState => ({
                                            ...prevState,
                                            occupation: occupation
                                        }))
                                    }}>{lang.save}</ContactInputSave>
                            </ContactEditBox> :
                            <h3>{userInfo.occupation === "driver" ? lang.driver : lang.businessman}</h3>}
                    </ProfilePageFullName>
                </ProfilePageFullNameBox>
            </ProfilePageUserInfo>
            <ProfilePageContactInfo>
                <ContactBox>
                    <ContactEdit className={"fa-edit ".concat(editEmail ? "fas" : "far")}
                                 onClick={() => setEditEmail(true)}/>
                    <ContactIcon className="far fa-envelope"/>
                    {editEmail ?
                        <ContactEditBox>
                            <ContactInput type={"email"} defaultValue={userInfo.email}/>
                            <ContactInputSave onClick={() => setEditEmail(false)}>{lang.save}</ContactInputSave>
                        </ContactEditBox> : <ContactName>{userInfo.email}</ContactName>
                    }
                </ContactBox>
                <ContactBox>
                    <ContactEdit className={"fa-edit ".concat(editPhoneNumber ? "fas" : "far")}
                                 onClick={() => setEditPhoneNumber(true)}/>
                    <ContactIcon className="fas fa-phone-alt"/>
                    {editPhoneNumber ?
                        <ContactEditBox>
                            <ContactInput type={"tel"} defaultValue={userInfo.phoneNumber}/>
                            <ContactInputSave onClick={() => setEditPhoneNumber(false)}>{lang.save}</ContactInputSave>
                        </ContactEditBox> : <ContactName>{userInfo.phoneNumber}</ContactName>
                    }

                </ContactBox>
                <ContactBox>
                    <ContactEdit className={"fa-edit ".concat(editTelegram ? "fas" : "far")}
                                 onClick={() => setEditTelegram(true)}/>
                    <ContactIcon className="fab fa-telegram"/>
                    {editTelegram ?
                        <ContactEditBox>
                            <ContactInput type={"text"} defaultValue={userInfo.telegram}/>
                            <ContactInputSave onClick={() => setEditTelegram(false)}>{lang.save}</ContactInputSave>
                        </ContactEditBox> : <ContactName>{userInfo.telegram}</ContactName>
                    }

                </ContactBox>
            </ProfilePageContactInfo>

        </ProfilePage>
    );
}

export default Profile;