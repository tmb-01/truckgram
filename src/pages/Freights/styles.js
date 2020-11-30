import styled from "styled-components"

import {ReactComponent as FilterIconImg} from "../../assets/icons/084-filter.svg";


export const Cards = styled.div`
border: 1px solid rgba(33,37,41,0.1);
width: 100%;
margin: auto;

`;

export const Profile=styled.div`
border: 1px solid rgba(33,37,41,0.1);
background-color: white;
padding-top: 15px;
border-bottom-left-radius: 50px;
border-bottom-right-radius: 50px;
`;

export const FreightRow=styled.div`
width: 100%;
margin: auto;
display: flex;  
`;

export const CoverSurFaceFreight=styled.div`
display: none;
width: 100%;
height: 100%;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: rgba(0,0,0,0.4);
z-index: 9;

@media only screen and (max-width: 992px){
display: ${props=>props.filterOpen?"block":"none"};
}

`;

export const FreightFilterCol=styled.div`
width: 30%;
padding: 0 10px;

@media only screen and (max-width: 992px){
height: 80vh;
width: 320px;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
margin: auto;
overflow: auto;
z-index:99999999;
display: ${props=>props.filterOpen?"block":"none"};
}

`;

export const FreightCol=styled.div`
width: 70%;
padding: 0 10px;

@media only screen and (max-width: 992px){
width: 80%;
margin:auto;
}


`;

export const FilterBox=styled.button`
display: none;
border: 0;
margin: 0 0 10px auto;
//background-color: transparent;
//display: block;
//font-size: 10px;
background-color: var(--main-color);
border-radius: 10px;
color: white;
padding: 5px 10px;
p{
display: flex;
margin: 0;
align-items: center;
}
&:focus{
outline: 0;
}

@media only screen and (max-width: 992px){
display: block;
}

`;

export const FilterIcon =styled(FilterIconImg)`
background-image: url("../../assets/icons/084-filter.svg");
margin-left: 5px;
width: 20px;
height: 18px;
text-align: right;
`;
