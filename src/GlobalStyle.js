import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
*{
    margin: 0;
    padding:0;
    list-style: none;
    border-sizing: border-box
}


body{
    background:#03091F;
    font:1.2rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color:#fff;
}

a{
    color:inherit;
    font-family:inherit;
    text-decoration:none;
 }

 p{
    line-height:2rem;
 }

 .Before{
        position:relative;
        padding-left:3rem;
        &::before{
            content:"",
            position:absolute;
            left:0;
            top:50%
            height:2px;
            width:35px;
            background-color:#395ff6;
        }
 }

 .GradientText{
        background:linear-gradient(120deg, rgb(132,111,124), rgb(241,118,116));
        background-clip:text;
        -webkit-text-fill-color:transparent;
        -webkit-background-clip:text;
        display:inline-block;
 }

 .title-con{
     text-align:center;
     width:50%;
     margin:0 auto;
 }
  
 .gradient-cards-con{
     display:grid;
     grid-gap:2rem;
     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
 }

`;

export default GlobalStyle