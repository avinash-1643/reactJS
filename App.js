import React from 'react';
import ReactDOM from 'react-dom/client';
/**
 * header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -Resturant Container
 *     -Resturant Card
 * footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */

const Header = () => {
        return(
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src="https://www.equinetmedia.com/hubfs/How-to-find-b2b-blog-images.png" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search restaurants..." />
            </div>
            <div className="restaurant-container">
                <RestaurantCard />
            </div>
        </div>
    );
}

const RestaurantCard = () => {
        return(
                <div className="restaurant-card">
                    <img className="restaurant-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/f8244b2c-80d1-464a-83ae-903640c184d5_32399.JPG" alt="Restaurant" />
                    <h3>Test Name</h3>
                    <p>Restaurant Description</p>
                </div>
        );
}

const AppLayout = () => {
        return (
            <div className="app">
                <Header />
                <Body />
            </div>
        );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
