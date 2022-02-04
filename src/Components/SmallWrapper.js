import Button from './Button'
import React , {useEffect} from 'react'
import gsap from 'gsap';
import './SmallWrapper.scss'
import {Link} from 'react-router-dom'
// import ScrollProxy from '../Components/ScrollProxy'


function SmallWrapper(props) {

    function splitText2(){
        let titleText = document.querySelector('.line-1');
        let text = titleText.textContent.split("");
        let result = "";

        text.forEach((t)=>{
            result += "<span>" + t + "</span>";
        })

        titleText.innerHTML = result
    }

    function splitText3(){
        let titleText = document.querySelector('.line-2');
        let text = titleText.textContent.split("");
        let result = "";

        text.forEach((t)=>{
            result += "<span>" + t + "</span>";
        })

        titleText.innerHTML = result
    }

    function splitText4(){
        let titleText = document.querySelector('.line-3');
        let text = titleText.textContent.split("");
        let result = "";

        text.forEach((t)=>{
            result += "<span>" + t + "</span>";
        })

        titleText.innerHTML = result
    }

    function splitText1(){
        let aboutText = document.querySelector('.about-text');
        let text = aboutText.textContent.split("");
        let result = "";

        text.forEach((t)=>{
            result += "<span>" + t + "</span>";
        })

        aboutText.innerHTML = result
    }
    

    useEffect(()=>{
        splitText1();
        splitText2();
        splitText3();
        splitText4();

        gsap.timeline({
            scrollTrigger:{
                trigger: "#smallWrapper",
                scroller: 'body',
                start: 'top 250px',
                            
            }
        }).from('.bg-text span', {
            y: '100px',
            opacity: 0,
            stagger: 0.2,
        }).from('.small-wrapper .line-1 span', {
            y: '-100px',
            opacity: 0,
            stagger: 0.04,
        }, 0).from('.small-wrapper .line-2 span', {
            y: '-100px',
            opacity: 0,
            stagger: 0.04
        }, 0).from('.small-wrapper .line-3 span', {
            y: '-100px',
            opacity: 0,
            stagger: 0.04
        }, 0).from('.fade-in-p', {
            y: '50px',
            stagger: 0.15,
            opacity: 0,
            delay: 0.5,
        }, "<0.2").from('.btn-appear',{
            opacity: 0,
            y: '10px'
        }, "<0.3");
    }, [] )

    return (

        <div id="smallWrapper">
        
            <div className="scroll scroll_top about__scroll scroll_animated" data-animated-one=""></div>

            <div className="bg-text about-text">
                About
            </div>
            
            
            <div className="small-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <h3>
                            <div className="line line-1">
                                {props.line1}
                            </div>
                            
                            <div className="line line-2">
                                {props.line2}
                            </div>

                            <div className="line line-3">
                                {props.line3}
                            </div>

                        </h3>
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <p className="fade-in-p">
                            {props.para1}
                        </p>
                    </div>

                    <div className="col-12 col-md-6">
                        <p className="fade-in-p">
                            {props.para2}
                        </p>    
                    </div>

                    <div className="btn-appear .col-12 .col-md-6">

                        <Link to="/contacts">
                            <Button/>
                        </Link>
                        
                    </div>
                </div>

                
                
            </div>

            <div className="scroll scroll_bottom about__scroll scroll_animated" data-animated-one=""></div>

        </div>
    )
}

export default SmallWrapper
