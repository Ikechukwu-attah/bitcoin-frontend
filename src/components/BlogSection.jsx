import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts'
import MainTitle from './MainTitle'
import blogs from './Blogs'

export default function BlogSection() {
    return (
        <BlogSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'Popular Blogs'} subtitle={'Our Top Blogs'} para={'chching cggiyyghhhhyutyghbjhghvcfghbvfchhjgf'}  />
                </div>
            </SectionStyled>
               
            <div className='blogs'>
                {
                           blogs.map((blog)=>{
                         return <div className='blog' key={blog.id}>

                             <div className="image">
                                 <img src={blog.image} alt="bitcoin images" />
                             </div>
                             <h6>{blog.title}</h6>
                             <div className="user">
                                 <p className='first-child'>Creator : </p>
                                 <p>{blog.name}</p>
                             </div>
                         </div>
                    
                        })
                }
             
            </div>

        </BlogSectionStyled>
    )
}


const BlogSectionStyled = styled.div`

.blogs{
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap:2rem;
    padding-top: 2rem;

    .blog{
        background: rgba(255, 255, 255, 0.03);
        border-radius:20px;
         .image{
             height:250px;
             width:100%;
             overflow:hidden;
             border-top-left-radius:20px;
             border-top-right-radius:20px;
             transition: all .4s ease-in-out;

             img{
                 width: 100%;
                 height:100%;
                 transition: all .4s ease-in-out;
                 object-fit:cover;
                 border-top-left-radius:20px;
                 border-top-right-radius:20px;
                 filter: grayscale(50%);

                 &:hover{
                    filter: grayscale(0);
                    transform:scale(1.2) rotate(20deg);
                 }
             }

            h6{
                font-size:1.3rem;
                font-weight:500;
                padding: 1rem 1rem 0 1rem;
            }

            .user{
                padding: 0.2rem 1rem 1.5rem 1rem;

            }
            
            .first-child{
                   padding-right:0.4rem;
                   opacity:0.5; 
                }
         }
    }
}

`