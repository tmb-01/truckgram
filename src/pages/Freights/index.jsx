import React, {Component, useState} from 'react';
// import Container from "reactstrap/es/Container";
// import Row from "reactstrap/es/Row";
// import Col from "reactstrap/es/Col";

import {Container, Row, Col} from 'reactstrap';
import FreightCard from "../../components/FreightCard";
import Avatar from "../../assets/images/avatar.jpg"
import {
    Cards,
    CoverSurFaceFreight,
    FilterBox,
    FilterIcon,
    FreightCol,
    FreightFilterCol,
    FreightRow,
    Profile
} from "./styles";


import UzbFlag from "../../assets/images/Flag_of_Uzbekistan.png"
import RuFlag from "../../assets/images/Flag_of_Russia.png"
import KazFlag from "../../assets/images/Flag_of_Kazahstan.png"

// import ProfileInfo from "../../components/ProfileInfo";

import ProfileImgs from "../../assets/images/avatar.jpg"
import ProfileInfo from "../../components/ProfileInfo";
import FreightSearch from "../../components/FreightSearch";


import Example2 from "../../components/FreightSearch/index2";
import Registration from "../Registration";


function Freight() {

    const [cardInfo, setCardInfo] = useState([
        {
            avatar: Avatar,
            firstName: "Maraim",
            lastName: "Tukhtasunov",
            bookmark: true,
            nameOfFreight: "Kartoshka",
            currency: "USD",
            price: "10 000",
            from: {
                cityName: "Tashkent",
                flag: UzbFlag
            },
            to: {
                cityName: "Moskva",
                flag: RuFlag
            },
            // from={this.state.from},
            // to={this.state.to},
            weight: 18,
            volume: 82,
            typeOfVehicle: "Tent",
            amountOfVeicle: 2,
            dateOfAction: "Nov 3",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea eius nemo officia" +
                "optio quisquam repellat unde veritatis? Alias architecto, blanditiis delectus laboriosam" +
                "praesentium quae tenetur voluptas voluptatem? Illum, vel.",
            dateOfPost: "Oct 23",
        },
        {
            avatar: Avatar,
            firstName: "Abbos",
            lastName: "Karimov",
            bookmark: false,
            nameOfFreight: "Pres",
            currency: "RUB",
            price: "100 000",
            from: {
                cityName: "Bukhara",
                flag: UzbFlag
            },
            to: {
                cityName: "Almata",
                flag: KazFlag
            },
            // from={this.state.from},
            // to={this.state.to},
            weight: 21,
            volume: 102,
            typeOfVehicle: "Ref",
            amountOfVeicle: 1,
            dateOfAction: "Nov 5",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea eius nemo officia" +
                "optio quisquam repellat unde veritatis? Alias architecto, blanditiis delectus laboriosam" +
                "praesentium quae tenetur voluptas voluptatem? Illum, vel.",
            dateOfPost: "Oct 6",
        },
        {
            avatar: Avatar,
            firstName: "Daler",
            lastName: "Nazarov",
            bookmark: false,
            nameOfFreight: "Piyoz",
            currency: "UZS",
            price: "10 000 000",
            from: {
                cityName: "Samarqand",
                flag: UzbFlag
            },
            to: {
                cityName: "Vladivastok",
                flag: RuFlag
            },
            // from={this.state.from},
            // to={this.state.to},
            weight: 21,
            volume: 102,
            typeOfVehicle: "Ref",
            amountOfVeicle: 3,
            dateOfAction: "Nov 9",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea eius nemo officia" +
                "optio quisquam repellat unde veritatis? Alias architecto, blanditiis delectus laboriosam" +
                "praesentium quae tenetur voluptas voluptatem? Illum, vel.",
            dateOfPost: "Oct 30",
        },
    ]);

    const [filterOpen,setFilterOpen]=useState(false)

    // const {profileImg, profileName} = this.state.profileInfo
    return (
        <Container className="bg-transparent">

            <FreightRow className={"py-4"}>
                <CoverSurFaceFreight
                    filterOpen={filterOpen}
                    onClick={() => {
                        setFilterOpen(false)
                    }}
                />
                <FreightFilterCol filterOpen={filterOpen}>
                    <FreightSearch setFilterOpen={setFilterOpen}/>
                </FreightFilterCol>
                <FreightCol>
                    <FilterBox onClick={()=>setFilterOpen(true)}>
                        <p>
                            Filter
                            <FilterIcon/>
                        </p>
                    </FilterBox>
                    <Cards className={"bg-white"}>
                        {
                            cardInfo.map((data, index) =>
                                <FreightCard key={index} cardInfo={data}/>)
                        }
                    </Cards>
                </FreightCol>
                {/*<Col md={2} style={{position:"relative"}}>*/}
                {/*    <Profile>*/}
                {/*        <ProfileInfo profileData={this.state.profileInfo}/>*/}
                {/*    </Profile>*/}
                {/*</Col>*/}

            </FreightRow>

            {/*<Registration/>*/}

        </Container>
    );
}

export default Freight;