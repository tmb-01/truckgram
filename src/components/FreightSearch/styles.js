import styled from "styled-components"

export const SearchBox = styled.div`
width: 100%;
background-color: white;
//border: 1px solid grey;
border: 1px solid rgba(33,37,41,0.1);
padding: 15px 20px;

hr{
margin: 15px 0 10px;
}

`;

export const TypeOfTruck = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

export const TypeOfTruckButton = styled.button`
padding:5px 10px;
border: 1px solid rgba(33,37,41,0.1);
margin-right: ${props => props.chosen ? "5px" : "10px"};
//color: #808080;
background-color: ${props => props.chosen ? "unset" : "#fafafa"};
color: ${props => props.chosen ? "white" : "grey"};

&:active{
outline: 0;
}

&:focus{
outline: 0;
}

&:hover{
//outline: 0;
}
`;


export const ChosenTypeBox = styled.div`
//padding:5px 10px;
button:focus{
outline: 0 !important;
}

button:active{
outline: 0;
}
`;

export const Direction = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
//margin-top: 15px;
`;

export const MyInputBox = styled.div`
width: 45%;
display: flex;
//justify-content: space-between;
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}



//input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {
//  -webkit-appearance: none;
//  margin: 0;
//}

`;


export const MyInput = styled.input`
width : ${props => props.addition? "90%":"100%" };
padding:5px 10px;
box-sizing: border-box;
outline: 0;
flex-grow: 1;

`;

export const AddedToInput = styled.div`
padding:5px 10px;
width: fit-content;
color: grey;
background-color: #fafafa;

`;
export const SearchButton=styled.button`
margin-top: 20px;
padding: 5px 10px;
//border-radius: 10px;
border: 0;
color: white;
background-color: var(--main-color);
&:focus{
outline: 0;
}
`;

