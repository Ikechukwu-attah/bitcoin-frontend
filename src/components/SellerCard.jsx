import React from 'react'
import styled from 'styled-components'
import data from './data'

export default function SellerCard() {
    return (
        <SellerCardSyled>
           {
           
           data.map((item)=>{
               return <div className="SellerCard" key={item.div}>
                 <div className="number">
                     <p>0 {item.id}</p>
                 </div>
                 <div className="profile">
                     <img src={item.image} alt="" />
                 </div>

                 <div className="text">
                     <h4>{item.name}</h4>
                     <p>{item.currency}</p>
                 </div>
               </div>
           })
           
           
           } 
        </SellerCardSyled>
    )
}

const SellerCardSyled = styled.div`

     
    border-radius:20px;
    background:rgba(255,255,255,0.03);
    transition: all .4s ease-in-out;

    &:hover{
            transform:translateY(-10px);
        }

    .SellerCard{
        display:flex;
        align-items:center;
        padding: 1.5rem 1rem;
       

        .number{
            padding-right:1rem;
            font-size:1rem;
            opacity:0.5rem
        }

        p{
            font-weight:700
        }

        .profile{
            display:flex;
            img{
                width:70px;
                height:70px;
                border-radius:50%;
                margin-right:1rem;
                object-fit:cover;
                border:2px solid #395ff6;
            }
        }

        .text{
            font-size:0.5rem;
        }
    }
`