import styled from "styled-components"
import arrow_color from "../../assets/icons/arrow-down-sign-to-navigate-color.svg"
import arrow_no_color from "../../assets/icons/arrow-down-sign-to-navigate-no-color.svg"
import {StyledInput, StyledInputBox} from "../RegistrationForm/styles";


export const FormBox = styled.div`
width:100%;
background-color: white;
padding: 15px 20px;

@media only screen and (max-width: 590px){
padding: 10px 15px;
}


`;


export const Form = styled.form`
padding: 0 40px 20px;
@media only screen and (max-width: 590px){
padding: 0 10px 20px;
}
`;


export const InputBox = styled.div`
.arrow{
font-size: 20px;
margin: 0;
@media only screen and (max-width: 590px){
font-size: 15px;
}}

@media only screen and (max-width: 320px){
.arrow{
display: none !important;
}
.d-flex.justify-content-between{
flex-direction: column;
.direction-from{
margin-bottom: 0;
}
.input-box{
width:100%;
.color-transparent{
display: none;
}
}
}
}

`;

export const TitleOfInput = styled.p`
font-size: 15px;
margin: 0;
`;


export const MyStyledInputBox = styled(StyledInputBox)`



`
export const MyStyledInput = styled(StyledInput)`

@media only screen and (max-width: 425px){
padding: 5px 10px;
}
`;


export const SelectDropdown = styled.select`
height: 42px;
background-image: url(${arrow_no_color});
appearance: none;
-moz-appearance: none;
-webkit-appearance: none;
padding: 10px 15px;
width: 100%;
max-width: 100%;
box-sizing: border-box;
margin: 0;
border: 1px solid #aaa;
box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
border-radius: .5em;
background-repeat: no-repeat, repeat;
background-position: right .7em top 50%, 0 0;
background-size: 1.0em auto, 100%;

&.currency{
height: 41px;

}

&:focus{
outline: 0;
background-image: url(${arrow_color});
}

&:hover{
background-image: url(${arrow_color});
}

@media only screen and (max-width: 425px){
height: 32px;
padding: 5px 10px;
}
&.currency{
@media only screen and (max-width: 425px){
height: 31px;
padding: 5px 10px;
}
`;


export const Textarea = styled.textarea`
resize: none !important;
overflow: auto;
height: 200px;
padding: 10px 15px;

@media only screen and (max-width: 375px){
height: 150px;
}

`;

export const Button = styled.button`
color: white;
background-color: var(--main-color);
padding: 5px 25px;
font-size: 16px;
`;