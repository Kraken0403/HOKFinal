import React, { Component } from 'react'
import Header from '../../Components/Header'
import SmallWrapper from '../../Components/SmallWrapper'
import './InnerWork.scss'

import $ from 'jquery';
import Footer from '../../Components/Footer'
import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import ScrollProxy from '../../Components/ScrollProxy'
import Gallery from '../../Components/Gallery'

import { InnerWorkContent } from '../../Components/Data'

export default class InnerWork extends Component{

    splitText5(){
        let titleText = document.querySelector('.line-14');
        let text = titleText.textContent.split("");
        let result = "";

        text.forEach((t)=>{
            result += "<span>" + t + "</span>";
        })

        titleText.innerHTML = result
    }

    splitText6(){
        let titleText = document.querySelector('.line-15');
        let text = titleText.textContent.split("");
        let result = "";

        text.forEach((t)=>{
            result += "<span>" + t + "</span>";
        })

        titleText.innerHTML = result
    }

    moveDivisor() {
        const divisor = document.querySelector("#divisor");
        const handle = document.querySelector("#handle");
        const slider = document.querySelector("#slider");
        const bluePrint = document.querySelector('.blueprints')
        const bluePrintWidth = bluePrint.getBoundingClientRect().width;

        divisor.style.backgroundSize = `${bluePrintWidth}px 100%`;
        
        handle.style.left = slider.value+"%";
        divisor.style.width = slider.value+"%";
    }
    
    componentDidMount(){

        this.moveDivisor();
        this.splitText5();
        this.splitText6();

        gsap.registerPlugin(ScrollTrigger);

        const options = {
            damping: 0.07,
        }

        let bodyScrollBar = Scrollbar.init(document.body, options);

            ScrollTrigger.scrollerProxy("body", {
            scrollTop(value) {
                if (arguments.length) {
                bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            }
            });

        bodyScrollBar.addListener(ScrollTrigger.update);

        var fixed = document.querySelector('.layer');
        
        bodyScrollBar.addListener(function(status) {
        var offset = status.offset;

        fixed.style.top = offset.y + 'px';
        fixed.style.left = offset.x + 'px';
    
        })

        var tlb1 = gsap.timeline({
            scrollTrigger: {
                scroller: 'body',
                trigger: 'briefing-inner',
                scrub: true
            }
        });

        tlb1.from('.briefing-inner img', {
            y: '-200px'
        }).to('briefing-inner img', {
            y: '200px'
        });

        var tlb3 = gsap.timeline({
            scrollTrigger: {
                scroller: 'body',
                trigger: '.briefing',
            }
        });

        tlb3.from('.briefing .brief-title .lines-1 span', {
            opacity: 0,
            stagger: 0.04
        }, 0).from('.briefing .brief-title .lines-2 span', {
            opacity: 0,
            stagger: 0.04
        }, 0).from('.briefing .brief-content', {
            y: '50px',
            opacity: 0
        }, '<0.5')

        var tl8 = gsap.timeline({
            scrollTrigger:{
              trigger: '.briefing-inner',
              scrub: true,
            }
          });
        
          tl8.from('.briefing-inner img', {
            yPercent: -20,
            ease: 'ease'
          }).to('.briefing-inner img', {
            yPercent: 20,
            ease: 'ease'
          });

          var tl19 = gsap.timeline({
            scrollTrigger:{
              trigger: '#hero-work',
              
            }
          });
        
          tl19.from('#hero-work .hero-wrapper .line-14 span', {
            
            opacity: 0,
            stagger: 0.04
          }, 0).from('#hero-work .hero-wrapper .line-15 span', {
            opacity: 0,
            stagger: 0.04
          }, 0);

          $("#slider").on("input change", (e)=>{
            const sliderPos = e.target.value;
            // Update the width of the foreground image
            $('.foreground-img').css('width', `${sliderPos}%`)
            // Update the position of the slider button
            $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
        });

    }

    render() {
        let getId = this.props.match.params.id;

        let getData = InnerWorkContent.mainData.find(function(e){
     
            if(e.id == getId){
                console.log(e.id)
                return e
            }

            else return false
          });

       
        return(

        <div id="inner-work1">
            <ScrollProxy/>
            <Header color = "#fff"/>
            <div id='hero-work'>
            
                <div className='layer-3 layer parallax' data-depth='0.50' style={{'left': '0px'}, {backgroundImage: `url(${getData.HeroBgurl})`}}></div>
            
                <div className="hero-wrapper">
                    <h1>
                      <div className="line-14">
                        {getData.HeroCaption1}
                      </div>
                      <div className="line-15">
                        {getData.HeroCaption2}
                      </div>
                    </h1>
                    <div className="anime-line"></div>
                </div>
           </div>  

            <div className="inner-work__brief">
                <SmallWrapper para1 = {getData.AboutParaOne} para2 = {getData.AboutParaTwo} line1={getData.line1} line2={getData.line2}/>
            </div>

            <div className="main-briefing">
            {/* <div className="about__bg">
                ISCON
            </div> */}
            <div className="briefing-inner">
                <img src={getData.ParallaxImgBg} alt="" />
            </div>

            <div className="container-fluid padding-briefing">
                <div className="small-wrapper briefing">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h3 className="brief-title">
                                <div className="lines lines-1">
                                    <span>H</span>
                                    <span>i</span>
                                    <span>g</span>
                                    <span>h</span>
                                    <span>l</span>
                                    <span>i</span>
                                    <span>g</span>
                                    <span>h</span>
                                    <span>t</span>
                                    <span>s </span>
                                    <span>&</span>
                                </div>

                                <div className="lines lines-2">
                                    <span>C</span>
                                    <span>h</span>
                                    <span>a</span>
                                    <span>l</span>
                                    <span>l</span>
                                    <span>e</span>
                                    <span>n</span>
                                    <span>g</span>
                                    <span>e</span>
                                    <span>s</span>
                                </div>
                            </h3>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="brief-content">{getData.ProjectDetails}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        {/* Blueprints */}
            
        <div className="blueprints-main">
            <div className="container-fluid">
                <div className="blueprints">
                    <div id="comparison">
                        <figure style={{backgroundImage: `url(${getData.ImgOneSlider})`}}>
                        <div id="handle"></div>
                        <div id="divisor" style={{backgroundImage: `url(${getData.ImgTwoSlider})`}}></div>
                        </figure>
                        <input type="range" min="0" max="100" value="50" id="slider" onInput={this.moveDivisor} />
                    </div>
                    
                </div>
            </div>
         </div>

        <div className="inner-work_gallery-wrapper">
            <Gallery url1={getData.ProjectImgOne}
                        url2={getData.ProjectImgOne}
                        url3={getData.ProjectImgOne}
                        url4={getData.ProjectImgOne}
                        url5={getData.ProjectImgOne}
                        url6={getData.ProjectImgOne}
                        url7={getData.ProjectImgOne}

            />
        </div>
    
        <Footer/>

        </div>
        );
    }

}


