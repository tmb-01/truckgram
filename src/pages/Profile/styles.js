import styled from "styled-components"

export const ProfilePage = styled.div`
width:760px;
margin: 20px auto;

@media only screen and (max-width: 768px){
width: 95%;
margin: 20px auto;
}

@media only screen and (max-width: 375px){
//width: 375px;
//min-width: 375px;
//max-width: 375px;
}

`;

export const ProfilePageUserInfo = styled.div`
width: 100%;
padding: 40px;
display: flex;
align-items: center;
background-color: white;
//justify-content: center;

@media only screen and (max-width: 768px){
flex-direction: column;

}

`;

export const ProfilePageAvatarBox = styled.div`
width: fit-content;
height: fit-content;
position:relative;
`;

export const ProfilePageAvatar = styled.div`
width: 150px;
height: 150px;
overflow: hidden;
border-radius: 50%;
margin: 0;
//position: relative;
//flex-grow: 1;
img{
width: 100%;
}

`;

export const Label=styled.label`
font-size: 20px;
border-radius: 50%;
margin:0;
padding: 6px 4px 9px 11px;
background-color: white;
border: 1px solid var(--main-color);
position: absolute; 
right: 0;
bottom: 0;
transform: translate(10px 10px);
&::before{
}
`;


export const ProfilePageFullNameBox=styled.div`
flex-grow: 2;
text-align: center;

button{
font-size: 20px;
}

@media only screen and (max-width: 425px){
h1{
font-size: 30px;
margin: 0;
}
h3{
font-size: 20px;
margin: 0;
}
button{
font-size: 15px;
}
}
`;

export const ProfilePageFullName=styled.div`
width: fit-content;
margin: 10px auto;
display: flex;

h1{
width: fit-content;
margin: 0;
line-height: 30px;
}

`;


export const ProfilePageContactInfo=styled.div`
background-color: white;
margin-top: 20px;
padding: 40px;

@media only screen and (max-width: 425px){
padding: 20px;
}

`;

export const ContactBox=styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;

`;

export const ContactIcon=styled.div`
font-size: 25px;
color: var(--main-color);
margin: 0 15px 0 10px;

@media only screen and (max-width: 425px){
font-size: 20px;
}


`;

export const ContactEdit=styled.button`
border: 0;
background-color: transparent;
color: var(--main-color);

&:focus{
outline: 0;
}

@media only screen and (max-width: 425px){
//&::before{
font-size: 15px;
//}
}

`;

export const ContactName=styled.div`
padding: 6px 11px;

@media only screen and (max-width: 425px){
font-size: 12px;
}
`;

export const ContactEditBox=styled.div`
display: flex;
border: 1px solid var(--main-color);
border-radius: 5px;
overflow: hidden;

&:focus-within{
outline: 1px auto var(--main-color);
}

@media only screen and (max-width: 768px){
flex-direction: column;
}

`;

export const ContactInput=styled.input`
width: fit-content;
padding: 5px 10px;
border: 0;

&:focus{
outline: 0;
}

`;

export const ContactInputSave=styled.button`
background-color: var(--main-color);
color: white;
border: 0;
padding: 0 10px;

&:focus{
outline: 0;
}

`;
