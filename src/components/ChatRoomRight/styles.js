import styled from "styled-components"

export const ChatRoomRightBody=styled.div`
position: relative;
width: 25%;
background-color: #fff;
z-index: 3;
padding: 20px 20px;
box-shadow: 0 0 5px #b0b0b0;
overflow: auto;
@media only screen and (max-width: 1200px) {
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 300px;
height:fit-content;
box-sizing: border-box;
margin: auto;
//align-self: center;
//justify-content: center;
display: ${props=>props.senderUserInfoClicked?"block":"none"};
//width: 20%;
}
@media only screen and (max-width: 768px) {
//display: none;
//width: 20%;
}

`;

export const CloseSenderInfo=styled.button`
display: none;
@media only screen and (max-width: 1200px) {
display: block;
font-size: 20px;
line-height: 0.5;
padding: 15px;
position: absolute;
top: 0;
right: 0;



&:focus{
outline: 0;
}
`;

export const AvatarContainer=styled.div`
width: 200px;
margin: 20px auto;


`;


export const Avatar=styled.div`
width:200px;
height: 200px;
//height: fit-content;
background-image: url(${props=> props.avatar});
background-position: center;
background-size: cover;
border-radius: 50%;

img{
width: 100%;
height: auto;
border-radius: 50%;
}
`;

export const AvatarInfoBox=styled.div`
margin-top: 20px;

`;

export const AvatarFullName=styled.div`
text-align: center;
font-size: 20px;
font-weight: 600;
`;

export const AvatarOccupation=styled.div`
text-align: center;
font-size: 15px;
color: #757575;
`;

export const AvatarContactInfo=styled.div`
//display: flex;
color: #757575;

`;

export const Contacts=styled.p`
display: flex;
font-size: 15px;
`;

export const ContactIcon=styled.div`
width:20px;
height: fit-content;
margin-right: 10px;

i{
font-size: 20px;
display: block;
align-self: center;
margin: auto;
text-align: center;
}

`;



