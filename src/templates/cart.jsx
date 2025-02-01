import React from 'react'

export default function cart() {
    return (
        <div>
            <section className="cart-section p_100">
                <h2>Your Shopping Cart</h2>

                {/* <!-- Cart Table --> */}
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="cart-item">
                                    <img src="https://via.placeholder.com/100" alt="Product 1" />
                                    <span>Smartphone</span>
                                </div>
                            </td>
                            <td>$299.99</td>
                            <td>
                                <input type="number" value="1" min="1" className="quantity" />
                            </td>
                            <td className="item-total">$299.99</td>
                            <td>
                                <button className="remove-item">Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-item">
                                    <img src="https://via.placeholder.com/100" alt="Product 2" />
                                    <span>Laptop</span>
                                </div>
                            </td>
                            <td>$799.99</td>
                            <td>
                                <input type="number" value="1" min="1" className="quantity" />
                            </td>
                            <td className="item-total">$799.99</td>
                            <td>
                                <button className="remove-item">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* <!-- Cart Summary --> */}
                <div className="cart-summary">
                    <p><strong>Total Price:</strong> $1099.98</p>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </section>
        </div>
    )
}
