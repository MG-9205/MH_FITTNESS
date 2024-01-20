import React from "react";
import Slider from "../slider/Slider";
import Image_index from "../../assets/image/Image_index";
import Facilitiesstyle from "./Facilities.module.css";

export default function Facilities() {
  return (
    <>
      <div className={Facilitiesstyle.heading}>
        <h1>The Facilities</h1>
        <p>
          At MH Fitness Club, we pride ourselves on providing a premier fitness
          experience in a cutting-edge facility. Our gym is thoughtfully
          designed to cater to all your fitness needs, whether you're a beginner
          or a seasoned athlete. With top-of-the-line equipment, spacious
          workout areas, and a motivating atmosphere, we're here to help you
          reach your fitness goals
        </p>
      </div>
      <div className={Facilitiesstyle.main_div}>
        <div classNameName={Facilitiesstyle.facility_div}>
          <div className={Facilitiesstyle.facility1}>
            <div className={Facilitiesstyle.content_facility}>
              <h2>Traning Area</h2>
              <p>
                Step into a world of focused fitness at MH FITNESS. Our training
                area is meticulously crafted to provide you with the perfect
                environment to push your limits and achieve remarkable results.
                Whether you're a beginner or a seasoned pro, our facility is
                designed to inspire and empower your fitness journey.
              </p>
            </div>
            <div className={Facilitiesstyle.img_div}>
              <img src={Image_index.Facilities_img[2]} alt="" />
            </div>
          </div>
          <div className={Facilitiesstyle.facility2}>
            <div className={Facilitiesstyle.img_div}>
              <img src={Image_index.Facilities_img[0]} alt="" />
            </div>

            <div className={Facilitiesstyle.content_facility}>
              <h2>Pool Area</h2>
              <p>
                Our pool area is your oasis of aquatic wellness, designed to add
                a splash of variety to your fitness routine. Whether you're
                looking for a low-impact workout, a relaxing swim, or a fun
                water-based activity, our pool area has something for everyone
              </p>
            </div>
          </div>
          <div className={Facilitiesstyle.facility3}>
            <div className={Facilitiesstyle.content_facility}>
              <h2>Looker Room</h2>
              <p>
                Our locker room facilities are designed with your comfort and
                convenience in mind. After an invigorating workout, step into a
                space that caters to your needs, allowing you to relax and
                recharge before continuing with your day.
              </p>
            </div>
            <div className={Facilitiesstyle.img_div}>
              <img src={Image_index.Facilities_img[1]} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Slider />
    </>
  );
}
