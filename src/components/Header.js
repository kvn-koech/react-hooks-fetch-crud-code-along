import React from "react";

function Header({ isDarkMode, onDarkModeClick, cartItems }) {
  // Calculate total items in cart
  const cartItemCount = cartItems ? cartItems.filter(item => item.isInCart).length : 0;

  return (
    <header className={isDarkMode ? "dark" : "light"}>
      <div className="header-content">
        <h2>Shopster</h2>
        <div className="header-controls">
          <button 
            className="cart-button"
            onClick={() => console.log("View cart clicked")}
            aria-label="Shopping cart"
          >
            🛒 {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </button>
          <button 
            onClick={onDarkModeClick}
            aria-label={`Toggle ${isDarkMode ? "light" : "dark"} mode`}
          >
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;