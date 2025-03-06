import React from "react";
import {Link} from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Home.css';




const Home = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    var latest = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
      

    return(
        <>
            <section className="hero py-5">


                <Slider {...settings}>                
                <div>
                    <div className="container py-5">
                        <div className="row">
                        <div class="col-md-8">
                            <h1>Naslov prvog slajda!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                            <Link to="/exchange" className="btn">IZM Exchange</Link>
                        </div>
                        <div class="col-md-4">
                            <img src="img/placeholder_img.svg" alt="Placeholder 1" />
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="container py-5">
                        <div class="row">
                        <div class="col-md-8">
                            <h1>Naslov drugog slajda!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                            <Link to="/exchange" className="btn">IZM Exchange</Link>
                        </div>
                        <div class="col-md-4">
                            <img src="img/placeholder_img.svg" alt="Placeholder 1" />
                        </div>
                        </div>
                    </div>
                </div>
                </Slider>
            </section>

            <section class="featured">
                <div class="container py-5 slider">
                    <div class="slide py-3">
                    <div class="row">
                        <div class="col-md-3">
                        <img src="img/placeholder_img.svg" alt="Placeholder 2" />
                        </div>
                        <div class="col-md-8 offset-md-1">
                        <h1>Nibh in dolor bibendum.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                        <Link to="/" class="btn">Discover Menu</Link>
                        </div>
                    </div>
                    </div>
                    <div class="slide py-3">
                    <div class="row">
                        <div class="col-md-3">
                        <img src="img/placeholder_img.svg" alt="Placeholder 3" />
                        </div>
                        <div class="col-md-6 offset-md-1">
                        <h1>Nibh in dolor bibendum.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                        <Link to="/" class="btn">Discover Menu</Link>
                        </div>
                    </div>
                    </div>
                    <div class="slide py-3">
                    <div class="row">
                        <div class="col-md-3">
                        <img src="img/placeholder_img.svg" alt="Placeholder 4" />
                        </div>
                        <div class="col-md-6 offset-md-1">
                        <h1>Bibendum et sit aliquam!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                        <Link to="/" class="btn">Discover Menu</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section class="featured latest pt-3 my-4 pb-4">
                <div class="container py-5">
                    <h1>Latest Articles</h1>
                    <Slider {...latest}>
                        <div class="py-3 mb-3">
                            <div class="mb-4">
                                <img src="img/placeholder_img.svg" alt="Placeholder 2" />
                            </div>
                            <div>
                                <h1>Nibh in dolor bibendum.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                                <Link to="/" class="btn mt-3">Discover Menu</Link>
                            </div>
                        </div>
                        <div class="py-3 mb-3">
                            <div class="mb-4">
                                <img src="img/placeholder_img.svg" alt="Placeholder 2" />
                            </div>
                            <div>
                                <h1>Nibh in dolor bibendum.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                                <Link to="/" class="btn mt-3">Discover Menu</Link>
                            </div>
                        </div>
                        <div class="py-3 mb-3">
                            <div class="mb-4">
                                <img src="img/placeholder_img.svg" alt="Placeholder 2" />
                            </div>
                            <div>
                                <h1>Nibh in dolor bibendum.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                                <Link to="/" class="btn mt-3">Discover Menu</Link>
                            </div>
                        </div>
                        <div class="py-3 mb-3">
                            <div class="mb-4">
                                <img src="img/placeholder_img.svg" alt="Placeholder 2" />
                            </div>
                            <div>
                                <h1>Nibh in dolor bibendum.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                                <Link to="/" class="btn mt-3">Discover Menu</Link>
                            </div>
                        </div>
                        <div class="py-3 mb-3">
                            <div class="mb-4">
                                <img src="img/placeholder_img.svg" alt="Placeholder 2" />
                            </div>
                            <div>
                                <h1>Nibh in dolor bibendum.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                                <Link to="/" class="btn mt-3">Discover Menu</Link>
                            </div>
                        </div>
                        <div class="py-3 mb-3">
                            <div class="mb-4">
                                <img src="img/placeholder_img.svg" alt="Placeholder 2" />
                            </div>
                            <div>
                                <h1>Nibh in dolor bibendum.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</p>
                                <Link to="/" class="btn mt-3">Discover Menu</Link>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Home;