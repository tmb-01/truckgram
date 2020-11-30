import styled from "styled-components"

export const NavBar = styled.div`
width: 100%;
color: white;
`;

export const NavBarContent = styled.div`
padding: 15px 0;
width: 80%;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;

@media only screen and (max-width: 768px){
width: 100%;
padding: 10px 30px;
box-sizing: border-box;
}

@media only screen and (max-width: 375px){
//font-size: 25px;
padding: 10px 3px;
}

`;

export const Logo = styled.div`
//margin-right: auto;
//margin-left:0;
width: fit-content;
font-size: 40px;
@media only screen and (max-width: 425px){
font-size: 30px;
}
@media only screen and (max-width: 375px){
font-size: 25px;
}
`;

export const NavsBox=styled.div`
position: relative;
width: fit-content;
display: flex;
flex-direction: column;
@media only screen and (max-width: 768px){
order: -1;
}
`;

export const MenuIcon=styled.div`
//display: none;

width: 30px;
button{
border: 0;
display: none;
margin: auto;
background-color: transparent;
color: white;
font-size: 30px;
padding: 0;

@media only screen and (max-width: 768px){
display: block;
}

&:focus{
outline: 0;
}
}
`;

export const Navs = styled.div`
width: fit-content;
//margin-right: 0;
//margin-left:auto;
display: flex;
align-items: center;

@media only screen and (max-width: 768px){
flex-direction: column;
align-items: start;
margin: 3px 0;
position: absolute;
left: 0;
top: 30px;
//padding: 10px;
border-radius: 0 0 10px 10px;
height: ${props=>props.menuIconClicked?"fit-content":0};
padding: ${props=>props.menuIconClicked?"10px":0};
overflow: hidden;
box-sizing: border-box;
//position: fixed;
//right: 0;
//bottom: 10px;
//left: 0;
background-color: var(--main-color);
//margin: auto;
//padding: 10px;
//border-radius: 20px;
z-index: 9999;
}
`;

export const Nav = styled.div`
cursor: pointer;
color: white;
margin:0 10px;
display: flex;
flex-direction: column;
justify-content: space-around;

@media only screen and (max-width: 768px){
flex-direction: row;
//margin-left: 0;
margin:2px 0 
}

i{
padding: 0;
font-size: 30px;
display: block;
width: fit-content;
height: fit-content;
margin: auto;
@media only screen and (max-width: 768px){
width: 40px;
text-align: center;
}
@media only screen and (max-width: 375px){
font-size: 25px;
}
}
span{
display: block;
width: fit-content;
height: fit-content;


@media only screen and (max-width: 768px){
//display: none;
}

}
`;

export const ChangeLang=styled.div`
font-size: 20px;
cursor: pointer;
user-select: none;

@media only screen and (max-width: 425px){
font-size: 15px;
}

`;
