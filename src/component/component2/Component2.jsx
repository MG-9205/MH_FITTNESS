import React from "react";
import Component2style from "./Component2.module.css";
import Image_index from "../../assets/image/Image_index";
import { Link } from "react-router-dom";

export default function Component2() {
  return (
    <>
      <div className={Component2style.main_div}>
        <div className={Component2style.contanier_div}>
            <div className={Component2style.Div1}></div>
          <div className={Component2style.img_div}>
            <img src={Image_index.intro} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div>
            
        </div>
      </div>
    </>
  );
}
