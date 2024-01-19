import React, { useRef } from "react";
import membershipstyle from "./Membership.module.css";

export default function Membership() {
    const packageRefs=[useRef(null),useRef(null),useRef(null)]
  const membership_detail = [
    {
      title: "New Member Trial",
      price: "30",
      Benefits: ["4 classes", "Open studio access", "Online Resources"],
    },
    {
      title: "Golden Membership",
      price: "60",
      Benefits: [
        "Unlimited classes",
        "Open studio access",
        "Online Resources",
        "One Guest pass",
        "Free wifi",
        "Weekly Newsletter",
      ],
    },
    {
      title: "Platinum Memebership",
      price: "80",
      Benefits: [
        "Unlimited classes",
        "Open studio access",
        "Online Resources",
        "One Guest pass",
        "Free wifi",
        "Weekly Newsletter",
        "Personal Trainer",
      ],
    },
  ];
  const show_things=(index)=>{
    const thingsDiv = packageRefs[index].current.querySelector(
        `.${membershipstyle.things}`
      );
       const things_width=window.getComputedStyle(thingsDiv).getPropertyValue('height')
       if (things_width === '0px') {
        thingsDiv.style.height = '250px';
        thingsDiv.style.border='1px solid black'
      } else {
        thingsDiv.style.height = '0px';
        thingsDiv.style.border='0'
      }
  }
  return (
    <>
      <div className={membershipstyle.main_div}>
        {membership_detail.map((item, index) => (
          <div className={membershipstyle.package} ref={packageRefs[index]} >
            <div className={membershipstyle.price}>
              <div>
                <h3>{item.title}</h3>
              </div>
              <div>
                <b>
                  <sup>$</sup>{item.price}
                </b>
              </div>
              <p>Get to know the studio and our classess</p>
              <span>Valid for 1 month</span>
              <button>select</button>
              <div className={membershipstyle.display_more} data_value={index} onClick={()=>show_things(index)}>&gt;</div>
            </div>
            <div className={membershipstyle.things} >
              <ul>
                {
                    item.Benefits.map((ele,index)=>(
                       <li key={`benefits${index}`}>{ele}</li>
                    ))
                }
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
