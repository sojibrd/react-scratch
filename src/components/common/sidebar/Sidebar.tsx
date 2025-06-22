import React, { useState } from "react";
import styles from "./sidebar.module.scss";

// Define a type for sidebar items with optional properties
interface SidebarItem {
  label: string;
  submenu?: string;
  icon?: string;
  selected?: boolean;
}

const digitalContentDefault: SidebarItem[] = [
  { label: "Prime Video", submenu: "primeVideo" },
  { label: "Amazon Music", submenu: "amazonMusic" },
  { label: "Kindle E-readers & Books", submenu: "kindle" },
  { label: "Amazon Appstore", submenu: "appstore" },
];
const digitalContentAll: SidebarItem[] = [
  ...digitalContentDefault,
  { label: "Audible Audiobooks" },
  { label: "Amazon Photos" },
];

const shopByDepartmentDefault: SidebarItem[] = [
  { label: "Electronics", submenu: "electronics" },
  { label: "Computers", submenu: "computers" },
  { label: "Smart Home", submenu: "smartHome" },
  { label: "Arts & Crafts", submenu: "artsCrafts" },
];
const shopByDepartmentAll: SidebarItem[] = [
  ...shopByDepartmentDefault,
  { label: "Toys & Games" },
  { label: "Sports & Outdoors" },
  { label: "Automotive" },
];

const helpSettingsDefault: SidebarItem[] = [
  { label: "Your Account" },
  { label: "English", icon: "🌐" },
  { label: "United States", icon: "🇺🇸" },
  { label: "Customer Service" },
  { label: "Sign Out" },
];
const helpSettingsAll: SidebarItem[] = [
  ...helpSettingsDefault,
  { label: "Accessibility" },
  { label: "Feedback" },
];

const programsFeaturesDefault: SidebarItem[] = [
  { label: "Gift Cards", submenu: "giftCards" },
  { label: "Shop By Interest", submenu: "shopByInterest" },
  { label: "Amazon Live", submenu: "amazonLive" },
  { label: "International Shopping", submenu: "internationalShopping" },
];
const programsFeaturesAll: SidebarItem[] = [
  ...programsFeaturesDefault,
  { label: "Amazon Second Chance" },
];

const submenuData: Record<string, { title: string; options: string[] }> = {
  electronics: {
    title: "Electronics",
    options: [
      "Accessories & Supplies",
      "Camera & Photo",
      "Car & Vehicle Electronics",
      "Cell Phones & Accessories",
      "Computers & Accessories",
      "GPS & Navigation",
      "Headphones",
      "Home Audio",
      "Office Electronics",
      "Portable Audio & Video",
      "Security & Surveillance",
      "Service Plans",
      "Television & Video",
      "Video Game Consoles & Accessories",
      "Video Projectors",
      "Wearable Technology",
      "eBook Readers & Accessories",
    ],
  },
  computers: {
    title: "Computers",
    options: [
      "Laptops",
      "Desktops",
      "Monitors",
      "Computer Components",
      "Networking Products",
      "Computer Accessories",
      "Storage Devices",
      "Printers & Ink",
      "Tablet Accessories",
    ],
  },
  smartHome: {
    title: "Smart Home",
    options: [
      "Smart Lighting",
      "Smart Plugs & Outlets",
      "Security Cameras",
      "Smart Thermostats",
      "Smart Speakers",
      "Smart Locks",
      "Sensors",
    ],
  },
  artsCrafts: {
    title: "Arts & Crafts",
    options: [
      "Painting",
      "Drawing",
      "Craft Supplies",
      "Sewing",
      "Knitting & Crochet",
      "Beading & Jewelry Making",
      "Printmaking",
    ],
  },
  primeVideo: {
    title: "Prime Video",
    options: ["All Videos", "TV Shows", "Movies", "Kids", "Originals"],
  },
  amazonMusic: {
    title: "Amazon Music",
    options: ["All Music", "Playlists", "Stations", "Podcasts"],
  },
  kindle: {
    title: "Kindle E-readers & Books",
    options: [
      "Kindle Devices",
      "Kindle Books",
      "Kindle Unlimited",
      "Prime Reading",
    ],
  },
  appstore: {
    title: "Amazon Appstore",
    options: ["All Apps", "Games", "Deals", "Family"],
  },
  giftCards: {
    title: "Gift Cards",
    options: [
      "eGift Cards",
      "Gift Card Deals",
      "Birthday",
      "Business Gift Cards",
    ],
  },
  shopByInterest: {
    title: "Shop By Interest",
    options: ["Home & Kitchen", "Electronics", "Fashion", "Toys & Games"],
  },
  amazonLive: {
    title: "Amazon Live",
    options: ["Live Streams", "Upcoming Streams", "Past Streams"],
  },
  internationalShopping: {
    title: "International Shopping",
    options: ["Global Store", "International Deals", "Shipping Info"],
  },
};

const Sidebar: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [submenu, setSubmenu] = useState<string | null>(null);
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  const [showAllDigital, setShowAllDigital] = useState(false);
  const [showAllDepartment, setShowAllDepartment] = useState(false);
  const [showAllHelp] = useState(false);

  // Main menu content
  const mainMenu = (
    <>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Digital Content & Devices</div>
        <ul className={styles.menuList}>
          {(showAllDigital ? digitalContentAll : digitalContentDefault).map(
            (item) => (
              <li
                key={item.label}
                onClick={
                  item.submenu ? () => setSubmenu(item.submenu!) : undefined
                }
              >
                {item.icon && <span className={styles.icon}>{item.icon}</span>}
                {item.label}
                {item.submenu && <span className={styles.arrow}>&#8250;</span>}
              </li>
            )
          )}
        </ul>
        <div
          className={styles.seeAllRow}
          onClick={() => setShowAllDigital((v) => !v)}
        >
          {showAllDigital ? <>See less</> : <>See all</>}
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Shop by Department</div>
        <ul className={styles.menuList}>
          {(showAllDepartment
            ? shopByDepartmentAll
            : shopByDepartmentDefault
          ).map((item) => (
            <li
              key={item.label}
              className={item.selected ? styles.selected : undefined}
              onClick={
                item.submenu ? () => setSubmenu(item.submenu!) : undefined
              }
            >
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              {item.label}
              {item.submenu && <span className={styles.arrow}>&#8250;</span>}
            </li>
          ))}
        </ul>
        <div
          className={styles.seeAllRow}
          onClick={() => setShowAllDepartment((v) => !v)}
        >
          {showAllDepartment ? <>See less</> : <>See all</>}
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Programs & Features</div>
        <ul className={styles.menuList}>
          {(showAllPrograms
            ? programsFeaturesAll
            : programsFeaturesDefault
          ).map((item) => (
            <li
              key={item.label}
              onClick={
                item.submenu ? () => setSubmenu(item.submenu!) : undefined
              }
              style={{
                borderTop:
                  item.label === "Amazon Second Chance"
                    ? "1px solid #e3e6e6"
                    : undefined,
              }}
            >
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              {item.label}
              {item.submenu && <span className={styles.arrow}>&#8250;</span>}
            </li>
          ))}
        </ul>
        <div
          className={styles.seeAllRow}
          onClick={() => setShowAllPrograms((v) => !v)}
        >
          {showAllPrograms ? <>See less</> : <>See all</>}
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Help & Settings</div>
        <ul className={styles.menuList}>
          {(showAllHelp ? helpSettingsAll : helpSettingsDefault).map((item) => (
            <li key={item.label}>
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  // Generic submenu renderer
  const renderSubmenu = (key: string) => {
    const submenuObj = submenuData[key];
    if (!submenuObj) return null;
    return (
      <>
        <div className={styles.subHeader}>
          <button className={styles.backBtn} onClick={() => setSubmenu(null)}>
            &#8592;
          </button>
          <span className={styles.mainMenuLabel}>MAIN MENU</span>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>{submenuObj.title}</div>
          <ul className={styles.menuList}>
            {submenuObj.options.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <span className={styles.userIcon}>👤</span>
        <span className={styles.hello}>Hello, sojib</span>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
      </div>
      <div className={styles.sectionsScrollable}>
        {submenu ? renderSubmenu(submenu) : mainMenu}
      </div>
    </aside>
  );
};

export default Sidebar;
