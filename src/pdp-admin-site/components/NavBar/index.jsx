import React, {Component} from 'react';
import logo from "../../assets/images/pdpLogo.png";
import Dashboard from "../../assets/icons/Dashboard.svg";
import Settings from "../../assets/icons/Settings.svg";

// import  from "../../assets/icons/"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: [
                {
                    id:1,
                    icon: Dashboard,
                    name: "Dashboard"
                },
                {
                    id:2,
                    icon: Settings,
                    name: "Sozlamalar"
                }
            ]
        }
    }

    render() {

        const active=()=>{
            // e.target.className="active"
            this.setState(
                {}
            )
        }

        return (
            <div>
                <div style={{margin: '28px'}}>
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div style={{marginTop:"62px"}}>
                        {
                            this.state.navs.map(({icon, name},index) => {
                                return (
                                    <div className="d-flex" style={{marginTop:"18px", marginBottom:"18px"}}>
                                        <img style={{marginRight:"17px"}} src={icon} alt={name}/>
                                        {/*<DashboardIcon/>*/}
                                        <span style={{fontFamily: "SF Pro Display",
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            fontSize: "16px"}}>
                                            {name}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;