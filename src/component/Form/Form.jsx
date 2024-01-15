import React from "react";
import Formstyle from "./Form.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Form() {
  return (
    <div className={Formstyle.main_div}>
      <div className={Formstyle.div1}>
        <div>
          <h1>Contact us</h1>
        </div>
        <div>
          <form>
            <div className={Formstyle.contact_detail}>
              <label htmlFor="name123">
                <input type="text" id="name123" required="required"/>
                <span>Name</span>
              </label>
            </div>
            <div className={Formstyle.contact_detail}>
              <label htmlFor="Email123">
                <input type="email" id="Email123"  required="required"/>
                <span>Email</span>
              </label>
            </div>
            <div className={Formstyle.contact_detail}>
              <label htmlFor="Phone123">
                <input type="number" id="Phone123"  required="required"/>
                <span>Phone</span>
              </label>
            </div>
            <div className={Formstyle.contact_detail}>
              <textarea name="" id="" cols="30" rows="5"  required="required"></textarea>
              <span>Message</span>
            </div>
            <div className={Formstyle.contact_detail}>
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
      <div className={Formstyle.div2}>
        <div>
          <h1>Contact information</h1>
        </div>
        <div>
          <i className={Formstyle.text}>
          "Connect with Us for a Stronger You: 
          Reach Out Today and Let's Sculpt Your Fitness Goals Together!"
          </i>
        </div>
        <div className={Formstyle.div2_box}>
          <div className={Formstyle.div2_icon}>
            <FaLocationDot />
          </div>
          <div className={Formstyle.div2_text}>
            <h3>Address</h3>
            <p>138 west street near signature bridge new delhi 110094</p>
          </div>
        </div>
        <div className={Formstyle.div2_box}>
          <div className={Formstyle.div2_icon}>
            <FaPhoneVolume />
          </div>
          <div className={Formstyle.div2_text}>
            <h3>Phone No:</h3>
            <p>91+ 92050XXX41</p>
          </div>
        </div >
        <div className={Formstyle.div2_box}>
          <div className={Formstyle.div2_icon}>
            <MdEmail />
          </div>
          <div className={Formstyle.div2_text}>
            <h3>Email</h3>
            <p>manishgupta9205@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
