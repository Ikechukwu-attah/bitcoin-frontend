import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts'
import MainTitle from './MainTitle'
import bitcoin3 from '../img/bitcoin3.jpg'
import avatar from '../img/avata.jpg'
import CtaButton from './CtaButton'
import GradientCard from './GradientCard'

export default function DemonstrationSection() {
    const BtaButton = <CtaButton name={"Place Bid"} />
    return (
        <DemonstrationSectionStyled>
           
            <SectionStyled>
                <div className="title-con">
                           <MainTitle title={"Live Demonstration"} subtitle={"Live Demonstration"} para={"checking for good traders"} />
                </div>
                <div className="gradient-cards-con">
                  <GradientCard image={bitcoin3} avatar={avatar} name={'Amanda Kudos'} price={"$4000"} title={'Dummy title'} ctaButton = {BtaButton} />
                  <GradientCard image={bitcoin3} avatar={avatar} name={'Amanda Kudos'} price={"$4000"} title={'Dummy title'} ctaButton = {BtaButton} />
                  <GradientCard image={bitcoin3} avatar={avatar} name={'Amanda Kudos'} price={"$4000"} title={'Dummy title'} ctaButton = {BtaButton} />
                  <GradientCard image={bitcoin3} avatar={avatar} name={'Amanda Kudos'} price={"$4000"} title={'Dummy title'} ctaButton = {BtaButton} />
                 
              </div>
            </SectionStyled>
        </DemonstrationSectionStyled>
    )
}

const DemonstrationSectionStyled = styled.div`

`