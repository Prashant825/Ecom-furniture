import React from 'react';
import BannerImg from '../assets/images/slider-img1.png';
import BannerImg2 from '../assets/images/slider-img2.png';
import BannerImg3 from '../assets/images/slider-img3.png';
export default function shop() {
    return (
        <div>

            {/* <!-- Banner Section --> */}
            <section className="banner-container">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* <!-- First Slide --> */}
                        <div className="carousel-item active">
                            <img src={BannerImg} className="d-block w-100" alt="Banner 1" />
                            <div className="carousel-caption d-none d-md-block">

                                <a href="#shop-now" className="btn btn-warning btn-lg">Shop Now</a>
                            </div>
                        </div>
                        {/* <!-- Second Slide --> */}
                        <div className="carousel-item">
                            <img src={BannerImg2} className="d-block w-100" alt="Banner 2" />
                            <div className="carousel-caption d-none d-md-block">

                                <a href="#shop-now" className="btn btn-warning btn-lg">Shop Now</a>
                            </div>
                        </div>
                        {/* <!-- Third Slide --> */}
                        <div className="carousel-item">
                            <img src={BannerImg3} className="d-block w-100" alt="Banner 3" />
                            <div className="carousel-caption d-none d-md-block">

                                <a href="#shop-now" className="btn btn-warning btn-lg">Shop Now</a>
                            </div>
                        </div>
                    {/* <!-- Carousel Controls --> */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
            </section>

            {/* <!-- Categories Section --> */}
            <section className="categories py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Shop by Category</h2>
                    <div className="row">
                        {/* <!-- Electronics Category --> */}
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/350x200?text=Electronics" className="card-img-top" alt="Electronics" />
                                <div className="card-body">
                                    <h5 className="card-title">Electronics</h5>
                                    <p className="card-text">Explore the latest in technology and gadgets.</p>
                                    <a href="#" className="btn btn-primary">Shop Now</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Clothing Category --> */}
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/350x200?text=Clothing" className="card-img-top" alt="Clothing" />
                                <div className="card-body">
                                    <h5 className="card-title">Clothing</h5>
                                    <p className="card-text">Discover the newest fashion trends.</p>
                                    <a href="#" className="btn btn-primary">Shop Now</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Home Decor Category --> */}
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/350x200?text=Home+Decor" className="card-img-top" alt="Home Decor" />
                                <div className="card-body">
                                    <h5 className="card-title">Home Decor</h5>
                                    <p className="card-text">Find stylish furniture and home accessories.</p>
                                    <a href="#" className="btn btn-primary">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Products Section --> */}
            <section className="products py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5">Featured Products</h2>
                    <div className="row">
                        {/* <!-- Product 1 --> */}
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/350x200?text=Smartphone" className="card-img-top" alt="Smartphone" />
                                <div className="card-body">
                                    <h5 className="card-title">Smartphone</h5>
                                    <p className="card-text">$299.99</p>
                                    <a href="#" className="btn btn-success">Add to Cart</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Product 2 --> */}
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/350x200?text=Laptop" className="card-img-top" alt="Laptop" />
                                <div className="card-body">
                                    <h5 className="card-title">Laptop</h5>
                                    <p className="card-text">$799.99</p>
                                    <a href="#" className="btn btn-success">Add to Cart</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Product 3 --> */}
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/350x200?text=Headphones" className="card-img-top" alt="Headphones" />
                                <div className="card-body">
                                    <h5 className="card-title">Headphones</h5>
                                    <p className="card-text">$99.99</p>
                                    <a href="#" className="btn btn-success">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
