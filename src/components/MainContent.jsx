import React from 'react'
import styled from 'styled-components'
import Navigiations from './Navigiations'
import SmallHeading from './SmallHeading'
import bchain from '../img/bchain.png'
import CtaButton from './CtaButton'

export default function MainContent() {
    return (
        <MainContentStyled>
            <Navigiations />
              <div className="content">
                <div className="left">
                <SmallHeading title={'All digital currency in one place'} identifier={'Before'} />

                <h2>
                    All NFTS You need in one marketplace
                    The best place to collect, Buy and sell <span className="GradientText">Awesome NFTS</span>
                </h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Corporis error quisquam consequatur 
                      ullam blanditiis earum laudantium? Provident 
                     quae modi eum temporibus saepe at earum,
                     libero tempora dolorum ea nisi itaque.
                </p> 

                <div className="btn-con">
                    <CtaButton name={"Discover More"}/>

                    <CtaButton name={"Get Help"}/>
                </div>
            </div>
            <div className="right">
                <img src={bchain} alt="block chain" /> 
              
            </div>
      </div>
        </MainContentStyled>
    )
}


const MainContentStyled = styled.div`

position:absolute;
top:0px;
left:50%;
width:80%;
height:100%;
transform:translateX(-50%);

  .content{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      height:100%;
      width:100%;
        .left{
            display:flex;
            justify-content:center;
            flex-direction:column;

            h1{
                padding:1.8rem 0;
            }

           .btn-con{
               margin-top: 2rem;
           }
        }

        .right{
            img{
                position:absolute;
                right:-11%;
                bottom: -1%;
                width: 60%
            }
        }
  }

`
