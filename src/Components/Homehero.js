import React from 'react'
import './Homehero.scss'
import 'bootstrap'
import { FaInstagram , FaFacebookF ,FaPinterestP} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Homehero() {
    return (
        <div>
            <div id="hero">
                <div className="inner-hero">
                <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4500">
                    <div className="container-fluid">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" >
                                <span>01</span>
                                <span className='indi-content'>Modern Residential<br/>Living</span>
                                <span className='car-dash'></span>
                            </button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">
                                <span>02</span>
                                <span className='indi-content'>Reality beyond<br/>Imagination</span>
                                <span className='car-dash'></span>
                            </button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">
                                <span>03</span>
                                <span className='indi-content'>Tattoo Parlor<br/>Ahmedabad</span>
                                <span className='car-dash'></span>
                            </button>
                        </div>
                    </div>
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active first">
                           
                            <div className="carousel-caption d-block d-md-block">
                                <div className="caption-inner">
                                    <span className="number"><span>01</span>/03</span>
                                    <div className="caption-content">
                                        <div className="line">
                                            <h2>State-of-art</h2>
                                        </div>
                                        <div className="line">
                                            <h2>Design</h2>
                                        </div>
                                        <Link to="/projects/1" className='caption-link'>View Project</Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item second">
                            
                            <div className="carousel-caption d-block d-md-block">
                                <div className="caption-inner">
                                    <span className="number" name="num"><span>02</span>/03</span>
                                    <div className="caption-content">
                                        <div className="line">
                                            <h2>Playful, Modern</h2>
                                        </div>
                                        <div className="line">
                                            <h2>and Inspirational</h2>
                                        </div>
                                        <Link to="/projects/2" className='caption-link'>View Project</Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item third">
                         
                            <div className="carousel-caption d-block d-md-block">
                                <div className="caption-inner">
                                    <span className="number"><span>03</span>/03</span>
                                    <div className="caption-content">
                                        <div className="line">
                                            <h2>International style</h2>
                                        </div>
                                        {/* <div className="line">
                                            <h2>with utter</h2>
                                        </div> */}
                                        <Link to="/projects/3" className='caption-link'>View Project</Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                    </div>

                    <div className="social-share">
                        <FaInstagram/>
                        <FaFacebookF/>
                        <FaPinterestP/>
                    </div>

                    <div className="animated-dash">
                
                    </div>
            </div>
        </div>
           
        </div>
    )

    
}

export default Homehero
