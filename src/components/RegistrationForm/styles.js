import styled from "styled-components";

const marginBottom="10px"


export const AllFormBox=styled.div`
//height: 100px;
//position: relative;

`;


export const FormMainBox=styled.div`
width: 100%;
height: 100%;
padding: 20px;
margin: auto;
display: flex;
overflow: hidden;
`;

export const FormBox=styled.div`
width: fit-content;
//height: 170px;
display: block;
margin: auto;
`;


export const Logo = styled.div`
margin:0 auto 20px;
width: fit-content;
font-size: 30px;
`;

export const Form=styled.form`
width: fit-content;
margin: auto;
//position: absolute;
//top: 0;
`;


export const StyledInputBox=styled.div`
width: ${props=>props.width};
margin-bottom: ${marginBottom};
display: flex;
  
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
`;

export const BeforeInput=styled.div`
padding: 10px 0 10px 15px;
`;

export const StyledInput=styled.input`
//border: 1px solid white;
border: 0;
padding: 10px 15px;
width: 100%;
&:focus{
outline: 0;
}
`;

export const Button=styled.button`
color: white;
border: 0;
outline: 0;
padding: 10px 25px;
margin: auto;
display: block;
`;

export const Sign=styled.p`
text-align: center;
position: absolute;
bottom: 15px;
right: 0;
left: 0;
`;

export const GoBack=styled.p`
cursor: pointer;
width: fit-content;
text-align: center;
margin: auto;
`;