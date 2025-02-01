import React from 'react'

export default function footer() {
  return (
    <div>

        {/* <!-- Footer Section --> */}
    <footer class="text-white footer-section py-4">
        <div class="container">
            <div class="row footer-content">
                {/* <!-- About Us Section --> */}
                <div class="col-md-4 mb-3">
                    <h4>About Us</h4>
                    <p>We are an online store offering a wide variety of products at amazing prices!</p>
                </div>

                {/* <!-- Quick Links Section --> */}
                <div class="col-md-4 mb-3">
                    <h4>Quick Links</h4>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-white text-decoration-none">Privacy Policy</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Terms & Conditions</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Returns</a></li>
                        <li><a href="#" class="text-white text-decoration-none">Shipping</a></li>
                    </ul>
                </div>

                {/* <!-- Contact Us Section --> */}
                <div class="col-md-4 mb-3">
                    <h4>Contact Us</h4>
                    <p>Email: support@shop.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
            </div>

            {/* <!-- Footer Bottom --> */}
            <div class="text-center mt-4">
                <p>&copy; 2025 ShopLogo. All Rights Reserved.</p>
            </div>
        </div>
    </footer> 
    </div>
  )
};
