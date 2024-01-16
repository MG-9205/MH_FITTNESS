import {React,useRef,useState} from 'react'
import Image_index from '../../assets/image/Image_index'
import Sliderstyle from "./Slider.module.css"


export default function Slider() {
    const amount=270;
    const img_silder=useRef(null)
    const slider_scroller=(amount)=>{
        if(img_silder.current){
     img_silder.current.scrollLeft +=amount;}
    }

  return (
    <>
    <div className={Sliderstyle.main_div}>
        <div className={Sliderstyle.heading_div}> <h2>Image Gallery</h2>
        <p>"Explore our cutting-edge gym facilities, dynamic fitness classes, member achievements, and vibrant community events. Witness the energy of a healthier, stronger lifestyle. #FitnessGoals"</p>
        </div>
        <div className={Sliderstyle.slider_div}>
            <div className={Sliderstyle.image_slider} ref={img_silder}>
            {
                Image_index.slider_image.map((image,index)=>(
                    <div className={Sliderstyle.image_div}>
                        <img src={image} alt={`image${index}`} className={Sliderstyle.images} />
                    </div>
                ))
            }
           
           </div>
                <button className={Sliderstyle.left} onClick={()=>slider_scroller(amount)}>&lt;</button>
                <button className={Sliderstyle.right} onClick={()=>slider_scroller(-amount)}>&gt;</button>
            </div>
    </div>
    </>
  )
}
