import { React, useState,useRef } from "react";
import logo_img from "../../assets/image/logo.jpg";
import Navstyle from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
export default function Navbar() {
  const [toggle_menu_icon, set_menu_toggle_icon] = useState("inline");
  const [toggle_close_icon, set_close_toggle_icon] = useState("none");
  const mobile_menu=useRef("null")
  const toggle_icon = () => {
    if (toggle_menu_icon == "inline") {
      set_menu_toggle_icon((toggle_menu_icon) => (toggle_menu_icon = "none"));
      set_close_toggle_icon(
        (toggle_close_icon) => (toggle_close_icon = "inline")
      );
      console.log(mobile_menu.current)
      mobile_menu.current.style.transform='translateX(0)'
   
    } else {
      set_menu_toggle_icon((toggle_menu_icon) => (toggle_menu_icon = "inline"));
      set_close_toggle_icon(
        (toggle_close_icon) => (toggle_close_icon = "none")
      );
      mobile_menu.current.style.transform='translateX(100%)'
    }
  };
  return (
    <>
      <header>
        <nav className={Navstyle.navbar}>
          <div className={Navstyle.logo_div}>
            <img src={logo_img} className={Navstyle.logo} alt="" />
            <h2>FITNESS CLUB</h2>
          </div>
          <div>
            <ul className={Navstyle.nav_ul}>
              <li>
                <NavLink to="/" className={() => `${Navstyle.nav_link}`}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Facilities"
                  className={() => `${Navstyle.nav_link}`}
                >
                  Facilities
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Membership"
                  className={() => `${Navstyle.nav_link}`}
                >
                  Membership
                </NavLink>
              </li>
              <li>
                <NavLink className={() => `${Navstyle.nav_link}`}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className={() => `${Navstyle.nav_link}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/" className={Navstyle.join_btn}>
              Join us
            </Link>
          </div>
          <div className={Navstyle.icon_div}>
            <RiMenu3Fill
              className={Navstyle.mobile_icon}
              style={{ display: `${toggle_menu_icon}` }}
              onClick={toggle_icon}
            />
            <MdClose
              className={Navstyle.mobile_icon}
              style={{ display: `${toggle_close_icon}` }}
              onClick={toggle_icon}
            />
          </div>
          <div className={Navstyle.mobile_menu} ref={mobile_menu}>
            <ul>
              <li>
                <NavLink className={() => `${Navstyle.nav_link}`}>About</NavLink>
              </li>
              <li>
                <NavLink className={() => `${Navstyle.nav_link}`}>Facilities</NavLink>
              </li>
              <li>
                <NavLink className={() => `${Navstyle.nav_link}`}>Services</NavLink>
              </li>
              <li>
                <NavLink className={() => `${Navstyle.nav_link}`}>Membership</NavLink>
              </li>
              <li>
                <NavLink className={() => `${Navstyle.nav_link}`}>Contact us</NavLink>
              </li>
              <li>
                <Link className={Navstyle.mobile_join_btn}>Join us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
