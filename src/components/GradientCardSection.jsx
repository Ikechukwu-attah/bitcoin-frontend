import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts'
import GradientCard from './GradientCard'
import MainTitle from './MainTitle'
import person from '../img/person.jpg'
import avatar from '../img/avata.jpg'
import CtaButton from './CtaButton'

export default function GradientCardSection() {
    return (
        <GradientCardSectionStyle>
            <SectionStyled>
              <div className="title-con">
                  <MainTitle title={'New Upcoming Items'} subtitle={'Discover Upcoming Items'} />
              </div>

              <div className="gradient-cards-con">
                  <GradientCard image={person} avatar={avatar} name={'james chidi'} price={"$1200"} title={'Dummy title'} />
                  <GradientCard image={person} avatar={avatar} name={'james chidi'} price={"$1200"} title={'Dummy title'} />
                  <GradientCard image={person} avatar={avatar} name={'james chidi'} price={"$1200"} title={'Dummy title'} />
                  <GradientCard image={person} avatar={avatar} name={'james chidi'} price={"$1200"} title={'Dummy title'} />
                  <GradientCard image={person} avatar={avatar} name={'james chidi'} price={"$1200"} title={'Dummy title'} />
                  <GradientCard image={person} avatar={avatar} name={'james chidi'} price={"$1200"} title={'Dummy title'} />
                  <GradientCard image={person} avatar={avatar} name={'james chidi'} price={"$1200"} title={'Dummy title'} />
                  <GradientCard image={person} avatar={avatar} name={'james chidi'} price={"$1200"} title={'Dummy title'} />
              </div>

   
              <div className="cta-btn">
                         <CtaButton name={'View More'} />
                     </div>
            </SectionStyled>
        </GradientCardSectionStyle>
    )
}


const GradientCardSectionStyle = styled.div`
  .cta-btn{
      margin-top:1rem;
      text-align:center;
  }

`
