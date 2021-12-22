import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layouts'
import BlogSection from './BlogSection'
import ContactUs from './ContactUs'
import DemonstrationSection from './DemonstrationSection'
import GradientCardSection from './GradientCardSection'
import MainTitle from './MainTitle'
import SellerCard from './SellerCard'

export default function BodyContent() {
    return (
        <BodyContentStyle>
            <InnerLayout>
            <MainTitle title={'Top Sellers This Month'} subtitle={'All Entrepreneurs'}  />
           <div className="sellercards">
              <SellerCard />
              <SellerCard />
              <SellerCard />
           </div>
             <BlogSection />
             <GradientCardSection />
             <DemonstrationSection />
      
            </InnerLayout>

            <ContactUs />
            <footer>
                <p>Copyright &copy;ikechukwu Attah. All Right Reserved</p>
            </footer>
        </BodyContentStyle>
    )
}

const BodyContentStyle = styled.main`

   .sellercards{
       display:grid;
       grid-template-columns:repeat(3, 1fr);
       grid-gap:2rem;
       margin:2rem 0;
   }

   footer{
       display:flex;
       align-item:center;
       justify-content:center;
       padding:2rem 0;
       backgound-color:#020A27;
       border-top: 1px solid rgba(255, 255, 255, 0.8);

       p{
           opacity:0.7;
           text-align:center;
       }
   }

`
