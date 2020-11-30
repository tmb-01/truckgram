import React, {Component, useContext, useEffect, useState} from 'react';
import {ChangeLang, Logo, MenuIcon, Nav, NavBar, NavBarContent, Navs, NavsBox} from "./styles";

import Search from "../../assets/icons/search-solid.svg";
import Freight from "../../assets/icons/dolly-solid.svg";
import Message from "../../assets/icons/comment-regular.svg"
import Profile from "../../assets/icons/user-circle-regular.svg";

import UzbekLang from "../../languages/uzbek/navbar.json"
import RussianLang from "../../languages/russian/navbar.json"
import {LangContext, SetLangContext} from "../../App";

import {Link} from "react-router-dom";


function Navbar({opacity}) {

    const isLangUz = useContext(LangContext);
    const setIsLangUz = useContext(SetLangContext);

    const lang = isLangUz ? UzbekLang : RussianLang;

    const [menuIconClicked, setMenuIconClicked] = useState(false);

    return (
        <NavBar className="main-bg-color">
            <NavBarContent>
                <Logo>Truckgram</Logo>

                <NavsBox>
                    <MenuIcon>
                        <button onClick={() => setMenuIconClicked(!menuIconClicked)} className={"fas fa-".concat(menuIconClicked?"times":"bars")}/>
                    </MenuIcon>
                    <Navs menuIconClicked={menuIconClicked}>
                        <Link to={"/freight"} onClick={() => setMenuIconClicked(!menuIconClicked)}>
                            <Nav>
                                <i className="fas fa-dolly"/>
                                <span>{lang.freight}</span>
                            </Nav>
                        </Link>
                        <Link to={"/chat-room"} onClick={() => setMenuIconClicked(!menuIconClicked)}>
                            <Nav>
                                <i className="far fa-comment"/>
                                <span>{lang.messages}</span>
                            </Nav>
                        </Link>
                        <Link to={"/profile"} onClick={() => setMenuIconClicked(!menuIconClicked)}>
                            <Nav>
                                <i className="far fa-user-circle"/>
                                <span>{lang.profile}</span>
                            </Nav>
                        </Link>
                    </Navs>
                </NavsBox>

                <ChangeLang onClick={() => setIsLangUz(!isLangUz)}>
                    <span style={isLangUz ? {fontWeight: 1000, color: "white"} : {fontWeight: 100, color: "lightgrey"}}>
                        Uz
                    </span>
                    <span> | </span>
                    <span style={isLangUz ? {fontWeight: 100, color: "lightgrey"} : {fontWeight: 1000, color: "white"}}>
                        Ru
                    </span>
                </ChangeLang>

            </NavBarContent>
        </NavBar>
    );
    // }
}

export default Navbar;