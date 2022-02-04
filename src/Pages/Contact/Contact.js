import React, {useEffect} from 'react'
import './Contact.scss'
import Footer from '../../Components/Footer';
import ScrollProxy from '../../Components/ScrollProxy'
import gsap from 'gsap';
import Header from '../../Components/Header';

function Contact() {

    useEffect(()=>{

        gsap.timeline({
            scrollTrigger:{
                trigger: "#contact",
                scroller: 'body',
                start: 'top 350px',
               
            }
        }).from('.bg-text span',{
            y: '100px',
            opacity: 0,
            stagger: 0.2,
        }).from('#contact .contacts .line-18 span', {
            y: '-100px',
            opacity: 0,
            stagger: 0.04,
        }, 0).from('#contact .contacts .line-19 span', {
            y: '-100px',
            opacity: 0,
            stagger: 0.04
        }, 0).from('.form-custom', {
            y: '50px',
            stagger: 0.15,
            opacity: 0,
            delay: 0.5,
        }, "<0.5")
    }, [] )
    
    return (
        
        <div id="contact">

        <ScrollProxy />
         <Header/>

        <div className="contacts">
            <div className="small-wrapper">
            <div className="bg-text">
                <span>M</span>
                <span>E</span>
                <span>E</span>
                <span>T</span>
            </div>
            <h1>
                <div className="line line-18">
                    <span>T</span>
                    <span>e</span>
                    <span>l</span>
                    <span>l </span>
                    <span>u</span>
                    <span>s </span>
                </div>

                <div className="line line-19">
                    <span>A</span>
                    <span>b</span>
                    <span>o</span>
                    <span>u</span>
                    <span>t </span>
                    <span>y</span>
                    <span>o</span>
                    <span>u</span>
                    
                </div>
            </h1>

            <div className="form-custom">
                <div className="card">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                
                                <div className="col-md-4"> <input type="text" placeholder="name" className="form-control" /> </div>
                                <div className="col-md-4"> <input type="text" placeholder="email" className="form-control" /> </div>
                                <div className="col-md-4"> <input type="tel" placeholder="tel" className="form-control" /> </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12 col-12"> <textarea className="form-control textarea" placeholder="message"rows="4"></textarea> </div>
                            </div>
                            
                            <div className="main-btn">
                                <div className="dark-link__parent">
                                    {/* <span className="dash"></span> */}
                                    <a href="/" className="dark-link">Send</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            
           
        </div>
            <Footer/>
        </div>
    )
}

export default Contact
