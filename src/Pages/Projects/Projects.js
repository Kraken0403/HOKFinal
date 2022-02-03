import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header'
import ScrollProxy from '../../Components/ScrollProxy'
import './Projects.scss'
import gsap from 'gsap'
import one from '../../Components/images/workOne/workOneHero.png'
import two from '../../Components/images/workTwo/workSixHero.png'
import three from '../../Components/images/workThree/workEightHero.png'
import four from '../../Components/images/workFour/workTenHero.png'
import five from '../../Components/images/workFive/workThirteenHero.png'
import six from '../../Components/images/workSix/workFifteenHero.png'
import seven from '../../Components/images/workSeven/workNineteenHero.png'
import eight from '../../Components/images/workEight/workTwentyTwoHero.png'
import nine from '../../Components/images/workNine/workTwentyFourHero.png'
import ten from '../../Components/images/workTen/workTwentyEightHero.png'
import Footer from '../../Components/Footer'


function Projects() {

    const all = function(){
        
        const imagesText = document.querySelectorAll('.menu__item-textinner');

        for( var i = 0; i < imagesText.length; i++){
            imagesText[i].style.color = 'rgba(255,255,255,1)';
        }
    }

    const residential = function(){
        const imagesTextComm = document.querySelectorAll('.comm');
        const imagesTextRes = document.querySelectorAll('.res');

        for( var i = 0; i < imagesTextRes.length; i++){
            imagesTextRes[i].style.color = 'rgba(255,255,255,1)';
        }

        for( var i = 0; i < imagesTextComm.length; i++){
            imagesTextComm[i].style.color = 'rgba(255,255,255,0.4)';
        }
    }

    const comm = function(){
        const imagesTextComm = document.querySelectorAll('.comm');
        const imagesTextRes = document.querySelectorAll('.res');

        for( var i = 0; i < imagesTextRes.length; i++){
            imagesTextRes[i].style.color = 'rgba(255,255,255,0.4)';
        }

        for( var i = 0; i < imagesTextComm.length; i++){
            imagesTextComm[i].style.color = 'rgba(255,255,255,1)';
        }
    }


    useEffect(()=>{

        var tlp1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#projects',
                scroller: 'body'
            }
        })

        tlp1.from('.tabs-button',{
            opacity: 0,
            y: '20px',
            stagger: 0.1
        }, 0).from('#projects .bg-text span', {
            opacity: 0,
            y:'10px',
            stagger: 0.1
        }, '<0.2').from('.menu__item', {
            opacity: 0,
            y: '20px',
            stagger: 0.1
        }, '0.5')
    })

    return (
        <div id="projects">
            <Header color="#fff" colorlogo="#fff"/>
            <ScrollProxy/>
            <div className="projects-tabs">
            
                <div className="bg-text">
                    <span>W</span>
                    <span>O</span>
                    <span>R</span>
                    <span>K</span>
                    <span>S</span>
                    
                </div>

            <div className="small-wrapper--custom">
            <div className="hover-list">

            <div className="projects-tab__inner">
                    <button className="tabs-button" onClick={all}>
                        All
                    </button>

                    <button className="tabs-button" onClick={residential}>
                        Residential
                    </button>

                    <button className="tabs-button" onClick={comm}>
                        Commercial
                    </button>

                    <button className="tabs-button" onClick={comm}>
                        Environment and Space Design
                    </button>
                </div>

             <nav className="menu" >

                {/* 1 */}
                <Link to="/projects/1" className="menu__item" data-img="../img/1.jpg">
                    <span className="menu__item-text"><span className="menu__item-textinner res">Curtural Estate</span></span>
                    {/* <span className="menu__item-sub">Style Reset 66 Berlin</span> */}
                    <img className="menu__item-img" src={one} alt="" />
                </Link>

                {/* 2 */}
                <Link to="/projects/2" className="menu__item" data-img="../img/2.jpg">
                    <span className="menu__item-text"><span className="menu__item-textinner res">Elegant Apartments</span></span>
                    {/* <span className="menu__item-sub">Fashion Week Milano</span> */}
                    <img className="menu__item-img" src={two} alt="" />
                </Link>

                {/* 3 */}
                <Link to="/projects/3" className="menu__item" data-img="../img/1.jpg">
                    <span className="menu__item-text"><span className="menu__item-textinner comm">Tattoo Parlor</span></span>
                    {/* <span className="menu__item-sub">Amber Convention London</span> */}
                    <img className="menu__item-img" src={three} alt="" />
                </Link>

                {/* 4 */}
                <Link to="/projects/4" className="menu__item" data-img="../img/1.jpg">
                    <span className="menu__item-text"><span className="menu__item-textinner comm">Coffee Time</span></span>
                    {/* <span className="menu__item-sub">Tokyo Summer Trends</span> */}
                    <img className="menu__item-img" src={four} alt="" />
                </Link>

                {/* 5 */}
                <Link to="/projects/5" className="menu__item" data-img="../img/1.jpg">
                    <span className="menu__item-text"><span className="menu__item-textinner comm">THE Office</span></span>
                    {/* <span className="menu__item-sub">2021 West End New York</span> */}
                    <img className="menu__item-img" src={five} alt="" />
                </Link>

                {/* 6 */}
                <Link to="/projects/6" className="menu__item" data-img="../img/1.jpg">
                    <span className="menu__item-text"><span className="menu__item-textinner res">The Triumph</span></span>
                    {/* <span className="menu__item-sub">Sunset Festival Greenwich</span> */}
                    <img className="menu__item-img" src={six} alt="" />
                </Link>

                {/* 7 */}
                <Link to="/projects/7" className="menu__item" data-img="../img/1.jpg">
                    <span className="menu__item-text"><span className="menu__item-textinner comm">Bridal Salon</span></span>
                    {/* <span className="menu__item-sub">Spirit Garments Jakarta</span> */}
                    <img className="menu__item-img" src={seven} alt="" />
                </Link>

                {/* 8 */}
                <Link to="/projects/8" className="menu__item" data-img="../img/1.jpg">
                    <span className="menu__item-text"><span className="menu__item-textinner comm">People's Groomers</span></span>
                    {/* <span className="menu__item-sub">Bluehouse Fashion Toronto</span> */}
                    <img className="menu__item-img" src={eight} alt="" />
                </Link>

                {/* 9 */}
                <Link to="/projects/9" className="menu__item" data-img="../img/1.jpg">
                    <span className="menu__item-text"><span className="menu__item-textinner res">Garden of Delight</span></span>
                    {/* <span className="menu__item-sub">Glamour Week Christchurch</span> */}
                    <img className="menu__item-img" src={nine} alt="" />
                </Link>

                {/* 10 */}
                <Link to="/projects/10" className="menu__item" data-img="../img/1.jpg">
                    <span className="menu__item-text"><span className="menu__item-textinner comm">Jewellery Shop</span></span>
                    {/* <span className="menu__item-sub">Piu Bella Fashion Rome</span> */}
                    <img className="menu__item-img" src={ten} alt="" />
                </Link>
                
			
		    </nav>
                        
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Projects
