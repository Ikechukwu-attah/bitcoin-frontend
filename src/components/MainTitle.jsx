import React from 'react'
import styled from 'styled-components'
import SmallHeading from './SmallHeading'

export default function MainTitle({title, subtitle, para}) {
    return (
        <MainTitleStyle>
            <SmallHeading title={subtitle} />

            <h2>
                {title}
            </h2>

            <p>{para}</p>
        </MainTitleStyle>
    )
}
 

const MainTitleStyle = styled.div`
  h2{
      padding-top: 1rem;
      font-weight:500;

  }

  p{
      padding 1.2rem 0;
      opacity:0.5
  }
`
