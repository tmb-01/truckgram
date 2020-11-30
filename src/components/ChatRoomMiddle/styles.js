import styled from "styled-components"
import TextareaAutosize from 'react-textarea-autosize';

import Microphone from "../../assets/icons/034-microphone-grey.svg"
import MicrophoneWhite from "../../assets/icons/034-microphone.svg"
import Clip from "../../assets/icons/016-attachment.svg"
import Send from "../../assets/icons/086-send.svg"


export const ChatRoomMiddleContainer = styled.div`
display: flex;
flex-flow: column;
flex-direction: column;

width: 50%;
background-color: #F7F9FA;
position: relative;
z-index: 1;
height: 100%;
overflow: hidden;
box-sizing: border-box;

@media only screen and (max-width: 1200px) {
width: 65%;
}

@media only screen and (max-width: 768px) {
width: 100%;
}
`;


export const ChatRoomMiddleHeader = styled.div`
width: 100%;
display: flex;
align-items: center;
min-height: 60px;
padding: 0 30px;
margin-top: 0;
//box-shadow: 0 0 10px #b0b0b0;
box-sizing: border-box;
border-bottom: 1px solid var(--main-color);
background-color: #EBEBEB;

@media only screen and (max-width: 768px) {
height: fit-content;
padding: 10px 30px 10px 20px;
}
`;

export const BackButton = styled.button`
display: none;
border: 0;
background-color: transparent;
align-self: center;
font-size: 20px;
margin-right: 15px;
padding: 10px 15px;
border-radius: 50%;
&:focus{
outline: 0;
}

&:active{
box-shadow: 0 0 10px lightgrey;
background-color: rgba(0,0,0,0.1);
}

@media only screen and (max-width: 768px) {
display: unset;
}

`;

export const HeaderFullNameButton=styled.button`
background-color: transparent;
border: 0;
display: none;
&:focus{
outline: 0;
}

font-size: 25px;
font-weight: 600;
align-self: center;
@media only screen and (max-width: 1200px) {
display: block;
}
@media only screen and (max-width: 768px) {
//display: block;
}
@media only screen and (max-width: 425px) {
font-size: 20px;
}

`;

export const HeaderFullName = styled.p`
font-size: 25px;
font-weight: 600;
align-self: center;
margin: 0;
@media only screen and (max-width: 1200px) {
display: none;
}
@media only screen and (max-width: 425px) {
font-size: 20px;
}
`;


// export const ChatRoomMiddleBodyAndFooter

export const ChatRoomMiddleBody = styled.div`
width: 100%;
//height: calc(100% - 106px);
overflow: auto;
padding: 10px 15px 10px 20px;
display: flex;
flex-direction: column;
flex-flow: column;
flex-grow: 1;
//justify-content:flex-end;

::-webkit-scrollbar {
  width: 5px;
  //visibility: hidden;
  //opacity: 0;
  //color: transparent;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px lightgrey; 
  border-radius: 10px;
  visibility: hidden;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.1); 
  border-radius: 10px;
  opacity: 0;
  visibility: hidden;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.2);
}


&:hover{
::-webkit-scrollbar-track {
visibility: visible;  
}
::-webkit-scrollbar-thumb{
visibility: visible;
}
}

@media only screen and (max-width: 768px) {
padding: 5px 5px;
::-webkit-scrollbar {
  width: 3px;
}

}

@media only screen and (max-width: 425px) {
padding: 5px 0;
}


`;


export const MessagesDate = styled.div`
padding: 5px 30px;
border-radius: 20px;
width: fit-content;
margin-left: auto;
margin-right: auto;
cursor: pointer;
margin-bottom: 5px;

&:hover{
background-color: #EBEBEB;
color: black;
}


`;

export const MessageBox = styled.div`
width: 70%;
display: flex;

@media only screen and (max-width: 768px) {
//display: none;
line-height: 1.3;
}

@media only screen and (max-width: 425px) {
width: 80%;
font-size: 15px !important;
}

`;


export const MyMessageBox = styled.div`
width: 70%;
display: flex;
margin-right: 0;
margin-left: auto;

@media only screen and (max-width: 768px) {
//display: none;
//font-size: 14px;
line-height: 1.3;
width: 75%;
}

@media (max-width: 425px) {
width: 80%;
//font-size: 15px !important;
//width: 500px;
}


`;

export const MessageBoxAvatarBox = styled.div`
width: 40px;
height: fit-content;
margin-bottom: 0;
margin-top: auto;


`;

export const MessageBoxTime = styled.small`
display: block;
text-align: right;
color: #a7a7a7;
font-size: 11px;
`;


export const MessageBoxAvatar = styled.div`
width: 40px;
height: 40px;
background-image: url(${props => props.avatar});
background-position: center;
background-size: cover;
border-radius: 50%;
`

export const MessageBoxTextBox = styled.div`
//border: 1px solid ;
//align:right;
width: fit-content;
background-color: #EBEBEB;
color:black;
padding: 15px 20px;
margin-left: 10px;
margin-bottom: 5px;
border-radius: 10px 10px 10px 0;
font-size: 16px;
@media only screen and (max-width: 425px) {
font-size: 15px;
}
`;

export const MyMessageBoxTextBox = styled.div`
//border: 1px solid ;
width: fit-content;
background-color: var(--main-color);
color:white;
padding: 15px 20px;
margin-right: 10px;
margin-bottom: 5px;
border-radius: 10px 10px 0 10px;
font-size: 16px;

@media only screen and (max-width: 425px) {
font-size: 15px;
}

`;


export const ChatRoomMiddleFooterBox = styled.div`
min-width:60px !important;
//flex-grow: 1;
//position: absolute;
//bottom: 0;
//right: 0;
//left: 0;
`;
export const ChatRoomMiddleFooter = styled.div`
width: 100%;
margin-top: auto;
margin-bottom: 0;
padding: 15px 20px;
display:flex;
background-color: #EBEBEB;
position: relative;
border-top: 1px solid var(--main-color);
`;

export const TextareaMessage = styled(TextareaAutosize)`
  //display: inline-block;
  //border: solid 1px #000;
  //min-height: 25px;
  //max-height: 100px;
  //width: 100%;
  border: 0;
  overflow: auto;
  
resize: none;
width: calc(100% - 90px);
//height: fit-content;
//grid-area: 1 / 2;

color: black;
background-color: transparent;

&::placeholder{
color: #a7a7a7;
}

&:focus{
outline: unset !important;
}


::-webkit-scrollbar {
  width: 5px;
  //visibility: hidden;
  //opacity: 0;
  //color: transparent;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px lightgrey; 
  border-radius: 10px;
  visibility: hidden;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.1); 
  border-radius: 10px;
  opacity: 0;
  visibility: hidden;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.2);
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

export const ChatBoxIcons = styled.div`
margin-bottom: 0;
display: flex;
align-self: end;
position: absolute;
right: 10px;
bottom: 4px;
cursor: pointer;
`;


export const ChatBoxIcon = styled.div`
padding: 10px;
border-radius: 50%;
background-color:  ${props => props.send ? "var(--main-color)" : "transparent"};
//margin-left:10px;
position: relative;
overflow: hidden;
z-index: 2;



&:before{
content: '';
background-color: ${props => props.microphone && props.recording ? "var(--main-color)" : "transparent"};
//padding: 10px;
z-index: -1;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
transition-duration: 0.3s;
}

&:active{

&:before{
${props => props.microphone && props.recording ? "background-color: var(--main-color);" : ""}
}

}

`;

export const IconImg = styled.div`

width: 25px;
height: 25px;
background-image: url( ${props => props.send ? Send : props.clip ? Clip : props.microphone ? Microphone : {MicrophoneWhite}} );
${props => props.send ? "transform: translate(-2px, 2px)" : ""};

&:active{

//&:hover{
${props => props.microphone ? "background-image: url(" + MicrophoneWhite + ")" : ''};
//}
}

  
`;
