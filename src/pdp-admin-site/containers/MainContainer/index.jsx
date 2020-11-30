import React, {Component} from 'react';
import DirectorDashboard from "../../pages/DirectorDashboard";
import {ReactComponent as User} from "../../assets/icons/User.svg"
import {ReactComponent as Bell} from "../../assets/icons/Bell.svg"
import "./main.css"

class MainContainer extends Component {
    render() {
        return (
            <div style={{padding: "40,55"}}>
                <div style={{align: "right"}}>
                    <a href="/" className="nav">
                        <span>Odilbek Mirzayev</span>
                        <span><User class="icon"/></span>
                    </a>
                    <a href="/" className="nav">
                        <Bell class="icon"/>
                    </a>

                </div>
                <DirectorDashboard/>
            </div>
        );
    }
}

export default MainContainer;