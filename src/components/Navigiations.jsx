import React from 'react'
import styled from 'styled-components'
import logo2 from '../img/logo2.png'

export default function Navigiations() {
    return (
        <NavigationStyled>
            <div className="logo">
                <img src={logo2} alt="logo" />
            </div>

            <ul className="nav-item">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Activity</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="btn-primary">Get Connected</div>
        </NavigationStyled>
    )
}


const NavigationStyled = styled.nav`
   min-height:10vh;
   display:flex;
   justify-content:space-between;
   align-items:center;

     .nav-item{
         display:flex;
         align-items:center;
       

         li{
             margin:0 1rem;
             color:#fff;
             
            
         }

        
     }
     
     .btn-primary{
             background-color:rgba(57,95,242, 0.6);
             padding: 0.6rem 0.8rem;
             border-radius:70px;
             cursor:pointer;
             transition:all .4s ease-in-out;

             &:hover{
                background-color:rgba(57,95,242, 1);  
             }
         }


     .logo{
         img{
             width:60px;
         }
     }

`
