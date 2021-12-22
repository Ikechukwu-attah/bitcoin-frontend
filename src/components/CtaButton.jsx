import React from 'react'
import styled from 'styled-components'

export default function CtaButton({name}) {
    return (
        <ButtonStyled>
           {name}
        </ButtonStyled>

       
    )
}

const ButtonStyled = styled.a`
text-transform:uppercase;
display: inline-block;
padding: 0.9rem 1.5rem;
border-radius: 8px;
font-size:1.1rem;
font-weight:500;
background:linear-gradient(130deg, #395ff6, #eb3fa9);
cursor:pointer;
transition:all .4s ease-in-out;
&:last-child{
    margin-left:1.5rem;
}

&:hover{
    transition: all .4s ease-in-out;
    background:linear-gradient(120deg, #EB3FA9, #395FF6);
}


`