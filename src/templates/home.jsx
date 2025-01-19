import React from 'react'
import SliderImg1 from '../assets/images/slider-img1.png';
import SliderImg2 from '../assets/images/slider-img2.png';
import SliderImg3 from '../assets/images/slider-img3.png';
import SliderImg4 from '../assets/images/slider-img4.png';
import SliderImg5 from '../assets/images/slider-img5.png';
 export default function home() {
    return (

        <div>
            {/* <!-- Banner Carousel Section --> */}
            <section id="banner" className="mb-5">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* <!-- First Slide --> */}
                        <div className="carousel-item active">
                            <img src={SliderImg1} className="d-block w-100" alt="Banner 1" />
                            <div className="carousel-caption d-none d-md-block">
                               
                                <a href="#shop-now" className="btn btn-warning btn-lg">Shop Now</a>
                            </div>
                        </div>
                        {/* <!-- Second Slide --> */}
                        <div className="carousel-item">
                            <img src={SliderImg2} className="d-block w-100" alt="Banner 2"/>
                                <div className="carousel-caption d-none d-md-block">
                                    
                                    <a href="#shop-now" className="btn btn-warning btn-lg">Shop Now</a>
                                </div>
                        </div>
                        {/* <!-- Third Slide --> */}
                        <div className="carousel-item">
                            <img src={SliderImg3} className="d-block w-100" alt="Banner 3" />
                            <div className="carousel-caption d-none d-md-block">
                                
                                <a href="#shop-now" className="btn btn-warning btn-lg">Shop Now</a>
                            </div>
                        </div>

                        {/* <!--Four Slide --> */}
                        <div className="carousel-item">
                            <img src={SliderImg4} className="d-block w-100" alt="Banner 3" />
                            <div className="carousel-caption d-none d-md-block">
                                
                                <a href="#shop-now" className="btn btn-warning btn-lg">Shop Now</a>
                            </div>
                        </div>
                        {/* <!--Five Slide --> */}
                        <div className="carousel-item">
                            <img src={SliderImg5} className="d-block w-100" alt="Banner 3" />
                            <div className="carousel-caption d-none d-md-block">
                                
                                <a href="#shop-now" className="btn btn-warning btn-lg">Shop Now</a>
                            </div>
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
            </section>

            {/* <!-- Main Content Section --> */}
            <div className="container my-5">

                {/* <!-- Featured Product Section --> */}
                <section id="featured-product" className="text-center mb-5">
                    <h2 className="mb-4">Featured Product</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://via.placeholder.com/400x400" className="img-fluid" alt="Featured Product" />
                        </div>
                        <div className="col-md-6">
                            <h3>Product Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel urna eu enim efficitur.</p>
                            <p className="h4 text-warning">$99.99</p>
                            <button className="btn btn-primary mt-3">Add to Cart</button>
                        </div>
                    </div>
                </section>

                {/* <!-- Product Categories Section --> */}
                <section id="categories" className="text-center mb-5">
                    <h2 className="mb-4">Shop by Categories</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="category-card">
                                <img src="https://via.placeholder.com/300x300" className="img-fluid" alt="Category 1" />
                                <h4 className="mt-3">Category 1</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category-card">
                                <img src="https://via.placeholder.com/300x300" className="img-fluid" alt="Category 2" />
                                <h4 className="mt-3">Category 2</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category-card">
                                <img src="https://via.placeholder.com/300x300" className="img-fluid" alt="Category 3" />
                                <h4 className="mt-3">Category 3</h4>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Popular Items Section --> */}
                <section id="popular-items" className="text-center mb-5">
                    <h2 className="mb-4">Popular Items</h2>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img src="https://via.placeholder.com/300x300" className="card-img-top" alt="Product 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Product 1</h5>
                                    <p className="card-text">$49.99</p>
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="https://via.placeholder.com/300x300" className="card-img-top" alt="Product 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Product 2</h5>
                                    <p className="card-text">$79.99</p>
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="https://via.placeholder.com/300x300" className="card-img-top" alt="Product 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Product 3</h5>
                                    <p className="card-text">$89.99</p>
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="https://via.placeholder.com/300x300" className="card-img-top" alt="Product 4" />
                                <div className="card-body">
                                    <h5 className="card-title">Product 4</h5>
                                    <p className="card-text">$119.99</p>
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Promotions Section --> */}
                <section id="promotions" className="bg-warning text-center py-5">
                    <h2 className="text-dark mb-4">Special Promotions</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Discount Offer</h3>
                            <p>Get 20% off on your first order!</p>
                        </div>
                        <div className="col-md-6">
                            <h3>Free Shipping</h3>
                            <p>Free shipping on orders over $100.</p>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
};
