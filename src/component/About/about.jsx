import React from "react";
import { Link } from "react-router-dom";
import Slider from "../slider/Slider";
import aboutstyle from "./about.module.css";
import Image_index from "../../assets/image/Image_index";
import Component2 from "../component2/Component2";

export default function about() {
  return (
    <>
      <section className={aboutstyle.intro_section}>
        <div className={aboutstyle.main_intro}>
          <div className={aboutstyle.intro_div1}>
            <img src={Image_index.about_img[1]} alt="" />
          </div>
          <div className={aboutstyle.intro_div2}>
            <img src={Image_index.about_img[2]} alt="" />
          </div>
          <div className={aboutstyle.intro_div3}>
            <img src={Image_index.about_img[0]} alt="" />
          </div>
        </div>
        <div className={aboutstyle.intro_content}>
          <div className={aboutstyle.intro_heading}>
            <div>
              <h1>Train Hard. Sweat Hard.</h1>
            </div>
          </div>
          <div className={aboutstyle.intro_para}>
            <p>
              "Strength doesn't come from what you can do; <br />
              it comes from overcoming the things you once thought you
              couldn't."
            </p>
          </div>
          <div className={aboutstyle.btn}>
            <button>
              <Link to="/Membership" className={aboutstyle.btn_Link}>
                Become a Member
              </Link>
            </button>
            <button>
              <a href="#contact" className={aboutstyle.btn_Link}>
                Join Now
              </a>
            </button>
          </div>
        </div>
      </section>
      <div className={aboutstyle.about_intro}>
        <p>
          "Welcome to MH Fitness Club, where fitness meets transformation! We
          are your premier destination for achieving your health and wellness
          goals. Whether you're a seasoned athlete or just getting started, we
          have the resources and support you need to reach your peak
          performance. Join us today and unlock your full potential!"
        </p>
        <div className={aboutstyle.btn}>
          <button>
            <Link className={aboutstyle.btn_Link}>Join Now</Link>
          </button>
        </div>
      </div>
      <Component2 />
      <Slider />
    </>
  );
}
