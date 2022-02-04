import React, {useEffect} from 'react'
import Homehero from '../../Components/Homehero'
import Header from '../../Components/Header'
import SmallWrapper from '../../Components/SmallWrapper'
import DraggableItems from '../../Components/DraggableItems'
import Footer from '../../Components/Footer'
import ScrollProxy from '../../Components/ScrollProxy'
import './Home.scss'

import gsap from 'gsap'
import Gallery from '../../Components/Gallery'

import { HomeAbout } from '../../Components/Data'
import { HomeImages } from '../../Components/Data'

function Home() {

    useEffect(()=>{
        

        gsap.timeline({
            scrollTrigger:{
                trigger: ".home-gallery__title",
                scroller: 'body',
                start: 'top 350px',
               
            }
        }).from('.line-7 span', {
            opacity: 0,
            stagger: 0.04,
        }).from('.line-8 span', {
            opacity: 0,
            stagger: 0.04,
        }, '0.5').from('.work-caption', {
            opacity: 0,

        })

         gsap.timeline({
            scrollTrigger:{
                trigger: '#hero',
                scroller: 'body',
                start: 'top 400px',
            }
        }).from('.inner-hero .line-1 span', {
            y: '-100px',
            opacity: 0,
            stagger: 0.1,
         
        }, '0.5').from('.inner-hero .line-2 span', {
            y: '-100px',
            opacity: 0,
            stagger: 0.1,
        
        }, '0.5').from('.fade-in-up', {
            y: '20px',
            opacity: 0,
         

        }, '1.1').from('.share-icons',{
            y: '10px',
            opacity: 0,
            stagger: 0.1,
            
        }, '1.5')
    })    

    return (
       
            <div id="home">
            {/* <div id="loader"></div> */}
                <ScrollProxy />
                <div className="forLogo">
                    <Header color="#fff" colorlogo="#fff"/>
                </div>
                
                <Homehero/>
                <SmallWrapper para1={HomeAbout.paraOne} para2={HomeAbout.paraTwo} line1={HomeAbout.line1} line2={HomeAbout.line2} line3={HomeAbout.line3}/>

                <div className="home-gallery">
                <div className="scroll scroll_top about__scroll scroll_animated" data-animated-one=""></div>
                    <div className="small-wrapper">
                        <div className="home-gallery__title">
                            
                        <h3>
                            <div className="line-7">
                                <span>C</span>
                                <span>h</span>
                                <span>e</span>
                                <span>c</span>
                                <span>k</span>
                                <span> O</span>
                                <span>u</span>
                                <span>t </span>
                            
                            </div>
                            
                            <div className="line-8">
                                <span>T</span>
                                <span>h</span>
                                <span>e</span>
                                <span> B</span>
                                <span>e</span>
                                <span>s</span>
                                <span>t </span>
                                <span>o</span>
                                <span>f </span>
                                <span>U</span>
                                <span>s</span>
                                
                            </div>

                        </h3>

                        <p className='work-caption' style={{'color': '#666', paddingTop: '15px'}}>HOK has successfully accomplished <br/>over 1500 projects since its establishment in 1998</p>
                        </div>
                    </div>
                    
                     <Gallery url1={HomeImages.one} url2={HomeImages.two} url3={HomeImages.three} url4={HomeImages.four} url5={HomeImages.five} url6={HomeImages.six} url7={HomeImages.seven}/>
                </div>
                
                <DraggableItems/>
                
                <Footer/>
                
            </div>
       
    )
}

export default Home
