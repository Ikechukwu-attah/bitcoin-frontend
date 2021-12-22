import React from 'react'
import styled from 'styled-components'
import marketing from '../img/marketing.mp4'
import circles from '../img/circles.svg'
import { InnerLayout } from '../Layouts'
import MainContent from './MainContent'
import BlogSection from './BlogSection'

export default function MainArea() {
    return (
        <MainAreaStyled>
            <video src={marketing} muted playsInline autoPlay loop></video>
            <img src={circles} alt="circle" className="overlay" />

            <InnerLayout >
                <MainContent />
                
            </InnerLayout>
        </MainAreaStyled>
    )



}

const MainAreaStyled = styled.div`
  position: relative;
  overflow:hidden;
  width:100%;
  height:85vh;

    .overlay{
        width:100%;
        height:100%;
        position:absolute;
        top:-300px;
        right:-400px;
    }

    video{
        width:100%;
        height:100%;
        object-fit:cover;
        opacity:0.7;
    }

`





