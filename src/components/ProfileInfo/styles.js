import styled from "styled-components"

export const ProfileBody = styled.div`
width: 100%;
margin: auto;
//position: relative;
`;

export const ProfileImg = styled.div`
margin: auto;
width: 70px;
height: 70px;
overflow: hidden;
border-radius: 50%;
position: absolute;
left: 0;
right: 0;

img{
margin: auto;
width: 100%;
}
`;

export const ImgBg = styled.div`
height: 35px;
`;

export const ProfileData = styled.div`
padding:35px 30px 100px;
text-align: center;
color: white;
border-bottom-left-radius: 30px;
border-bottom-right-radius: 30px;

//margin-top: 35px;

p{
margin: 0;
}

`;