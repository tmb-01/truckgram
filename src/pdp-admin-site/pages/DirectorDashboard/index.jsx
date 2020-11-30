import React, {Component} from 'react';
import NavBar from "../../components/NavBar";
import MainContainer from "../../containers/MainContainer";
import DirectorDashboardContent from "../../components/DirectorDashboardContent";

class DirectorDashboard extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <MainContainer>
                    <DirectorDashboardContent/>
                </MainContainer>
            </div>
        );
    }
}

export default DirectorDashboard;