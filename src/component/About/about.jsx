import React from "react";
import { Link } from "react-router-dom";
import Slider from "../slider/Slider";
import aboutstyle from "./about.module.css";
import Image_index from "../../assets/image/Image_index";

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
              <Link  className={aboutstyle.btn_Link}>Become a Member</Link>
            </button>
            <button>
              <Link  className={aboutstyle.btn_Link}>Join Now</Link>
            </button>
          </div>
        </div>
      </section>
      <Slider />
    </>
  );
}
