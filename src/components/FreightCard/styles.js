import styled from "styled-components"

export const Card = styled.div`
padding: 15px 20px 0;
//border: 1px solid black;
width: 100%;
hr{
margin-top: 10px;
}

&:hover{
//background-color: rgba(33,37,41,0.01);
//box-shadow: 0 0 5px darkgrey;
  background-color: #FAFAFA !important;

}


`;
export const CardHeader = styled.div`
display: flex;
justify-content: space-between;
`;

export const CardOwnerInfo = styled.div`
display: flex;
`;

export const CardOwnerImg = styled.div`
width: 30px;
height: 30px;
//border: 100px solid;
//border-style: solid;
overflow: hidden;
border-radius: 50%;
img{
width: 100%;
}
`;

export const CardOwnerFullName = styled.div`
display: flex;
p{
font-weight: bold;
display: block;
margin-bottom: 0;
margin-left: 10px;
align-self: center;
}
`;

export const CardBookmark = styled.div`
display: flex;
button:nth-child(1){
margin-right: 10px;
}
button{
background-color: white;
width: 40px;
height: 40px;
align-self: start;
border: 0;
box-shadow: 0 0 10px lightgrey;
border-radius: 50px;
display: flex;
padding: 0;
i{
font-size: 20px;
text-align: center;
margin: auto;

}}
button:hover{
box-shadow: 0 0 10px grey;
}
button:focus{
outline: 0;
}
button:focus i{

}

`;


export const CardBody = styled.div`

`;

export const CardBodyNameOfFreight = styled.div`
display: flex;
align-content: center;
p{
line-height: 18px;
font-weight: 600;
font-size: 18px;
align-self: center;
}
`;

export const CardBodyInfo = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

`;

export const CardBodyPriceOfFreight = styled.div`
p{
display: flex;
div.currency{
font-size: 11px;
padding: 1px 6px;
color: white;
align-self: center;
border-radius: 50px;
//margin-right: 5px;
}}
`;


export const CardBodyWeightOfFreight = styled.div`

`;

export const CardBodyVolumeOfFreight = styled.div`

`;


export const CardBodyDirectionOfFreight = styled.div`
width: fit-content;
position: relative;
//z-index: 9999999;
margin-bottom: 5px;

//display: flex;
//flex-direction: row;
//flex-wrap: wrap;

p{
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
div{
display: flex;
align-items: center;
}
}
img{
width: 20px;
height: 20px;
}

&:hover{
div.map{
//height: initial;
height: 100px;
//transition-duration: 0.5s;

}}

div.map{
height: 0;
position: absolute;
width: 100%;
overflow: hidden;
transform: translateY(-10px);
transition-duration: 0.5s;
i{
display: block;
margin: auto;
width: fit-content;
color: white;

}

div.map-page{
background-color: white;
transform: translateY(-5px);
z-index: 999;
}
}


`;


export const CardBodyTypeAndAmountOfVehicle = styled.div`
align-self: center;
p{
display: flex;
div.main-bg-color{
display: inline-block;
font-size: 11px;
padding: 1px 6px;
color: white;
margin-left: 5px;
align-self: center;
//align-content: center;
//padding: 10px;
border-radius: 50px;
}}
`;

export const CardBodyDateOfAction = styled.div`

`;

export const CardBodyDescriptionOfFreight = styled.div`
p{
line-height: 20px;
}
`;


export const CardFooter = styled.div`
p{
font-size: 10px;
margin-right: 0;
margin-left: auto;
width: fit-content;
}
`;


