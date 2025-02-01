import React from 'react'

export default function checkout() {
    return (
        <div>

            <section className="checkout-section">
                <h2>Checkout</h2>

                {/* <!-- Order Summary --> */}
                <div className="order-summary">
                    <h3>Your Order</h3>
                    <table className="order-summary-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Smartphone</td>
                                <td>$299.99</td>
                                <td>1</td>
                                <td>$299.99</td>
                            </tr>
                            <tr>
                                <td>Laptop</td>
                                <td>$799.99</td>
                                <td>1</td>
                                <td>$799.99</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="order-total">
                        <p><strong>Total Price: $1099.98</strong></p>
                    </div>
                </div>

                {/* <!-- Billing Information Form --> */}
                <div className="billing-info">
                    <h3>Billing Information</h3>
                    <form action="#" method="POST" className="checkout-form">
                        <div className="form-group">
                            <label for="full-name">Full Name</label>
                            <input type="text" id="full-name" name="full-name" required />
                        </div>

                        <div className="form-group">
                            <label for="address">Address</label>
                            <input type="text" id="address" name="address" required />
                        </div>

                        <div className="form-group">
                            <label for="city">City</label>
                            <input type="text" id="city" name="city" required />
                        </div>

                        <div className="form-group">
                            <label for="zipcode">Zip Code</label>
                            <input type="text" id="zipcode" name="zipcode" required />
                        </div>

                        <div className="form-group">
                            <label for="country">Country</label>
                            <input type="text" id="country" name="country" required />
                        </div>

                        <div className="form-group">
                            <label for="payment-method">Payment Method</label>
                            <select id="payment-method" name="payment-method" required>
                                <option value="credit-card">Credit Card</option>
                                <option value="paypal">PayPal</option>
                                <option value="bank-transfer">Bank Transfer</option>
                            </select>
                        </div>

                        <button type="submit" className="submit-btn">Place Order</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
