import React from 'react'
import styled from 'styled-components'
import time from '../img/time.svg'
import heart from '../img/heart.svg'
import CtaButton from './CtaButton'

export default function GradientCard({image, avatar, name, price, title, ctaButton}) {
    return (
        <GradientCardStyled>
             <div className="g-card">
                 <div className="inner-content">
                     <div className="image">
                         <img src={image} alt="pics" />
                        <div className="name">
                            <img src={avatar} alt="avatar" />
                            <p>{name}</p>
                        </div>
                     </div>

                     <div className="card-content">
                         <h6 className="card-name">{title}</h6>
                         <p>price <span className='price'>{price}</span>  &nbsp; <span className="l-text">3 of 15</span></p>
                         <p>Highest Bid  &nbsp; <span className='price'>Price</span></p>
                     </div>

                     <div className="duration">
                         <p><img src={time} alt="time" />7 hours</p>
                         <p><img src={heart} alt="heart" />160 likes</p>
                     </div>
                         <div className="cta-btns">
                        {ctaButton}
                       </div>
                 </div>


             </div>
        </GradientCardStyled>
    )
}


const GradientCardStyled = styled.div`
 font-size:1rem;
 border-radius:20px;
 transition: all .4s ease-in-out;
 background: linear-gradient(90deg, #7f41db 0%, #022894 100%);
 animation: gradient 5s infinite;



 @keyframes gradient{
     0%{
        background: linear-gradient(90deg, #7f41db 0%, #022894 100%);   
     }

     50%{
        background: linear-gradient(90deg, #7f41db 0%, #022894 100%);   
     }

     70%{
        background: linear-gradient(130deg, #022894 0%,  #7f41db 100%);   
     }

     100%{
        background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9 100%);   
     }
 }

    

   .g-card{
      margin:.2rem;
    
    .inner-content{

        background-color: #091026;
        padding: .8rem;
        border-radius:20px;
          
          .image{
              width:100%;
              position:relative;

              img:first-child{
                 width:100%;
                 object-fit:cover;
                 height:300px;
                 border-radius:10px;
              }
            .name{
                position:absolute;
                display:flex;
                align-items:center;
                left:50%;
                border-radius:50px;
                transform:translateX(-50%);
                width:80%;
                padding: .2rem .2rem;
                bottom:-26px;
                background-color:#03091f;
                border: 1px solid rgba(255,255,255,0.8);

                img{
                    width:45px;
                    height:45px;
                    border-radius:50%;
                    object-fit:cover;
                    margin-right:2rem;
                }
            }
          }

          .card-content{
              padding-top:3rem;
              .card-name{
                  font-size:1.3rem;
                  font-weight:500;
                  padding-bottom: .6rem;
              }

              .price{
                  color:#6BBE92;
              }

              .l-text{
                  opacity:0.5;
              }
          }
        .duration{
            margin-top:1rem;
            padding-top:1rem;
            border-top: 1px dashed rgba(255,255,255,0.2);
            display:flex;
            justify-content:space-between;

            p{
                display:flex;
                align-items:center;

                img{
                    object-fit:cover;
                    width:18px;
                    margin-right:center;
                    display:flex;
                    justify-content:center;
                }
            }
        }

        }

        .cta-btns{
            width:80%;
            a{
                margin:.6rem 0;
                display:inline-block;
                width:100%;
                text-align:center
            }
        }
   }
 

`