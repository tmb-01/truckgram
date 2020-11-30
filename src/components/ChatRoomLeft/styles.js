import styled from "styled-components"


export const CoverSurFace = styled.div`

@media only screen and (max-width: 1200px) {
${props => props.senderUserInfoClicked ? "position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%;  height: 100%;  background-color: rgba(0,0,0,0.5); z-index: 3;" : ""}
}

@media only screen and (max-width: 768px) {
${props => props.listOfMessagesSelected ? "position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%;  height: 100%;  background-color: rgba(0,0,0,0.5); z-index: 2;" : ""}
//position: absolute;
}`;
export const ChatRoomLeftBody = styled.div`
width: 25%;
height: 100%;
background-color: var(--main-color);
box-sizing: border-box;
z-index: 2;

transition-duration: 0.1s;

@media only screen and (max-width: 1200px) {
width: 35%;
}

@media only screen and (max-width: 768px) {
position: absolute;
top: 0;
left: 0;
${props => props.listMessagesSelected ?
    "width: 400px; overflow:unset; position: absolute; top: 0; left: 0;" :
    "width: 0%; overflow:hidden"}
}

@media only screen and (max-width: 425px) {
width:${props => props.listMessagesSelected ? "100%" : ""}
}
`
;

export const ChatRoomSearchInputBox = styled.div
    `
width: 100%;
height: fit-content !important;
padding: 10px 20px;
box-sizing: border-box;
`
;


export const ChatRoomSearchInput = styled.input
    `
border: 0;
width: 100%;
padding: 10px 15px;
border-radius: 5px;
background-color: rgba(255,255,255,0.22);
color: white;

&::placeholder{
color: rgba(255,255,255,0.7);
}

&:focus{
outline: 0;
background-color: white;
color: black;

&::placeholder{
color: #a7a7a7;
}

}
`
;


export const ChatRoomLeftListContainer = styled.div
    `
width: 100%;
height: calc(100% - 60px);
margin-bottom: 0;
overflow: auto;


::-webkit-scrollbar {
width: 5px;
    //visibility: hidden;
    //opacity: 0;
    //color: transparent;
}

    /* Track */
::-webkit-scrollbar-track {
box-shadow: inset 0 0 5px grey;
border-radius: 10px;
visibility: hidden;
}

    /* Handle */
::-webkit-scrollbar-thumb {
background: rgba(255,255,255,0.3);
border-radius: 10px;
opacity: 0;
visibility: hidden;
}

    /* Handle on hover */
::-webkit-scrollbar-thumb:hover {
background: rgba(255,255,255,0.5);
}


&:hover{
::-webkit-scrollbar-track {
visibility: visible;
}
::-webkit-scrollbar-thumb{
visibility: visible;
}
}

`;

// export const ChatRoomLeftListBox=styled.div`
// width: 100%;
// `;

export const ChatRoomLeftList = styled.div`

width: 100%;
padding: 10px 20px;
box-sizing: border-box;
display: flex;
position: relative;
cursor: pointer;
-webkit-user-drag: element;
user-select: none;
background-color: 
${props => props.selected ? "rgba(255, 255, 255, 0.25)" : "transparent"};
//background-color: #f0f0f0;

&:hover{
background-color: rgba(255,255,255,0.25);
}


`;
export const ChatRoomLeftListAvatar = styled.div`

width: 50px !important;
height: 50px !important;
position: relative;
border-radius: 50%;
overflow: hidden;
//background-image: url(${props => props.avatar});
//background-position: center;
//background-size: cover;
img{
width: 100%;
height: auto;
}

@media only screen and (max-width: 900px) {
width: 40px!important;
height: 40px!important;
}


`;

export const ListFullNameAndLastMessage = styled.div`

width: 83%;
padding: 0 50px 0 10px;
color: white;
margin: auto 0;

`;

export const ChatRoomLeftListFullName = styled.p`

width: 100%;
font-size: 16px;
font-weight: 600;
margin: 0;
@media only screen and (max-width: 900px) {
font-size: 14px;
}

`;

export const ChatRoomLeftListLastMessage = styled.p`

width: 100%;
margin: 0;
@media only screen and (max-width: 900px) {
font-size: 12px;
}

`;

export const ChatRoomLeftListNumberOfUnreadMessage = styled.span`

width: fit-content;
height: fit-content;
border-radius: 25px;
padding:0 6px;
background-color: white;
position: absolute;
top: 0;
right: 15px;
bottom: 0;
//left: 0;
margin: auto;
color: var(--main-color);
@media only screen and (max-width: 900px) {
font-size: 12px;
}

`;


