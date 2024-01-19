import React, { lazy, useState } from 'react'
import servicestyle from './service.module.css'
import Image_index from "../../assets/image/Image_index";

export default function Service() {
  const servies_detail=[{"service_img":Image_index.services_img[0],
"service_heading":"Cardio Class",
"service_content":`Are you ready to boost your endurance, torch calories, and elevate
your heart rate? Our Cardio Classes at MH Fitness Club are designed
to do just that! Whether you're a cardio enthusiast or new to
high-intensity workouts, our classes offer something for everyone`,
"service_time":"1hr",
"service_session":"Mon, Wed, Fri",
"service_fee":"$20"
},
{"service_img":Image_index.services_img[1],
"service_heading":"GYM",
"service_content":`"Join our dynamic gym classes and transform your fitness journey
today! Our expert instructors lead a variety of high-energy classes
designed to cater to all fitness levels. Whether you're looking to
build strength, improve flexibility, or boost your cardio endurance,
we have a class for you."`,
"service_time":"2hr",
"service_session":"Mon,Tue,Wed,Thur,Fri,Sat",
"service_fee":"$30"
},
{"service_img":Image_index.services_img[2],
"service_heading":"Diet Plan",
"service_content":`"Unlock your full fitness potential with our customized nutrition
plans. Our experienced nutritionists will tailor a diet specifically
for you, taking into account your goals, dietary preferences, and
lifestyle. Whether you want to bulk up, slim down, or optimize your
performance, our personalized nutrition guidance will help you reach
your objectives.,`,
"service_time":"1hr",
"service_session":" Tue,Thur,Sat ",
"service_fee":"$15"
},
{"service_img":Image_index.services_img[3],
"service_heading":"Swim Class",
"service_content":`"Dive into a world of fitness and fun with our swim classes! Our
certified instructors offer a range of swim programs for all ages
and skill levels. Whether you're a beginner learning the basics or a
seasoned swimmer looking to improve technique, our classes are
designed to help you achieve your aquatic goals.`,
"service_time":"1hr",
"service_session":" Tue,Thur,Sat ",
"service_fee":"$20"
}
]
  let [service ,service_Set]=useState(servies_detail[0])
  const change_service=(event)=>{
    const selected =servies_detail.find((s)=>s.service_heading==event.target.value)
     console.log(selected)
     service_Set(service=selected)
  }

  return (
    <>
    
    <div className={servicestyle.main}>
        <div className={servicestyle.menu}> 
          <div className={servicestyle.menu1}>
            <li onClick={()=>service_Set(service=servies_detail[0])}>Cardio</li>
          <li onClick={()=>service_Set(service=servies_detail[2])}>Diet</li>
          <li onClick={()=>service_Set(service=servies_detail[1])}>Gym</li>
          <li onClick={()=>service_Set(service=servies_detail[3])}>Swim</li>
           
        </div>
        <div className={servicestyle.mobile_menu}>
      <select name="" id="" onChange={change_service} >
      {servies_detail.map((s) => (
            <option key={s.service_heading} value={s.service_heading}>
              {s.service_heading}
            </option>
          ))}
      </select>
    </div>
        </div>
        <div className={servicestyle.service_contanier}>
            <div className={servicestyle.content}>
                <div className={servicestyle.service_image}>
                    <img src={service.service_img} alt=""/>
                </div>
                <div className={servicestyle.service_content}>
                <h1>{service.service_heading}</h1>
          <p>
           {service.service_content}
          </p>
          <hr />
          <span>{service.service_session}</span>
          <span>Session time: {service.service_time}</span>
          <span> Fees: {service.service_fee} </span>
          <button>Book Now</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
