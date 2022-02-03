import React, { useEffect } from 'react'
import { ReactComponent as MySvg } from '../images/in-02.svg';
import './Footer.scss'
import gsap from 'gsap';
import { Link } from 'react-router-dom';
function Footer() {

    const styledButton = {
        border: '1px solid white',
        color: 'white'
    }

    useEffect(()=>{
        var tl4 = gsap.timeline({
            scrollTrigger:{
                trigger: "#footer",
                scroller: 'body',
                start: 'top 250px',
            
            }
        }).from('#footer .line-1 span', {
            y: '-100px',
            opacity: 0,
            stagger: 0.04,
        }, 0).from('#footer .line-2 span', {
            y: '-100px',
            opacity: 0,
            stagger: 0.04
        }, 0 ).from('.footer-caption', {
            y: '30px',
            opacity: 0,
        }, 0.5).from('.footer-inner .col-12', {
            y: '30px',
            opacity: 0,
            stagger: 0.1
        }, "<0.5").from('.btn-appear-footer', {
            opacity: 0,
            y:'30px'
        }, "<0.6")

    }, [] );

       
  

    return (
        <div>
            <section id="footer">
            <div className="scroll scroll_top about__scroll scroll_animated" data-animated-one=""></div>
                <div className="footer-main">
                    <div className="container-fluid">
                        <div className="footer-head">
                            <div className="row">
                                <div className="col-12">
                                    <h1>
                                        <div className="line line-1">
                                            <span>L</span>
                                            <span>e</span>
                                            <span>t'</span>
                                            <span>s </span>
                                            <span>C</span>
                                            <span>o</span>
                                            <span>n</span>
                                            <span>n</span>
                                            <span>e</span>
                                            <span>c</span>
                                            <span>t</span>
                                        </div>

                                        <div className="line line-2">
                                            <span>& </span>
                                            <span>b</span>
                                            <span>u</span>
                                            <span>i</span>
                                            <span>l</span>
                                            <span>d </span>
                                            <span>y</span>
                                            <span>o</span>
                                            <span>u</span>
                                            <span>r </span>
                                            <span>D</span>
                                            <span>r</span>
                                            <span>e</span>
                                            <span>a</span>
                                            <span>m </span>
                                            <span>P</span>
                                            <span>r</span>
                                            <span>o</span>
                                            <span>j</span>
                                            <span>e</span>
                                            <span>c</span>
                                            <span>t</span>
                                        </div>
                                    </h1>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="footer-inner">
                            <p className='footer-caption'>We are ready to lead you into the exciting world of architecture and interior design.</p>
                            <div className="row">

                                <div className="col-12 col-md-3">
                                    <div className="footer-title">
                                        <p>Email us</p>
                                    </div>
                                    <div className="footer-content">
                                        <p>studio@hok.com</p>
                                    </div>
                                </div>

                                <div className="col-12 col-md-3">
                                    <div className="footer-title">
                                        <p>Call Us on</p>
                                    </div>
                                    <div className="footer-content">
                                        <p>+91-7358103456</p>
                                    </div>
                                </div>

                                <div className="col-12 col-md-3">
                                    <div className="footer-title">
                                        <p>or Drop by at</p>
                                    </div>
                                    <div className="footer-content">
                                        <p>31, Mark Street Avenue</p>
                                    </div>
                                </div>

                                <div className="col-12 col-md-3 last-col">
                                    <div className="footer-title">
                                        <p>Email us</p>
                                    </div>
                                    <div className="footer-content">
                                        <p>studio@hok.com</p>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="dark-link__parent">
                                <div className="btn-appear-footer">
                                    <Link to="/contacts" className="dark-link" style={styledButton}>Start a Project</Link>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                    <MySvg className="mysvg"/>
                </div>

                <div className="copyright">
                    <p>Made with heart by Logion Solutions, HOK - 2021 | Privacy Policy</p>
                </div>
    </section>
        </div>
    )
}

export default Footer
