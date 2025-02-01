import React from 'react'

export default function contact() {
    return (
        <div>

            <section className="contact-section">
                <h2>Contact Us</h2>
                <p>If you have any questions, concerns, or feedback, feel free to reach out to us using the contact form below or through our contact details.</p>

                {/* <!-- Contact Form --> */}
                <form action="#" method="POST" className="contact-form">
                    <div className="form-group">
                        <label for="name">Your Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="form-group">
                        <label for="email">Your Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label for="message">Your Message:</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>

                <div className="contact-info">
                    <h3>Our Contact Information</h3>
                    <p><strong>Email:</strong> support@myshop.com</p>
                    <p><strong>Phone:</strong> +1 234 567 890</p>
                    <p><strong>Address:</strong> 123 E-Commerce St, Suite 456, City, Country</p>
                </div>
            </section>
        </div>
    )
}
