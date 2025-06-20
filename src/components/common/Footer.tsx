import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerLinksSection}>
      <div>
        <h4>Get to Know Us</h4>
        <ul>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Amazon</li>
          <li>Investor Relations</li>
          <li>Amazon Devices</li>
          <li>Amazon Science</li>
        </ul>
      </div>
      <div>
        <h4>Make Money with Us</h4>
        <ul>
          <li>Sell products on Amazon</li>
          <li>Sell on Amazon Business</li>
          <li>Sell apps on Amazon</li>
          <li>Become an Affiliate</li>
          <li>Advertise Your Products</li>
          <li>Self-Publish with Us</li>
          <li>Host an Amazon Hub</li>
          <li>&rsaquo; See More Make Money with Us</li>
        </ul>
      </div>
      <div>
        <h4>Amazon Payment Products</h4>
        <ul>
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
          <li>Amazon Currency Converter</li>
        </ul>
      </div>
      <div>
        <h4>Let Us Help You</h4>
        <ul>
          <li>Amazon and COVID-19</li>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Shipping Rates & Policies</li>
          <li>Returns & Replacements</li>
          <li>Manage Your Content and Devices</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
    <div className={styles.footerBrandRow}>
      <div className={styles.footerBrandLogo}>amazon</div>
      <div className={styles.footerBrandOptions}>
        <button>English</button>
        <button>USD - U.S. Dollar</button>
        <button>United States</button>
      </div>
    </div>
    <div className={styles.footerBottomLinks}>
      {/* Add more links as needed, see screenshot for structure */}
      <div>
        <span>Amazon Music</span>
        <span>Amazon Ads</span>
        <span>6pm</span>
        <span>AbeBooks</span>
        <span>ACX</span>
        <span>Sell on Amazon</span>
        <span>Veeqo</span>
      </div>
      <div>
        <span>Amazon Business</span>
        <span>AmazonGlobal</span>
        <span>Amazon Web Services</span>
        <span>Audible</span>
        <span>Box Office Mojo</span>
        <span>Goodreads</span>
        <span>IMDb</span>
      </div>
      <div>
        <span>IMDbPro</span>
        <span>Kindle Direct Publishing</span>
        <span>Prime Video Direct</span>
        <span>Shopbop</span>
        <span>Blink</span>
        <span>Neighbors App</span>
        <span>Amazon Subscription Boxes</span>
        <span>PillPack</span>
        <span>Ring</span>
      </div>
    </div>
  </footer>
);

export default Footer;
