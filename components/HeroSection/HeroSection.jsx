import React from 'react';
import Image from 'next/image';

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from '../componentsindex';
import images from "../../img";


const HeroSection = () => {
  return (
    <div  className={Style.herosection}>
      <div className={Style.herosection_box}>
        <div className={Style.herosection_box_left}>
          <h1>Discover Collect and Sell NFTs 🖼️</h1>
            <p>
                Unearth the most outstanding NFTs in every aspect of life.
                Create your NFTs and sell them
            </p>
            <div className={Style.herosection_box_left_btn}>
                <Button btnText="Search" />
            </div>
        </div>

        <div className={Style.herosection_box_right}>
            <Image src={images.hero} alt='hero' width={550} height={550}/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
