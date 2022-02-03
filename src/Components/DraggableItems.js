import React, {useEffect} from 'react'
import './DraggableItems.scss'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

function DraggableItems() {


    function splitTextHome1(){
        let titleText = document.querySelector('#draggable .line-1');
        let text = titleText.textContent.split("");
        let result = "";

        text.forEach((t)=>{
            result += "<span>" + t + "</span>";
        })

        titleText.innerHTML = result
    }

    
    function splitTextHome2(){
        let titleText = document.querySelector('#draggable .line-2');
        let text = titleText.textContent.split("");
        let result = "";

        text.forEach((t)=>{
            result += "<span>" + t + "</span>";
        })

        titleText.innerHTML = result
    }

    

    React.useEffect(()=>{
        const slider = document.querySelector('.items');
        const sliderItems = document.querySelectorAll('.item')
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
        isDown = true;
        //   slider.classList.add('active');
        for(var i = 0; i < sliderItems.length; i++){
            sliderItems[i].classList.add('active')
        }
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        
        });

        slider.addEventListener('mouseleave', () => {
        isDown = false;
        //   slider.classList.remove('active');
        for(var i = 0; i < sliderItems.length; i++){
            sliderItems[i].classList.remove('active')
        }
        });

        slider.addEventListener('mouseup', () => {
        isDown = false;
        //   slider.classList.remove('active');
        for(var i = 0; i < sliderItems.length; i++){
            sliderItems[i].classList.remove('active')
        }
        });

        slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;  // stop the fn from running
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    
        });


        //   touchEvents

        slider.addEventListener('touchstart', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('touchend', () => {
        isDown = false;
        slider.classList.remove('active');
        });

        slider.addEventListener('touchcancel', () => {
        isDown = false;
        slider.classList.remove('active');
        });

        slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;  // stop the fn from running
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
        });
    }, [])
        
    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{

        splitTextHome1()
        splitTextHome2();

        var tl3 = gsap.timeline({
            scrollTrigger:{
                trigger: "#draggable",
                scroller: 'body',
                start: 'top 250px',
            }
        }).fromTo('#draggable .bg-text span', {
            y: '100px',
            opacity: 0,
            stagger: 0.2,
        }, {
            y: '0px',
            opacity: 0.02,
            stagger: 0.2
        }, 0).from('#draggable .line-1 span', {
            y: '-100px',
            opacity: 0,
            stagger: 0.04,

        }, "<0.2").from('#draggable .line-2 span', {
            y: '-100px',
            opacity: 0,
            stagger: 0.04
        }, "<0.2").from('#draggable .about-content', {
            y: '30px',
            stagger: 0.15,
            opacity: 0,

        }, "<0.3").from('#draggable .inner-card', {
            y: '30px',
            stagger: 0.1,
            opacity: 0,

        }, "<0.35").from('#draggable .item', {
            opacity: 0,
            stagger: 0.1
        }, "<0.3");
        

    }, [] )
    
    return (
        
        <div>
            <section id="draggable">
                 <div className="scroll scroll_top about__scroll scroll_animated" data-animated-one=""></div>
                <div className="container-fluid">
                    <div className="bg-text">
                        <span>F</span>
                        <span>E</span>
                        <span>A</span>
                        <span>T</span>
                    </div>
                    <div className="about">
                        <div className="row">
                            <div className="col-12 col-md-6">

                            </div>
                            <div className="col-12 col-md-6">
                                <div className="about-main">
                                    <h3 className="about-head">
                                        <div className="line line-1">
                                        {/* <span>W</span>
                                        <span>e </span>
                                        <span>a</span>
                                        <span>r</span>
                                        <span>e </span>
                                        <span>L</span>
                                        <span>o</span>
                                        <span>r</span>
                                        <span>e</span>
                                        <span>m </span>
                                        <span>I</span>
                                        <span>p</span>
                                        <span>s</span>
                                        <span>u</span>
                                        <span>m </span>
                                        <span>I</span>
                                        <span>t</span>
                                        <span>s </span> */}
                                        
                                        Intelligent designs 
                                    </div>

                                    <div className="line line-2">
                                        for every lifestyle
                                    </div>
                                        
                                    </h3>
                                    <p className="about-content">We have delivered high-end interiors for hospitality, office, retail and residential spaces from design to handover. We are a multi-cultural team of passionate individuals dedicated to delivering a unique concept with all our projects. This is always achieved through a tailored approach reflecting client's needs and aspirations.</p>
                                    <div className="row">
                                        <div className="col-6">     
                                            <div className="inner-card">
                                                <p className="inner-card__title">Projects Completed</p>
                                                <p className="inner-card__content">1500 +</p>
                                            </div>

                                            <div className="inner-card">
                                                <p className="inner-card__title">Happy Customers</p>
                                                <p className="inner-card__content">4500 +</p>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="inner-card">
                                                 <p className="inner-card__title">National Awards</p>
                                                 <p className="inner-card__content">18</p>
                                            </div>

                                            <div className="inner-card">
                                                <p className="inner-card__title">Client Satisfaction</p>
                                                <p className="inner-card__content">100%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider">
                        <div className="items">
                            <div className="item item1"></div>
                            <div className="item item2"></div>
                            <div className="item item3"></div>
                            <div className="item item4"></div>
                            <div className="item item5"></div>
                            <div className="item item6"></div>
                            <div className="item item7"></div>
                            <div className="item item7"></div>                
                        </div>
                    </div>
                </div>

                <div className="scroll scroll_bottom about__scroll scroll_animated" data-animated-one=""></div>
            </section>
            
        </div>
        
    )

   
}

export default DraggableItems
