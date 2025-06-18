import React, { useState, useRef, useEffect } from "react";
import styles from "./amazonNavbar.module.css";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import {
  FaBars,
  FaMapMarkerAlt,
  FaSearch,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";

const AmazonNavbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownBlur, setDropdownBlur] = useState(false);
  const blurRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Handler for dropdown selection
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropdownBlur(true);
  };

  // Handler for clicking outside the blur overlay
  const handleBlurOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const search = searchContainerRef.current;
    if (search && blurRef.current) {
      // Use event.target to check if click is inside search
      if (!search.contains(e.target as Node)) {
        setDropdownBlur(false);
      }
    } else {
      setDropdownBlur(false);
    }
  };

  useEffect(() => {
    // Remove overlay on route change
    setDropdownBlur(false);
  }, [location]);

  return (
    <>
      {sidebarOpen && (
        <>
          <div
            className={styles.blurOverlay}
            onClick={() => setSidebarOpen(false)}
          />
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </>
      )}
      {/* Blur overlay should be rendered at the top level so it covers everything including the navbar */}
      {dropdownBlur && (
        <div
          ref={blurRef}
          className={styles.blurOverlay}
          onClick={handleBlurOverlayClick}
        />
      )}
      <nav className={styles.navbar} ref={navRef}>
        <div className={styles.topBar}>
          {/* Logo and Sidebar */}
          <div className={styles.logo}>
            <Link to="/">Amazon</Link>
          </div>
          {/* Delivered To */}
          <div className={styles.deliveredTo}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaMapMarkerAlt style={{ marginRight: 4 }} />
              <span>Delivered to</span>
            </div>
            <strong>Bangladesh</strong>
          </div>
          {/* Centered Searchbar */}
          <div className={styles.centerSection} ref={searchContainerRef}>
            <div className={styles.searchContainer}>
              <select
                className={styles.categorySelect}
                onChange={handleDropdownChange}
              >
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="mobiles">Mobiles</option>
                <option value="luggage">Luggage</option>
              </select>
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Search..."
              />
              <button className={styles.searchButton} aria-label="Search">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Sign In, Account & Lists, Returns & Orders, Cart */}
          <div className={styles.rightIcons}>
            <div className={styles.icons}>
              <div className={styles.accountSection}>
                <span className={styles.signIn}>Hello, Sign in</span>
                <div className={styles.accountLists}>
                  <strong>Account & Lists</strong>
                </div>
              </div>
              <div className={styles.returnsOrders} tabIndex={0}>
                <span>Returns</span>
                <strong>& Orders</strong>
              </div>
              <span className={styles.cart}>
                <FaShoppingCart style={{ marginRight: 4 }} />
                <strong>Cart</strong>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.menuBar}>
          <ul className={styles.menuList}>
            <li>
              <button
                className={styles.sidebarBtn}
                onClick={() => setSidebarOpen(true)}
              >
                <FaBars />
                All Category
              </button>
            </li>
            <li>
              <Link to="/best-sellers">Best Sellers</Link>
            </li>
            <li>
              <Link to="/mobiles">Mobiles</Link>
            </li>
            <li>
              <Link to="/fashion">Fashion</Link>
            </li>
            <li>
              <Link to="/electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/prime">Prime</Link>
            </li>
            <li>
              <Link to="/home-kitchen">Home & Kitchen</Link>
            </li>
            <li>
              <Link to="/amazon-pay">Amazon Pay</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AmazonNavbar;
