import React from "react";
import Component2style from "./Component2.module.css";
import Image_index from "../../assets/image/Image_index";

export default function Component2() {
  const methods_detail = [
    {
      image: Image_index.methods[0],
      heading: "Body Shape",
      Content:
        "Transform Your Body, Sculpt Your Future: Embrace the Body Shape Method at MH FITNESS !",
    },
    {
      image: Image_index.methods[1],
      heading: "Extreme",
      Content:
        "Unleash Your Potential with the Extreme Method: Redefine Your Limits at MH FITNESS!",
    },
    {
      image: Image_index.methods[2],
      heading: "Burn",
      Content:
        "Ignite Your Fitness Journey: Embrace the Burn Method for a Stronger, Fitter You at MH FITNESS!",
    },
    {
      image: Image_index.methods[3],
      heading: "Hiit",
      Content:
        "Elevate Your Fitness: Unleash the Power of HIIT at MH FITNESS  Where Results Meet Intensity!",
    },
  ];
  return (
    <><div className={Component2style.super_div}>
      <div className={Component2style.main_div}>
        <div className={Component2style.contanier_div}>
          <div className={Component2style.Div1}></div>
          <div className={Component2style.img_div}>
            <img src={Image_index.intro} alt="" />
          </div>
        </div>
      </div>
      <div className={Component2style.method_heading}>
        <h1>OUR METHODS</h1>
      </div>
      <div className={Component2style.method_div}>
        <div className={Component2style.method_bg}></div>
        <div className={Component2style.methods_container}>
          {methods_detail.map((item, index) => (
            <div className={Component2style.method}>
              <div className={Component2style.method_img} key={index}>
                <img src={item.image} alt="" />
              </div>
              <div className={Component2style.method_content}>
                <h2>{item.heading}</h2>
                <p>"{item.Content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={Component2style.method_mobile_div}>
        <div className={Component2style.method_mobile_img}>
          <img src={Image_index.methods[1]} alt="" />
        </div>
        <div className={Component2style.method_mobile_content}>
        {methods_detail.map((item, index) => (
              <div className={Component2style.method_mobile}>
                <h2>{item.heading}</h2>
                <p>"{item.Content}"</p>
              </div>
            
          ))}
        </div>
      </div></div>
    </>
  );
}
