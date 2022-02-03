import React from 'react'
import { useEffect } from 'react'
import './Gallery.scss'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Scrollbar from 'smooth-scrollbar';


function Gallery(props) {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{

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

        
        gsap.utils.toArray(".preview-img .inner-img").forEach((section, i) => {
  
        gsap.fromTo(section,{ 
          y: '-80px' 
        }, {
          scrollTrigger: {
            trigger: section.parentElement,
            scroller: 'body',
            scrub: true
          },
          y: '0',
          ease: "none"
        });
          });     

        gsap.timeline({
            scrollTrigger:{
                trigger: ".gallery",
                scroller: 'body',
                start: 'top 500px',
                   
            }
        }).fromTo('.column-left', {
            opacity: 0,
        }, {
            opacity: 1
        }, 0).fromTo('.column-right', {
            opacity: 0,
        }, {
            opacity: 1
        }, 0);
    })

    
    return (
        <div>
            <section className="gallery">
            <div className="container-fluid">
                <div className="gallery-inner">
                    <div className="gallery-body">
                        <div className="column-left">
                            <div className="preview-img one-wrapper" >
                                {/* <img className="one-img" src={props.url1} alt="" /> */}
                                <div className="inner-img" style={{backgroundImage: "url("+ props.url1 + ")"}}>

                                </div>
                            </div>

                            <div className="preview-img two-wrapper">
                                {/* <img className="two-img" src={props.url2} alt="" /> */}
                                <div className="inner-img" style={{backgroundImage: "url("+ props.url2 + ")"}}>

                                </div>
                            </div>

                            <div className="preview-img three-wrapper" >
                                {/* <img className="three-img" src={props.url3} alt="" /> */}

                                <div className="inner-img" style={{backgroundImage: "url("+ props.url3 + ")"}}>

                                </div>
                            </div>

                            <div className="preview-img four-wrapper">
                                {/* <img className="four-img" src={props.url4} alt="" /> */}

                                <div className="inner-img" style={{backgroundImage: "url("+ props.url4 + ")"}}>

                                </div>
                            </div>
                        </div>

                        <div className="column-right offset-1 ">
                            <div className="preview-img five-wrapper" >
                                {/* <img className="five-img" src={props.url5} alt="" /> */}
                                <div className="inner-img" style={{backgroundImage: "url("+ props.url5 + ")"}}>

                                </div>
                            </div>

                            <div className="preview-img six-wrapper">
                                {/* <img className="six-img" src={props.url6} alt="" /> */}

                                <div className="inner-img" style={{backgroundImage: "url("+ props.url6 + ")"}}>

                                </div>
                            </div>

                            <div className="preview-img seven-wrapper">
                                {/* <img className="seven-img" src={props.url7} alt="" /> */}

                                <div className="inner-img" style={{backgroundImage: "url("+ props.url7 + ")"}}>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Gallery
